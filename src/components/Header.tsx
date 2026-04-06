import { useFinance } from '../context/FinanceContext';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box, 
  MenuItem, 
  Select, 
  FormControl, 
  useTheme 
} from '@mui/material';
import { 
  DarkMode, 
  LightMode, 
  AccountBalanceWallet, 
  Person, 
  AdminPanelSettings 
} from '@mui/icons-material';
import { Role } from '../types';

export default function Header() {
  const { role, setRole, theme, toggleTheme } = useFinance();
  const muiTheme = useTheme();

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        top: 16, 
        mb: 4, 
        borderRadius: 4, 
        backdropFilter: 'blur(16px)',
        bgcolor: muiTheme.palette.mode === 'dark' ? 'rgba(30, 41, 59, 0.75)' : 'rgba(255, 255, 255, 0.75)',
        border: muiTheme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: muiTheme.palette.mode === 'dark' ? '0 8px 32px 0 rgba(0, 0, 0, 0.3)' : '0 8px 32px 0 rgba(31, 38, 135, 0.07)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box 
            sx={{ 
              background: 'linear-gradient(135deg, #3b82f6, #818cf8)',
              borderRadius: 3,
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)'
            }}
          >
            <AccountBalanceWallet sx={{ color: 'white' }} />
          </Box>
          <Typography variant="h6" component="h1" fontWeight="bold" color="text.primary">
            FinDash
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <FormControl size="small" variant="outlined" sx={{ minWidth: 140 }}>
            <Select
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
              sx={{ 
                borderRadius: 5,
                bgcolor: 'background.paper',
                boxShadow: 1,
                '& .MuiSelect-select': { display: 'flex', alignItems: 'center', gap: 1 }
              }}
            >
              <MenuItem value="viewer">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Person fontSize="small" color="primary" /> Viewer
                </Box>
              </MenuItem>
              <MenuItem value="admin">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AdminPanelSettings fontSize="small" color="error" /> Admin
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
          
          <IconButton 
            onClick={toggleTheme} 
            sx={{ 
              bgcolor: 'background.paper',
              boxShadow: 1,
              '&:hover': { bgcolor: 'action.hover' }
            }}
          >
            {theme === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
