import {
  DatePickerStyle,
  FormWrapper,
  RadioGroup,
  TitleStyle,
} from '@/components/CreateExpenseForm/styles';
import ShadowBox from '@/components/ShadowBox';
import { ExpenseItemType } from '@/context/ExpenseContext.types';
import { useExpenses } from '@/hooks/useExpenses';
import { Button, Form, Input, Modal, Radio } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { toast } from 'sonner';

dayjs.extend(customParseFormat);

interface ICategory {
  label: ExpenseItemType;
  value: ExpenseItemType;
  icon: string;
}

const categories: ICategory[] = [
  { label: 'Еда', value: 'Еда', icon: './icons/food.svg' },
  { label: 'Транспорт', value: 'Транспорт', icon: './icons/car.svg' },
  { label: 'Жильё', value: 'Жильё', icon: './icons/house.svg' },
  { label: 'Развлечения', value: 'Развлечения', icon: './icons/game.svg' },
  { label: 'Образование', value: 'Образование', icon: './icons/education.svg' },
  { label: 'Другое', value: 'Другое', icon: './icons/other.svg' },
];

interface FormValues {
  description: string;
  category: ExpenseItemType;
  date: Dayjs;
  sum: string;
}

interface ICreateExpenseFormProps {
  isModal?: boolean;
  isOpen?: boolean;
  onCancel?: () => void;
}

const ExpenseForm = () => {
  const [form] = Form.useForm();
  const { addExpense } = useExpenses();

  const onFinish = (values: FormValues) => {
    addExpense({
      description: values.description,
      category: values.category,
      date: values.date.format('DD.MM.YYYY'),
      amount: parseFloat(values.sum),
    });

    toast.success('Расход успешно добавлен');
    form.resetFields();
  };

  return (
    <FormWrapper>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ category: 'Еда' }}
      >
        <TitleStyle level={2}>Новый расход</TitleStyle>

        <Form.Item
          name="description"
          label="Описание"
          rules={[{ required: true, message: 'Введите описание' }]}
        >
          <Input placeholder="Введите описание" />
        </Form.Item>

        <Form.Item
          name="category"
          label="Категория"
          rules={[{ required: true, message: 'Выберите категорию' }]}
        >
          <RadioGroup>
            {categories.map((cat) => (
              <Radio key={cat.value} value={cat.value}>
                <img src={cat.icon} alt={cat.value} />
                {cat.label}
              </Radio>
            ))}
          </RadioGroup>
        </Form.Item>

        <Form.Item
          name="date"
          label="Дата"
          rules={[{ required: true, message: 'Выберите дату' }]}
        >
          <DatePickerStyle format="DD.MM.YYYY" placeholder="Выберите дату" />
        </Form.Item>

        <Form.Item
          name="sum"
          label="Сумма"
          rules={[
            { required: true, message: 'Введите сумму' },
            {
              pattern: /^\d+(\.\d{1,2})?$/,
              message: 'Введите корректную сумму',
            },
          ]}
        >
          <Input placeholder="Введите сумму" />
        </Form.Item>

        <Button htmlType="submit" type="primary" style={{ width: '100%' }}>
          Добавить новый расход
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default function CreateExpenseForm({
  isModal = false,
  isOpen = false,
  onCancel,
}: ICreateExpenseFormProps) {
  return isModal ? (
    <Modal open={isOpen} onCancel={onCancel} footer={false}>
      <ExpenseForm />
    </Modal>
  ) : (
    <ShadowBox>
      <ExpenseForm />
    </ShadowBox>
  );
}
