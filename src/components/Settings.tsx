import { Box, Typography, Card, Grid, Avatar, TextField, Button, Switch, List, ListItem, ListItemText, ListItemSecondaryAction, Divider, ListItemButton } from '@mui/material';
import {} from '@mui/icons-material';

export default function Settings() {
  return (
    <Box sx={{ width: '100%', maxWidth: 1000, mx: 'auto' }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>Settings</Typography>

      <Grid container spacing={4}>
        {/* Profile Card */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ p: 4, textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
            <Avatar 
                sx={{ width: 100, height: 100, mx: 'auto', mb: 2, border: '4px solid #2dd4bf' }} 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kshitij"
            />
            <Typography variant="h6" fontWeight="bold">Kshitij Chavan</Typography>
            <Typography variant="caption" color="text.secondary">Professional Plan</Typography>
            <Button fullWidth variant="outlined" sx={{ mt: 3, borderColor: 'rgba(255,255,255,0.1)', color: 'white', '&:hover': { borderColor: '#2dd4bf', color: '#2dd4bf' } }}>
              Edit Profile
            </Button>
          </Card>

          <Card sx={{ p: 0, mt: 3, border: '1px solid rgba(255,255,255,0.05)' }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton selected sx={{ borderLeft: '4px solid #2dd4bf', bgcolor: 'rgba(45, 212, 191, 0.05)' }}>
                  <ListItemText primary="General" secondary="Account settings" />
                </ListItemButton>
              </ListItem>
              <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)' }} />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Security" secondary="Passcodes & 2FA" />
                </ListItemButton>
              </ListItem>
              <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)' }} />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Notifications" secondary="Push & Email" />
                </ListItemButton>
              </ListItem>
            </List>
          </Card>
        </Grid>

        {/* General Settings */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card sx={{ p: 4, border: '1px solid rgba(255,255,255,0.05)' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 4 }}>Account Details</Typography>
            
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="caption" color="text.secondary" gutterBottom>FULL NAME</Typography>
                <TextField fullWidth size="small" defaultValue="Kshitij Chavan" disabled variant="outlined" sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'rgba(255,255,255,0.02)' } }} />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="caption" color="text.secondary" gutterBottom>EMAIL ADDRESS</Typography>
                <TextField fullWidth size="small" defaultValue="kshitij@example.com" disabled variant="outlined" sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'rgba(255,255,255,0.02)' } }} />
              </Grid>
            </Grid>

            <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.05)' }} />

            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Security & Privacy</Typography>
            <List disablePadding>
              <ListItem disableGutters>
                <ListItemText primary="Two-Factor Authentication" secondary="Add an extra layer of security to your account" />
                <ListItemSecondaryAction>
                  <Switch checked color="primary" />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Biometric Login" secondary="Access Fin Dashboard via Fingerprint or Face ID" />
                <ListItemSecondaryAction>
                  <Switch checked color="primary" />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Share Analytics Data" secondary="Help us improve by sharing usage data anonymously" />
                <ListItemSecondaryAction>
                  <Switch color="primary" />
                </ListItemSecondaryAction>
              </ListItem>
            </List>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" sx={{ bgcolor: '#2dd4bf', color: '#000', px: 4, '&:hover': { bgcolor: '#23b3a0' } }}>
                Save Changes
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
