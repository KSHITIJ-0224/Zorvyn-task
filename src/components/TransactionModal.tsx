import { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import { Transaction } from '../types';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  TextField, 
  MenuItem, 
  ToggleButtonGroup, 
  ToggleButton, 
  IconButton,
  Box,
  Typography
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TransactionModal({ isOpen, onClose }: TransactionModalProps) {
  const { addTransaction } = useFinance();
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'General',
    type: 'expense' as 'expense' | 'income',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return;

    const newTransaction: Transaction = {
      id: Date.now().toString(),
      description: formData.description,
      amount: Number(formData.amount),
      category: formData.category,
      type: formData.type,
      date: formData.date
    };

    addTransaction(newTransaction);
    // Reset form
    setFormData({
      description: '',
      amount: '',
      category: 'General',
      type: 'expense',
      date: new Date().toISOString().split('T')[0]
    });
    onClose();
  };

  const handleTypeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newType: 'expense' | 'income' | null,
  ) => {
    if (newType !== null) {
      setFormData({ ...formData, type: newType });
    }
  };

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: { borderRadius: 4, p: 1 }
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" fontWeight="bold">Add Transaction</Typography>
        <IconButton onClick={onClose} size="small"><CloseIcon /></IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: '8px !important' }}>
          
          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>Transaction Type</Typography>
            <ToggleButtonGroup
              color={formData.type === 'income' ? 'secondary' : 'error'}
              value={formData.type}
              exclusive
              onChange={handleTypeChange}
              fullWidth
              size="small"
            >
              <ToggleButton value="income" sx={{ fontWeight: 'bold' }}>Income</ToggleButton>
              <ToggleButton value="expense" sx={{ fontWeight: 'bold' }}>Expense</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              fullWidth
              label="Amount ($)"
              type="number"
              required
              inputProps={{ min: "0.01", step: "0.01" }}
              placeholder="0.00"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />
            <TextField
              fullWidth
              label="Date"
              type="date"
              required
              InputLabelProps={{ shrink: true }}
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </Box>

          <TextField
            fullWidth
            label="Description"
            required
            placeholder="E.g., Client Payment, Groceries..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />

          <TextField
            fullWidth
            select
            label="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="Salary">Salary</MenuItem>
            <MenuItem value="Housing">Housing</MenuItem>
            <MenuItem value="Food & Dining">Food & Dining</MenuItem>
            <MenuItem value="Groceries">Groceries</MenuItem>
            <MenuItem value="Utilities">Utilities</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
            <MenuItem value="Transportation">Transportation</MenuItem>
            <MenuItem value="Shopping">Shopping</MenuItem>
            <MenuItem value="Freelance">Freelance</MenuItem>
          </TextField>

        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={onClose} variant="outlined" color="inherit" sx={{ borderRadius: 2 }}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: 2, px: 3 }}>
            Save Transaction
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
