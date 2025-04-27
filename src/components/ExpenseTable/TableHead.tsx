import { SelectLabel, TableHeadStyle } from '@/components/ExpenseTable/styles';
import { ExpenseItemType, IExpenseItem } from '@/context/ExpenseContext.types';
import { CaretDownOutlined } from '@ant-design/icons';
import { Flex, Grid, Select, Typography } from 'antd';

const { Title } = Typography;
const { useBreakpoint } = Grid;

interface HeaderProps {
  onFilterChange: (value: ExpenseItemType) => void;
  onSortChange: (value: keyof Omit<IExpenseItem, 'id'>) => void;
}

interface IFilterOption {
  label: ExpenseItemType;
  value: ExpenseItemType;
}

const filterOptions: IFilterOption[] = [
  { label: 'Еда', value: 'Еда' },
  { label: 'Транспорт', value: 'Транспорт' },
  { label: 'Жильё', value: 'Жильё' },
  { label: 'Развлечения', value: 'Развлечения' },
  { label: 'Образование', value: 'Образование' },
  { label: 'Другое', value: 'Другое' },
];

const sortOptions = [
  { label: 'описанию', value: 'description' },
  { label: 'категории', value: 'category' },
  { label: 'дате', value: 'date' },
  { label: 'сумме', value: 'amount' },
];

export const TableHead = ({ onFilterChange, onSortChange }: HeaderProps) => {
  const { md, sm } = useBreakpoint();

  return (
    <TableHeadStyle>
      <Flex justify="space-between" align="center" vertical={!md}>
        <Title level={1}>Таблица расходов</Title>
        <Flex vertical={!sm}>
          <Select
            suffixIcon={<CaretDownOutlined />}
            onChange={onFilterChange}
            options={filterOptions}
            placeholder="Фильтровать по категории"
            allowClear
            style={{ minWidth: 150, textAlign: 'right' }}
          />
          <SelectLabel align="center">
            <span>Сортировать по</span>
            <Select
              defaultValue="description"
              suffixIcon={<CaretDownOutlined />}
              onChange={onSortChange}
              options={sortOptions}
            />
          </SelectLabel>
        </Flex>
      </Flex>
    </TableHeadStyle>
  );
};
