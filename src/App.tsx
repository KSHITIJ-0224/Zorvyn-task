import { useMemo } from 'react';
import Sidebar from './components/Sidebar';
import DashboardOverview from './components/DashboardOverview';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { useFinance } from './context/FinanceContext';

function App() {
  const { theme } = useFinance();

  const muiTheme = useMemo(() => createTheme({
    typography: {
      fontFamily: "'Inter', sans-serif",
    },
    palette: {
      mode: 'dark', // Forced dark mode for this aesthetic
      primary: {
        main: '#2dd4bf', // Neon teal from image
      },
      secondary: {
        main: '#f43f5e', // Pinkish red
      },
      warning: {
        main: '#eab308' // yellowish
      },
      info: {
        main: '#818cf8' // purple
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
      borderRadius: 16,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease',
            boxShadow: 'none',
            border: '1px solid rgba(255, 255, 255, 0.03)',
            borderRadius: 12,
            backgroundColor: '#121212',
            '&:hover': {} // removed hover movement for this specific strict dashboard layout or optional
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 8,
            transition: 'all 0.2s ease-in-out',
          },
          contained: {
            boxShadow: theme === 'dark'
               ? '0 4px 14px rgba(96, 165, 250, 0.3)'
               : '0 4px 14px rgba(59, 130, 246, 0.3)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: theme === 'dark'
                 ? '0 6px 20px rgba(96, 165, 250, 0.5)'
                 : '0 6px 20px rgba(59, 130, 246, 0.5)',
            }
          }
        }
      }
    }
  }), [theme]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#070707' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 4, display: 'flex', flexDirection: 'column', gap: 3, overflowY: 'auto', height: '100vh' }}>
          <DashboardOverview />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
