import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DryCleanComponent from './ordertabs-components/DryClean';
import WashFoldComponent from './ordertabs-components/WashFold';
import WashIronComponent from './ordertabs-components/WashIron';
import IroningComponent from './ordertabs-components/Ironing';

export default function OrderTab({ setFormData }) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Wash-Dry-Fold" value="1" />
            <Tab label="Wash-Dry-Iron" value="2" />
            <Tab label="Dry Clean" value="3" />
            <Tab label="Ironing" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <WashFoldComponent setFormData={setFormData} />
        </TabPanel>
        <TabPanel value="2">
          <WashIronComponent setFormData={setFormData} />
        </TabPanel>
        <TabPanel value="3">
          <DryCleanComponent setFormData={setFormData} />
        </TabPanel>
        <TabPanel value="4">
          <IroningComponent setFormData={setFormData} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}