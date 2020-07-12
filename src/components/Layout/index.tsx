import React from 'react';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';

import { Grid } from './styles';
import ChannelList from '../ChannelList';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />

      <ServerName />

      <ChannelInfo />

      <ChannelList />
    </Grid>
  );
};

export default Layout;
