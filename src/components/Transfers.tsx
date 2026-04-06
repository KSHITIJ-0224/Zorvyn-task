import { Box, Typography, Card, Avatar, TextField, InputAdornment, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Search, FilterList, ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { useFinance } from '../context/FinanceContext';

export default function Transfers() {
  const { transactions } = useFinance();

  return (
    <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">Transfers</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            size="small"
            placeholder="Search transactions..."
            variant="outlined"
            sx={{ bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2, cursor: 'pointer' }}>
            <FilterList fontSize="small" />
            <Typography variant="body2">Filter</Typography>
          </Box>
        </Box>
      </Box>

      <Card sx={{ p: 0, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead sx={{ bgcolor: 'rgba(255,255,255,0.02)' }}>
              <TableRow>
                <TableCell sx={{ color: 'text.secondary', fontWeight: 'bold' }}>TRANSACTION</TableCell>
                <TableCell sx={{ color: 'text.secondary', fontWeight: 'bold' }}>DATE</TableCell>
                <TableCell sx={{ color: 'text.secondary', fontWeight: 'bold' }}>AMOUNT</TableCell>
                <TableCell sx={{ color: 'text.secondary', fontWeight: 'bold' }}>STATUS</TableCell>
                <TableCell sx={{ color: 'text.secondary', fontWeight: 'bold' }} align="right">CATEGORY</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((tx) => (
                <TableRow key={tx.id} sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.02)' } }}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: tx.type === 'income' ? 'rgba(45, 212, 191, 0.1)' : 'rgba(244, 63, 94, 0.1)', color: tx.type === 'income' ? '#2dd4bf' : '#f43f5e' }}>
                        {tx.type === 'income' ? <ArrowDownward /> : <ArrowUpward />}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" fontWeight="bold">{tx.description}</Typography>
                        <Typography variant="caption" color="text.secondary">#TXN-{tx.id.padStart(5, '0')}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{tx.date}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight="bold" color={tx.type === 'income' ? '#2dd4bf' : 'white'}>
                      {tx.type === 'income' ? '+' : '-'}${Number(tx.amount).toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label="Completed" 
                      size="small" 
                      sx={{ 
                        bgcolor: 'rgba(45, 212, 191, 0.1)', 
                        color: '#2dd4bf', 
                        fontWeight: 'bold',
                        fontSize: '10px'
                      }} 
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="caption" sx={{ bgcolor: 'rgba(255,255,255,0.05)', px: 1, py: 0.5, borderRadius: 1 }}>
                      {tx.category.toUpperCase()}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
