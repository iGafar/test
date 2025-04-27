export type ExpenseItemType =
	| 'Еда'
	| 'Транспорт'
	| 'Жильё'
	| 'Развлечения'
	| 'Образование'
	| 'Другое';

export interface IExpenseItem {
	id: number;
	description: string;
	category: ExpenseItemType;
	date: string;
	amount: number;
}

export interface IExpenseContext {
	expenses: IExpenseItem[];
	addExpense: (item: Omit<IExpenseItem, 'id'>) => void;
	updateExpense: (id: number, updatedItem: Partial<IExpenseItem>) => void;
	deleteExpense: (id: number) => void;
}