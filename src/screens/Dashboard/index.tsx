import { useNavigation } from '@react-navigation/native';

import Dumbbell from '../../assets/dumbbell.png';

import { 
  Background, 
  Body, 
  Button, 
  ButtonText, 
  Container 
} from './styles';

export function Dashboard() {
  const navigation = useNavigation();

  function handleStart() {
    console.log(
      'Aqui vai a lógica de iniciar o treino do dia, enviando o horário para o banco de dados. Após iniciar o treino o usuário não pode voltar para esta tela.'
    );
    navigation.navigate('Treino do dia');
  }

  return (
    <Container>
      <Background source={Dumbbell}>
        <Body>
          <Button onPress={() => handleStart()}>
            <ButtonText>INICIAR TREINO</ButtonText>
          </Button>
        </Body>
      </Background>
    </Container>
  );
}
