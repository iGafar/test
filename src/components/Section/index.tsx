import CreateExpenseForm from '@/components/CreateExpenseForm';
import ExpenseTable from '@/components/ExpenseTable';
import { Container } from '@/styles/global';
import { Flex, Grid } from 'antd';

const { useBreakpoint } = Grid;

export default function Section() {
  const { xl } = useBreakpoint();

  return (
    <section>
      <Container>
        <Flex justify="space-between" gap={34}>
          <ExpenseTable />
          {xl && <CreateExpenseForm />}
        </Flex>
      </Container>
    </section>
  );
}
