import { Box, Typography, Card, Grid, Avatar } from '@mui/material';
import { CreditCard, AccountBalance, TrendingUp, Wallet as WalletIcon } from '@mui/icons-material';

export default function Wallet() {
  return (
    <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>Wallet</Typography>

      <Grid container spacing={4}>
        {/* Virtual Card Section */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ 
            height: 250, 
            width: '100%', 
            borderRadius: 4, 
            background: 'linear-gradient(135deg, #2dd4bf 0%, #115e59 100%)', 
            p: 3, 
            color: '#000', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px rgba(45, 212, 191, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Subtle patterns for premium feel */}
            <Box sx={{ 
              position: 'absolute', 
              top: -50, 
              right: -50, 
              width: 150, 
              height: 150, 
              borderRadius: '50%', 
              background: 'rgba(255,255,255,0.1)',
              filter: 'blur(20px)'
            }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight="bold">Personal Card</Typography>
              <CreditCard />
            </Box>
            
            <Box>
              <Typography variant="h5" sx={{ letterSpacing: 4, mb: 1 }}>•••• •••• •••• 4242</Typography>
              <Box sx={{ display: 'flex', gap: 4 }}>
                <Box>
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>CARD HOLDER</Typography>
                  <Typography variant="body2" fontWeight="bold">KSHITIJ CHAVAN</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>EXPIRES</Typography>
                  <Typography variant="body2" fontWeight="bold">05 / 28</Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <Typography variant="h5" fontWeight="bold">$12,450.80</Typography>
              <Typography variant="h6" fontWeight="italic">VISA</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Account Details */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Accounts Info</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Card sx={{ p: 2, display: 'flex', justifyContent: 'space-between', border: '1px solid rgba(255,255,255,0.05)' }}>
               <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'rgba(45, 212, 191, 0.1)', color: '#2dd4bf' }}><AccountBalance /></Avatar>
                  <Box>
                    <Typography variant="body1" fontWeight="bold">Total Assets</Typography>
                    <Typography variant="caption" color="text.secondary">Main Savings</Typography>
                  </Box>
               </Box>
               <Typography variant="h6" fontWeight="bold">$45,210.00</Typography>
            </Card>

            <Card sx={{ p: 2, display: 'flex', justifyContent: 'space-between', border: '1px solid rgba(255,255,255,0.05)' }}>
               <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e' }}><TrendingUp /></Avatar>
                  <Box>
                    <Typography variant="body1" fontWeight="bold">Investments</Typography>
                    <Typography variant="caption" color="text.secondary">Crypto + Stocks</Typography>
                  </Box>
               </Box>
               <Typography variant="h6" fontWeight="bold">$12,840.45</Typography>
            </Card>

            <Card sx={{ p: 2, display: 'flex', justifyContent: 'space-between', border: '1px solid rgba(255,255,255,0.05)' }}>
               <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'rgba(129, 140, 248, 0.1)', color: '#818cf8' }}><WalletIcon /></Avatar>
                  <Box>
                    <Typography variant="body1" fontWeight="bold">Cash Wallet</Typography>
                    <Typography variant="caption" color="text.secondary">Liquid funds</Typography>
                  </Box>
               </Box>
               <Typography variant="h6" fontWeight="bold">$2,300.00</Typography>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
