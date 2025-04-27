import { IExpenseContext, IExpenseItem } from '@/context/ExpenseContext.types';
import { createContext, ReactNode, useEffect, useState } from 'react';

export const ExpenseContext /* eslint-disable-line */ =
  createContext<IExpenseContext>({
    expenses: [],
    addExpense: () => {},
    updateExpense: () => {},
    deleteExpense: () => {},
  });

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  const [expenses, setExpenses] = useState<IExpenseItem[]>(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (item: Omit<IExpenseItem, 'id'>) => {
    setExpenses((prev) => [
      ...prev,
      {
        ...item,
        id: Date.now(),
      },
    ]);
  };

  const updateExpense = (id: number, updatedItem: Partial<IExpenseItem>) => {
    setExpenses((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)),
    );
  };

  const deleteExpense = (id: number) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, updateExpense, deleteExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
