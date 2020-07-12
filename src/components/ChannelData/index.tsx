import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Marcos Corsi"
          date="12/07/2020"
          content="Isso é um teste"
        />

        <ChannelMessage
          author="Diego Fernandes"
          date="12/07/2020"
          content={
            <>
              <Mention>@Marcos Corsi</Mention>, isso aqui é um bot
            </>
          }
          isBot
          hasMention
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
