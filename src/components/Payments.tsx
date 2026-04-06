import { Box, Typography, Card, Grid, Avatar, Button, LinearProgress } from '@mui/material';
import { ShoppingBag, Subscriptions, Lightbulb } from '@mui/icons-material';

const subscriptions = [
  { id: 1, name: 'Netflix Premium', amount: 15.99, date: 'May 12, 2024', icon: <Subscriptions />, color: '#f43f5e' },
  { id: 2, name: 'Adobe Creative Cloud', amount: 52.99, date: 'May 15, 2024', icon: <ShoppingBag />, color: '#818cf8' },
  { id: 3, name: 'Spotify Music', amount: 9.99, date: 'May 18, 2024', icon: <Subscriptions />, color: '#2dd4bf' },
  { id: 4, name: 'Electricity Bill', amount: 84.50, date: 'May 20, 2024', icon: <Lightbulb />, color: '#eab308' },
];

export default function Payments() {
  return (
    <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>Payments</Typography>

      <Grid container spacing={3}>
        {/* Scheduled Payments */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Upcoming Bills</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {subscriptions.map((sub) => (
              <Card key={sub.id} sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(255,255,255,0.05)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: `${sub.color}20`, color: sub.color, p: 0.5, borderRadius: 2 }} variant="rounded">
                    {sub.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="body1" fontWeight="bold">{sub.name}</Typography>
                    <Typography variant="caption" color="text.secondary">Next payment: {sub.date}</Typography>
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" fontWeight="bold" color="white">${sub.amount.toFixed(2)}</Typography>
                  <Button size="small" sx={{ p: 0, textTransform: 'none', color: '#2dd4bf', minWidth: 'auto', '&:hover': { background: 'none', textDecoration: 'underline' } }}>
                    Pay Now
                  </Button>
                </Box>
              </Card>
            ))}
          </Box>
        </Grid>

        {/* Payment Summary / Limits */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Monthly Limit</Typography>
          <Card sx={{ p: 3, border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="caption" color="text.secondary">SPENT THIS MONTH</Typography>
              <Typography variant="h4" fontWeight="bold">$2,840.00</Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="caption" color="text.secondary">MONTHLY CAP</Typography>
                <Typography variant="caption" color="text.secondary">$5,000.00</Typography>
              </Box>
              <LinearProgress variant="determinate" value={56.8} sx={{ height: 8, borderRadius: 10, bgcolor: 'rgba(255,255,255,0.05)', '& .MuiLinearProgress-bar': { bgcolor: '#2dd4bf' } }} />
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>56.8% used of your monthly limit</Typography>
            </Box>
          </Card>

          <Button 
            fullWidth 
            variant="contained" 
            sx={{ 
                mt: 3, 
                py: 1.5, 
                bgcolor: '#2dd4bf', 
                color: '#000', 
                '&:hover': { bgcolor: '#23b3a0' } 
            }}
          >
            Manage Auto-pay
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
