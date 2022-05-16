import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Sports from '../../../assets/sport.png';
import { 
  Background, 
  Bottom, 
  Button, 
  ButtonText, 
  Container, 
  DataContainer, 
  DataText, 
  Input, 
  Line, 
  Row, 
  Title, 
  TitleContainer, 
  Top 
} from './styles';

export function TrainningDetail() {
  const [load, setLoad] = useState(null);

  const navigation = useNavigation();
  const route = useRoute();

  const trainning = route.params.trainning;

  console.log({ trainning });
  return (
    <Container>
      <Top>
        <View>
          <Line />
        </View>

        <TitleContainer>
          <Feather
            name='chevron-left'
            size={30}
            color='#3A362D'
            onPress={() => navigation.goBack()}
          />
          <Title>{trainning.description}</Title>
          <View style={{ width: 20 }}></View>
        </TitleContainer>
      </Top>

      <Background source={Sports} />

      <Bottom>
        <DataContainer>
          <DataText>Séries: {trainning.series}</DataText>
          <DataText>
            Repetições: {trainning.repetitions}
          </DataText>
          <DataText>
            Intervalo: {trainning.interval} segundos
          </DataText>
          <Row>
            <DataText>Carga executada:</DataText>
            <Input
              keyboardType='numeric'
              onChangeText={(e) => setLoad(e)}
              value={load}
            />
          </Row>
        </DataContainer>

        <Button>
          <ButtonText>ENVIAR</ButtonText>
        </Button>
      </Bottom>
    </Container>
  );
}
