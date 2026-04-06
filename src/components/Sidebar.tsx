import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  SwapHoriz as TransfersIcon,
  Payment as PaymentsIcon,
  SportsEsports as GamesIcon,
  ConfirmationNumber as TicketsIcon,
  AccountBalanceWallet as WalletIcon,
  Message as MessagesIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  AccountBalanceWallet
} from '@mui/icons-material';
import { useFinance } from '../context/FinanceContext';

export default function Sidebar() {
  const { toggleTheme } = useFinance();

  const menuItemsGeneral = [
    { text: 'Dashboard', icon: <DashboardIcon />, active: true },
    { text: 'Transfers', icon: <TransfersIcon /> },
    { text: 'Payments', icon: <PaymentsIcon /> },
    { text: 'Games', icon: <GamesIcon /> },
    { text: 'Tickets', icon: <TicketsIcon /> },
  ];

  const menuItemsPersonal = [
    { text: 'Wallet', icon: <WalletIcon /> },
    { text: 'Messages', icon: <MessagesIcon /> },
    { text: 'Notifications', icon: <NotificationsIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <Box
      sx={{
        width: 260,
        height: '100vh',
        bgcolor: '#0a0a0a',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        position: 'sticky',
        top: 0
      }}
    >
      {/* Brand */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 5, px: 2, cursor: 'pointer' }} onClick={toggleTheme}>
        <Box sx={{ bgcolor: 'white', borderRadius: 1, p: 0.5, display: 'flex', color: '#000' }}>
          <AccountBalanceWallet fontSize="small" />
        </Box>
        <Typography variant="h6" fontWeight="bold" letterSpacing={1} color="white">
          CASHMATE
        </Typography>
      </Box>

      {/* General Section */}
      <Typography variant="caption" color="text.secondary" fontWeight="bold" sx={{ px: 2, mb: 1, letterSpacing: 1 }}>
        GENERAL
      </Typography>
      <List sx={{ mb: 2 }}>
        {menuItemsGeneral.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 2,
                mb: 0.5,
                bgcolor: item.active ? 'rgba(45, 212, 191, 0.1)' : 'transparent',
                color: item.active ? '#2dd4bf' : 'text.secondary',
                borderLeft: item.active ? '3px solid #2dd4bf' : '3px solid transparent',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.05)',
                  color: 'white'
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: 14, fontWeight: item.active ? 600 : 500 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Personal Section */}
      <Typography variant="caption" color="text.secondary" fontWeight="bold" sx={{ px: 2, mb: 1, letterSpacing: 1 }}>
        PERSONAL
      </Typography>
      <List sx={{ flexGrow: 1 }}>
        {menuItemsPersonal.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 2,
                mb: 0.5,
                color: 'text.secondary',
                borderLeft: '3px solid transparent',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.05)',
                  color: 'white'
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Cashback Info & Logout */}
      <Box sx={{ mt: 'auto', px: 2, pb: 2 }}>
        <Box sx={{ bgcolor: 'rgba(255,255,255,0.03)', p: 2, borderRadius: 2, mb: 2 }}>
          <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
            MONTHLY CASHBACK
          </Typography>
          <Typography variant="h6" color="white" fontWeight="bold">
            $215.50
          </Typography>
        </Box>
        <ListItemButton sx={{ borderRadius: 2, color: 'text.secondary', '&:hover': { color: 'white', bgcolor: 'rgba(255,255,255,0.05)' }}}>
          <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Log out" primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />
        </ListItemButton>
      </Box>
    </Box>
  );
}
