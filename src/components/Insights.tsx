import { useMemo } from 'react';
import { useFinance } from '../context/FinanceContext';
import { Transaction } from '../types';
import { Box, Card, CardContent, Typography, Grid, Avatar, Fade, useTheme } from '@mui/material';
import { Lightbulb, TrendingUp, ErrorOutline } from '@mui/icons-material';

export default function Insights() {
  const { transactions } = useFinance();
  const muiTheme = useTheme();

  const insights = useMemo(() => {
    if (!transactions.length) return [];

    let totalExpense = 0;
    const catMap: Record<string, number> = {};

    transactions.forEach((t: Transaction) => {
      const amount = Number(t.amount);
      if (t.type === 'expense') {
        totalExpense += amount;
        catMap[t.category] = (catMap[t.category] || 0) + amount;
      }
    });

    const highestCategory = Object.keys(catMap).reduce((a, b) => (catMap[a] > catMap[b] ? a : b), '');
    const highestAmount = catMap[highestCategory] || 0;

    const data = [];

    if (totalExpense > 0 && highestCategory) {
      data.push({
        id: '1',
        icon: <TrendingUp color="warning" />,
        borderColor: muiTheme.palette.warning.main,
        iconBg: `${muiTheme.palette.warning.main}20`,
        title: 'Highest Spending Category',
        text: `You spent $${highestAmount.toLocaleString()} on ${highestCategory}, which is ${Math.round((highestAmount / totalExpense) * 100)}% of your total expenses.`
      });
    }

    if (totalExpense > 2000) {
      data.push({
        id: '2',
        icon: <ErrorOutline color="error" />,
        borderColor: muiTheme.palette.error.main,
        iconBg: `${muiTheme.palette.error.main}20`,
        title: 'High Spending Alert',
        text: `Your overall expenses ($${totalExpense.toLocaleString()}) are quite high this period. Check your discretionary spending.`
      });
    } else if (totalExpense > 0) {
      data.push({
        id: '3',
        icon: <Lightbulb color="success" />,
        borderColor: muiTheme.palette.success.main,
        iconBg: `${muiTheme.palette.success.main}20`,
        title: 'Good Expense Management',
        text: `You're keeping your expenses under control at $${totalExpense.toLocaleString()}!`
      });
    }

    return data;
  }, [transactions, muiTheme]);

  if (insights.length === 0) return null;

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Lightbulb color="warning" />
        Key Insights
      </Typography>
      <Grid container spacing={3}>
        {insights.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
            <Fade in={true} timeout={1000 + (index * 200)}>
              <Card 
                sx={{ 
                  height: '100%', 
                  borderLeft: `4px solid ${item.borderColor}`,
                  display: 'flex',
                  alignItems: 'flex-start'
                }}
              >
                <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', pb: '16px !important' }}>
                  <Avatar sx={{ bgcolor: item.iconBg }}>
                    {item.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {item.text}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
