import Header from '@/components/Header';
import Section from '@/components/Section';
import { ExpenseProvider } from '@/context/ExpenseContext';
import AntdProvider from '@/providers/AntdProvider';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <AntdProvider>
      <Toaster
        richColors
        expand={false}
        position="top-right"
        closeButton
        toastOptions={{
          duration: 3000,
          className: 'toaster-class',
        }}
      />
      <ExpenseProvider>
        <Header />
        <Section />
      </ExpenseProvider>
    </AntdProvider>
  );
}
