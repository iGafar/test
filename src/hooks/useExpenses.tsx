import { ExpenseContext } from '@/context/ExpenseContext';
import { useContext } from 'react';

export const useExpenses = () => {
  const context = useContext(ExpenseContext);

  return context;
};
