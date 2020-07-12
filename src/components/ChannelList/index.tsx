import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>
      {/* 
      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="dota2" /> */}
    </Container>
  );
};

export default ChannelList;
