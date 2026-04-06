import { Transaction } from '../types';

export const initialTransactions: Transaction[] = [
  { id: '1', date: '2023-10-01', amount: 5000, category: 'Salary', type: 'income', description: 'Monthly Salary' },
  { id: '2', date: '2023-10-02', amount: 1500, category: 'Housing', type: 'expense', description: 'Rent' },
  { id: '3', date: '2023-10-05', amount: 200, category: 'Groceries', type: 'expense', description: 'Supermarket' },
  { id: '4', date: '2023-10-10', amount: 100, category: 'Utilities', type: 'expense', description: 'Electric Bill' },
  { id: '5', date: '2023-10-15', amount: 300, category: 'Freelance', type: 'income', description: 'Project A' },
  { id: '6', date: '2023-10-20', amount: 50, category: 'Entertainment', type: 'expense', description: 'Movie Tickets' },
  { id: '7', date: '2023-10-22', amount: 80, category: 'Dining', type: 'expense', description: 'Restaurant' },
  { id: '8', date: '2023-10-28', amount: 120, category: 'Groceries', type: 'expense', description: 'Supermarket' },
];
