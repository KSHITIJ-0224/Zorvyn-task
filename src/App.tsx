import { useMemo, useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardOverview from './components/DashboardOverview';
import Transfers from './components/Transfers';
import Payments from './components/Payments';
import Wallet from './components/Wallet';
import Settings from './components/Settings';
import { ThemeProvider, createTheme, CssBaseline, Box, TextField, InputAdornment, IconButton, Badge, Avatar, Typography } from '@mui/material';
import { Search, Notifications, HelpOutline } from '@mui/icons-material';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const muiTheme = useMemo(() => createTheme({
    typography: {
      fontFamily: "'Inter', sans-serif",
    },
    palette: {
      mode: 'dark',
      primary: {
        main: '#2dd4bf',
      },
      secondary: {
        main: '#f43f5e',
      },
      background: {
        default: '#070707',
        paper: '#0f0f0f',
      },
      text: {
        primary: '#ffffff',
        secondary: '#a3a3a3'
      }
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            boxShadow: 'none',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backgroundColor: '#0f0f0f',
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
          }
        }
      }
    }
  }), []);

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard': return <DashboardOverview />;
      case 'transfers': return <Transfers />;
      case 'payments': return <Payments />;
      case 'wallet': return <Wallet />;
      case 'settings': return <Settings />;
      default: return <DashboardOverview />;
    }
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#070707' }}>
        <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
        
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Professional Top Bar */}
          <Box sx={{ 
            p: 2, 
            px: 4, 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            bgcolor: 'rgba(7,7,7,0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 10,
            position: 'sticky',
            top: 0
          }}>
            <TextField 
              placeholder="Search anything..." 
              size="small"
              sx={{ 
                width: 300,
                '& .MuiOutlinedInput-root': {
                   bgcolor: 'rgba(255,255,255,0.03)',
                   '& fieldset': { border: 'none' }
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search fontSize="small" sx={{ color: 'text.secondary' }} />
                  </InputAdornment>
                )
              }}
            />
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton size="small" sx={{ color: 'text.secondary' }}>
                <HelpOutline fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'text.secondary' }}>
                <Badge variant="dot" color="primary">
                  <Notifications fontSize="small" />
                </Badge>
              </IconButton>
              <Box sx={{ width: '1px', height: 20, bgcolor: 'rgba(255,255,255,0.1)', mx: 1 }} />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer' }} onClick={() => setCurrentPage('settings')}>
                <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
                  <Typography variant="body2" fontWeight="bold">Kshitij Chavan</Typography>
                  <Typography variant="caption" color="text.secondary">Free Plan</Typography>
                </Box>
                <Avatar 
                  sx={{ width: 32, height: 32, border: '1px solid rgba(255,255,255,0.1)' }} 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kshitij"
                />
              </Box>
            </Box>
          </Box>

          {/* Main Content Area */}
          <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
            {renderContent()}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
