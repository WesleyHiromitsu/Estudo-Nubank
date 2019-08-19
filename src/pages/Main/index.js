import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import { Container, Content, Card, CardHeader, CardFooter, CardContent, Title, Description, Annotation } from './styles';

export default function Main(){
  return(
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666"/>
            <Icon name="visibility-off" size={28} color="#666"/>
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 17.953,96</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 2,00 recebia de ninguem hoje as 05:00h.
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
