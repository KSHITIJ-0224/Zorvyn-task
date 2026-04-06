import { createContext, useReducer, useEffect, useContext, ReactNode } from 'react';
import { initialTransactions } from '../data/mockData';
import { Transaction, Role, Theme } from '../types';

interface FinanceState {
  transactions: Transaction[];
  role: Role;
  theme: Theme;
}

type FinanceAction = 
  | { type: 'ADD_TRANSACTION'; payload: Transaction }
  | { type: 'SET_ROLE'; payload: Role }
  | { type: 'TOGGLE_THEME' };

interface FinanceContextProps extends FinanceState {
  addTransaction: (transaction: Transaction) => void;
  setRole: (role: Role) => void;
  toggleTheme: () => void;
}

const FinanceContext = createContext<FinanceContextProps | undefined>(undefined);

const initialState: FinanceState = {
  transactions: initialTransactions,
  role: 'viewer', // 'viewer' or 'admin'
  theme: 'dark', // 'light' or 'dark'
};

function financeReducer(state: FinanceState, action: FinanceAction): FinanceState {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [action.payload, ...state.transactions] };
    case 'SET_ROLE':
      return { ...state, role: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}

export function FinanceProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(financeReducer, initialState);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  const value: FinanceContextProps = {
    transactions: state.transactions,
    role: state.role,
    theme: state.theme,
    addTransaction: (transaction: Transaction) => {
      dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    },
    setRole: (role: Role) => {
      dispatch({ type: 'SET_ROLE', payload: role });
    },
    toggleTheme: () => {
      dispatch({ type: 'TOGGLE_THEME' });
    }
  };

  return <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>;
}

export function useFinance(): FinanceContextProps {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance must be used within a FinanceProvider');
  }
  return context;
}
