import React from 'react';

import QRCode from 'react-native-qrcode-svg';

import { Container, Code } from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode value="#" size={80} backgroundColor="#FFF" color="#8B10AE" />
      </Code>
    </Container>
  );
}
