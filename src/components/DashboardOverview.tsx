import { useFinance } from '../context/FinanceContext';
import { Box, Card, Typography, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  AreaChart, Area, CartesianGrid, Cell
} from 'recharts';

const smallChartData = [
  { name: 'JAN', val: 400 },
  { name: 'FEB', val: 300 },
  { name: 'MAR', val: 550 },
  { name: 'APR', val: 400 },
  { name: 'MAY', val: 700 },
  { name: 'JUN', val: 600 },
  { name: 'JUL', val: 800 },
];

const spentData = [
  { name: 'JAN', expenses: 300, transfers: 150, subscriptions: 80, grocery: 200, shopping: 100 },
  { name: 'FEB', expenses: 400, transfers: 200, subscriptions: 80, grocery: 150, shopping: 120 },
  { name: 'MAR', expenses: 350, transfers: 120, subscriptions: 80, grocery: 250, shopping: 90 },
  { name: 'APR', expenses: 500, transfers: 250, subscriptions: 80, grocery: 300, shopping: 200 },
  { name: 'MAY', expenses: 600, transfers: 300, subscriptions: 90, grocery: 200, shopping: 300 },
  { name: 'JUN', expenses: 450, transfers: 180, subscriptions: 90, grocery: 350, shopping: 150 },
  { name: 'JUL', expenses: 800, transfers: 400, subscriptions: 90, grocery: 400, shopping: 500 },
];

export default function DashboardOverview() {
  const { transactions } = useFinance();

  return (
    <Box sx={{ width: '100%', maxWidth: 1400, mx: 'auto' }}>
      {/* TOP ROW: 3 Mini Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        
        {/* TOTAL SPENDINGS */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ p: 2, height: 160, display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="caption" color="text.secondary" fontWeight="bold">TOTAL SPENDINGS</Typography>
              <Typography variant="caption" color="text.secondary">THIS WEEK ▽</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
              <Typography variant="h5" fontWeight="bold" fontFamily="monospace">$832.80</Typography>
              <Typography variant="caption" sx={{ bgcolor: 'rgba(255,255,255,0.1)', px: 0.5, borderRadius: 1, color: '#a3a3a3' }}>-12%</Typography>
            </Box>
            <Box sx={{ flexGrow: 1, mt: 2 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={smallChartData.slice(0, 5)}>
                  <Bar dataKey="val" radius={[2, 2, 0, 0]}>
                    {smallChartData.slice(0, 5).map((_, index) => (
                      <Cell key={`cell-${index}`} fill={['#818cf8', '#2dd4bf', '#eab308', '#0ea5e9', '#f43f5e'][index % 5]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>

        {/* SAVINGS */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ p: 2, height: 160, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="caption" color="text.secondary" fontWeight="bold">SAVINGS</Typography>
              <Typography variant="caption" color="text.secondary">THIS YEAR ▽</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
              <Typography variant="h5" fontWeight="bold" fontFamily="monospace">$2,512.40</Typography>
              <Typography variant="caption" sx={{ bgcolor: 'rgba(255,255,255,0.1)', px: 0.5, borderRadius: 1, color: '#a3a3a3' }}>-2%</Typography>
            </Box>
            <Box sx={{ flexGrow: 1, mt: 1, ml: -3 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={smallChartData}>
                  <defs>
                    <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <YAxis hide domain={['dataMin - 100', 'dataMax + 100']} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#737373' }} dy={10} />
                  <Area type="monotone" dataKey="val" stroke="#f43f5e" fillOpacity={1} fill="url(#colorSavings)" />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>

        {/* INVESTMENTS */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ p: 2, height: 160, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="caption" color="text.secondary" fontWeight="bold">INVESTMENTS</Typography>
              <Typography variant="caption" color="text.secondary">THIS YEAR ▽</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
              <Typography variant="h5" fontWeight="bold" fontFamily="monospace">$1,215.25</Typography>
              <Typography variant="caption" sx={{ bgcolor: 'rgba(45, 212, 191, 0.2)', px: 0.5, borderRadius: 1, color: '#2dd4bf' }}>+4%</Typography>
            </Box>
            <Box sx={{ flexGrow: 1, mt: 1, ml: -3 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={smallChartData.map(d => ({...d, val: d.val * 1.5}))}>
                  <defs>
                    <linearGradient id="colorInv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <YAxis hide domain={['dataMin - 100', 'dataMax + 100']} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#737373' }} dy={10} />
                  <Area type="monotone" dataKey="val" stroke="#2dd4bf" fillOpacity={1} fill="url(#colorInv)" />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>
      </Grid>


      {/* BOTTOM ROW: Transactions & Main Chart */}
      <Grid container spacing={3}>
        {/* Left Col: Transactions */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Transactions</Typography>
            
            <Typography variant="caption" color="text.secondary" fontWeight="bold" sx={{ mb: 1, display: 'block' }}>TODAY</Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
              {/* Mock TxItem */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2 }} variant="rounded">S</Avatar>
                  <Box>
                    <Typography variant="body2" fontWeight="bold">Simon Pegg</Typography>
                    <Typography variant="caption" color="text.secondary">Jul 20, 6:22 PM</Typography>
                  </Box>
                </Box>
                <Box textAlign="right">
                  <Typography variant="body2" fontWeight="bold" color="#2dd4bf">+$44.00</Typography>
                  <Typography variant="caption" color="text.secondary">Transfer</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2 }} variant="rounded">A</Avatar>
                  <Box>
                    <Typography variant="body2" fontWeight="bold">Apple Music</Typography>
                    <Typography variant="caption" color="text.secondary">Jul 20, 12:30 PM</Typography>
                  </Box>
                </Box>
                <Box textAlign="right">
                  <Typography variant="body2" fontWeight="bold" color="white">-$9.99</Typography>
                  <Typography variant="caption" color="text.secondary">Subscription</Typography>
                </Box>
              </Box>
            </Box>

            <Typography variant="caption" color="text.secondary" fontWeight="bold" sx={{ mb: 1, display: 'block' }}>YESTERDAY</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2 }} variant="rounded">7</Avatar>
                  <Box>
                    <Typography variant="body2" fontWeight="bold">7-Eleven</Typography>
                    <Typography variant="caption" color="text.secondary">Jul 19, 2:56 PM</Typography>
                  </Box>
                </Box>
                <Box textAlign="right">
                  <Typography variant="body2" fontWeight="bold" color="white">-$5.18</Typography>
                  <Typography variant="caption" color="text.secondary">Grocery store</Typography>
                </Box>
              </Box>
              
              {/* Mapping actual data */}
              {transactions.slice(0, 3).map((t: any) => (
                <Box key={t.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2 }} variant="rounded">{t.description.charAt(0)}</Avatar>
                    <Box>
                      <Typography variant="body2" fontWeight="bold">{t.description}</Typography>
                      <Typography variant="caption" color="text.secondary">{t.date}</Typography>
                    </Box>
                  </Box>
                  <Box textAlign="right">
                    <Typography variant="body2" fontWeight="bold" color={t.type === 'income' ? '#2dd4bf' : 'white'}>
                      {t.type === 'income' ? '+' : '-'}${Number(t.amount).toFixed(2)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">{t.category}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Right Col: Main Stacked Chart */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mb: 2 }}>
             <Typography variant="caption" color="text.secondary" sx={{ cursor: 'pointer' }}>Day</Typography>
             <Typography variant="caption" color="text.secondary" sx={{ cursor: 'pointer' }}>Week</Typography>
             <Typography variant="caption" color="text.secondary" sx={{ cursor: 'pointer' }}>Month</Typography>
             <Typography variant="caption" sx={{ borderBottom: '2px solid #2dd4bf', pb: 0.5, cursor: 'pointer', fontWeight: 'bold' }}>Year</Typography>
          </Box>
          
          <Card sx={{ p: 3, pt: 4, height: 500 }}>
            <Typography variant="h5" fontWeight="bold" fontFamily="monospace" sx={{ mb: 4 }}>
              $9,340.80 <Typography component="span" variant="body1" color="text.secondary">Spent</Typography>
            </Typography>

            <Box sx={{ height: 350, width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={spentData} barSize={12}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#737373', fontSize: 12}} dy={15} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#737373', fontSize: 12}} dx={-10} tickFormatter={(val) => `$${val}`} />
                  <Tooltip cursor={{fill: 'rgba(255,255,255,0.02)'}} contentStyle={{ backgroundColor: '#121212', border: '1px solid #333' }} />
                  
                  <Bar dataKey="expenses" stackId="a" fill="#0ea5e9" />
                  <Bar dataKey="transfers" stackId="a" fill="#34d399" />
                  <Bar dataKey="subscriptions" stackId="a" fill="#facc15" />
                  <Bar dataKey="grocery" stackId="a" fill="#f43f5e" />
                  <Bar dataKey="shopping" stackId="a" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}>
              {['EXPENSES', 'TRANSFERS', 'SUBSCRIPTIONS', 'GROCERY STORE', 'SHOPPING'].map((label, idx) => (
                <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ['#0ea5e9', '#34d399', '#facc15', '#f43f5e', '#8b5cf6'][idx] }} />
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: 10, letterSpacing: 0.5 }}>{label}</Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
