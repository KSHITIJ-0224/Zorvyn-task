import { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import { Transaction } from '../types';
import TransactionModal from './TransactionModal';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  IconButton, 
  Chip,
  Fade,
  TextField,
  MenuItem,
  InputAdornment,
  useTheme
} from '@mui/material';
import { 
  Add as AddIcon, 
  DeleteOutline as DeleteIcon, 
  Search as SearchIcon,
  FilterList as FilterIcon,
  ArrowUpward, 
  ArrowDownward 
} from '@mui/icons-material';

export default function TransactionsSection() {
  const { transactions, role } = useFinance();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const muiTheme = useTheme();

  const filteredTransactions = transactions
    .filter((t: Transaction) => {
      const matchSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchType = filterType === 'all' || t.type === filterType;
      return matchSearch && matchType;
    })
    .sort((a: Transaction, b: Transaction) => {
      if (sortOrder === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortOrder === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortOrder === 'amount-high') return Number(b.amount) - Number(a.amount);
      if (sortOrder === 'amount-low') return Number(a.amount) - Number(b.amount);
      return 0;
    });

  return (
    <Fade in={true} timeout={1200}>
      <Card sx={{ mb: 4, borderRadius: 4, overflow: 'visible' }}>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, gap: 2, mb: 4 }}>
            <Typography variant="h5" fontWeight="bold">Recent Transactions</Typography>
            {role === 'admin' && (
              <Button 
                variant="contained" 
                color="primary" 
                startIcon={<AddIcon />}
                onClick={() => setIsModalOpen(true)}
                sx={{ borderRadius: 2, px: 3, boxShadow: muiTheme.palette.mode === 'dark' ? '0 4px 14px rgba(96, 165, 250, 0.4)' : '0 4px 14px rgba(59, 130, 246, 0.4)' }}
              >
                Add Transaction
              </Button>
            )}
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
            <TextField 
              variant="outlined"
              size="small"
              placeholder="Search descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ flexGrow: 1, minWidth: 200 }}
              InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon color="action" /></InputAdornment>,
              }}
            />
            
            <TextField
              select
              size="small"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              sx={{ minWidth: 150 }}
              InputProps={{
                startAdornment: <InputAdornment position="start"><FilterIcon color="action" fontSize="small" /></InputAdornment>,
              }}
            >
              <MenuItem value="all">All Types</MenuItem>
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="expense">Expense</MenuItem>
            </TextField>

            <TextField
              select
              size="small"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              sx={{ minWidth: 180 }}
            >
              <MenuItem value="newest">Newest First</MenuItem>
              <MenuItem value="oldest">Oldest First</MenuItem>
              <MenuItem value="amount-high">Amount (High to Low)</MenuItem>
              <MenuItem value="amount-low">Amount (Low to High)</MenuItem>
            </TextField>
          </Box>

          <TableContainer sx={{ overflowX: 'auto', border: `1px solid ${muiTheme.palette.divider}`, borderRadius: 3, boxShadow: muiTheme.palette.mode === 'dark' ? 'none' : '0 1px 3px rgba(0,0,0,0.05)' }}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead sx={{ bgcolor: muiTheme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', borderBottom: `2px solid ${muiTheme.palette.divider}` }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Category</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>Amount</TableCell>
                  {role === 'admin' && <TableCell align="center" sx={{ fontWeight: 'bold' }}>Action</TableCell>}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((t: Transaction) => (
                    <TableRow key={t.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 }, transition: 'all 0.2s', '&:hover': { bgcolor: muiTheme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)' } }}>
                      <TableCell sx={{ color: 'text.secondary' }}>{t.date}</TableCell>
                      <TableCell sx={{ fontWeight: 500 }}>{t.description}</TableCell>
                      <TableCell>
                        <Chip label={t.category} size="small" sx={{ borderRadius: 2, fontWeight: 500, bgcolor: muiTheme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }} />
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 'bold', color: t.type === 'income' ? 'secondary.main' : 'error.main' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 0.5 }}>
                          {t.type === 'income' ? <ArrowUpward fontSize="inherit" /> : <ArrowDownward fontSize="inherit" color="action" />}
                          {t.type === 'income' ? '+' : '-'}${Number(t.amount).toLocaleString()}
                        </Box>
                      </TableCell>
                      {role === 'admin' && (
                        <TableCell align="center">
                          <IconButton size="small" color="error" title="Mock Delete Action">
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </TableCell>
                      )}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={role === 'admin' ? 5 : 4} align="center" sx={{ py: 6, color: 'text.secondary' }}>
                      <SearchIcon sx={{ fontSize: 48, opacity: 0.2, mb: 2, display: 'block', mx: 'auto' }} />
                      <Typography>No transactions found matching your criteria.</Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <TransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </CardContent>
      </Card>
    </Fade>
  );
}
