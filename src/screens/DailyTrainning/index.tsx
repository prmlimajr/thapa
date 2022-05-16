import React, { useState, useEffect } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { Loader } from '../../components/Loader';
import { EmptyList } from '../../components/EmptyList';

import { useNavigation } from '@react-navigation/native';
import { 
  Button, 
  ButtonText, 
  Container, 
  HeaderText, 
  Line, 
  ListCell, 
  ListItem 
} from './styles';

interface Training {
  id: number;
  description: string;
  repetitions: number;
  interval: number;
  series: number;
  load: number;
  img: string;
}

export function DailyTrainning() {
  const [dailyTrainning, setDailyTrainning] = useState<Training[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    try {
      setLoading(true);
      
      function getDailyTrainning(userId) {
        setTimeout(() => {}, 2000);

        return [
          {
            id: 1,
            description: 'Supino reto c/ halteres',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: 2,
            img: 'src/assets/sport.png',
          },
          {
            id: 2,
            description: 'Supino incl. c/ barra',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: 3,
            img: 'src/assets/sport.png',
          },
          {
            id: 3,
            description: 'Puxada supinada',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: 2,
            img: 'src/assets/sport.png',
          },
          {
            id: 4,
            description: 'Remada c/ barra neutra',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: null,
            img: 'src/assets/sport.png',
          },
          {
            id: 5,
            description: 'Voador',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: null,
            img: 'src/assets/sport.png',
          },
          {
            id: 6,
            description: 'Tríceps na polia',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: null,
            img: 'src/assets/sport.png',
          },
          {
            id: 7,
            description: 'Tríceps c/ corda',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: null,
            img: 'src/assets/sport.png',
          },
        ];
      }

      setDailyTrainning(getDailyTrainning(1));
    } catch (err) {
      Alert.alert(
        'Falha na conexão',
        'Não foi possível carregar o seu treino.'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Loader loading={loading} />
      
      <Container>
        <View>
          <HeaderText>Seu treino hoje é:</HeaderText>
          <Line />
        </View>

        {dailyTrainning.length === 0 ? (
          <EmptyList />
        ) : (
          <FlatList
            data={dailyTrainning}
            keyExtractor={(trainning) => String(trainning.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: trainning }) => (
              <>
                <ListCell>
                  <ListItem>{trainning.description}</ListItem>
                  {!trainning.load ? (
                    <MaterialIcons
                      name='add'
                      size={26}
                      color='#3A362D'
                      onPress={() =>
                        navigation.navigate('Exercício', { trainning })
                      }
                    />
                  ) : (
                    <Feather
                      name='check'
                      size={30}
                      color='#0B4455'
                      onPress={() => {}}
                    />
                  )}
                </ListCell>

                <Line />
              </>
            )}
          />
        )}

        <Button>
          <ButtonText>CONCLUIR TREINO</ButtonText>
        </Button>
      </Container>
    </>
  );
}
