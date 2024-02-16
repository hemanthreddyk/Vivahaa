import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import MyServices from './MyServices';
import { Tabs, Tab, Box, Grid } from '@mui/material';

const items = [
  {
    key: '1',
    label: 'My Services',
    children: <MyServices />,
  },
  {
    key: '2',
    label: 'Leads',
    children: 'Content of Tab Pane 2',
  },
];

const Dashboard = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={0} sx={{ height: '100%', width: '100%' }}>
      <Grid item xs={2}>
        <Tabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            height: '100%',
          }}
        >
          {items.map(item => (
            <Tab key={item.key} label={item.label} value={item.key} />
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={10}>
        <Box sx={{ flexGrow: 1, minHeight: 0 }}>
          {items.map(item => (
            <Box
              key={item.key}
              value={item.key}
              hidden={value !== item.key}
              sx={{ width: '100%', minHeight: 0, padding: 2 }}
            >
              {item.children}
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
