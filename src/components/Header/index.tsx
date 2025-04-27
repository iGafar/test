import CreateExpenseForm from '@/components/CreateExpenseForm';
import { HeaderStyle, Link } from '@/components/Header/styles';
import { Container } from '@/styles/global';
import { Button, Flex, Grid } from 'antd';
import { useState } from 'react';

const { useBreakpoint } = Grid;

const Nav = () => (
  <nav>
    <Flex gap={48} justify="center">
      <Link href="#">Мои расходы</Link>
      <Link href="#">Анализ расходов</Link>
    </Flex>
  </nav>
);

export default function Header() {
  const { md, xl } = useBreakpoint();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <HeaderStyle>
      <Container>
        <Flex justify="space-between" align="center">
          <img src="./icons/logo.svg" alt="logo" />

          {md && <Nav />}

          <Flex gap={5} align="center">
            {!xl && (
              <Button size="small" onClick={() => setIsModalOpen(true)}>
                Новый расход
              </Button>
            )}
            <Button size="small" type="text">
              Выйти
            </Button>
          </Flex>
        </Flex>
      </Container>
      {!md && (
        <Container className="nav-container">
          <Nav />
        </Container>
      )}

      <CreateExpenseForm
        isModal
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      />
    </HeaderStyle>
  );
}
