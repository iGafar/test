import {
  ExpenseTableStyle,
  TableWrapper,
} from '@/components/ExpenseTable/styles';
import { TableHead } from '@/components/ExpenseTable/TableHead';
import ShadowBox from '@/components/ShadowBox';
import { ExpenseItemType, IExpenseItem } from '@/context/ExpenseContext.types';
import { useExpenses } from '@/hooks/useExpenses';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Button, Empty, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';

export default function ExpenseTable() {
  const { expenses: data, deleteExpense } = useExpenses();

  const [filter, setFilter] = useState<null | ExpenseItemType>(null);
  const [sort, setSort] =
    useState<keyof Omit<IExpenseItem, 'id'>>('description');

  const columns: ColumnsType<IExpenseItem> = [
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Категория',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Сумма',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => `${amount.toLocaleString()} ₽`,
    },
    {
      title: '',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button type="text" icon={<EditFilled />} />
          <Button
            type="text"
            icon={<DeleteFilled />}
            onClick={() => deleteExpense(record.id)}
          />
        </Space>
      ),
      width: 112,
    },
  ];
  const sortedData = data.sort((a, b) => {
    if (sort === 'amount') {
      return b[sort] - a[sort];
    }
    return a[sort].localeCompare(b[sort]);
  });

  const filteredData = filter
    ? sortedData.filter((el) => el.category === filter)
    : sortedData;

  return (
    <ExpenseTableStyle>
      <ShadowBox>
        <TableHead
          onFilterChange={(e) => setFilter(e)}
          onSortChange={(e) => setSort(e)}
        />
        <TableWrapper>
          <Table
            columns={columns}
            dataSource={filteredData}
            bordered={false}
            pagination={false}
            scroll={{ x: 'max-content' }}
            rowKey="id"
            locale={{
              emptyText: <Empty description="Пусто" />,
            }}
          />
        </TableWrapper>
      </ShadowBox>
    </ExpenseTableStyle>
  );
}
