export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
  description: string;
}

export type Role = 'viewer' | 'admin';
export type Theme = 'light' | 'dark';
