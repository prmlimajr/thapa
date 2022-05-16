import { MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '../components/Header';
// import Profile from '../pages/Profile';
// import WeightControl from '../pages/Profile/WeightControl';

import { Dashboard } from '../screens/Dashboard';
import { DailyTrainning } from '../screens/DailyTrainning';
import { TrainningDetail } from '../screens/DailyTrainning/TrainningDetail';
import { Historic } from '../screens/Historic';
import { HistoricDetail } from '../screens/Historic/HistoricDetail';

import { Platform } from 'react-native';

const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function AppRoutes() {
  function ProfileRoute() {
    return (
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {/* <AppStack.Screen name='Seu Perfil' component={Profile} />
        <AppStack.Screen name='Controle de peso' component={WeightControl} /> */}
      </AppStack.Navigator>
    );
  }

  function TrainningStack() {
    return (
      <>
        <Header />
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name='Dashboard' component={Dashboard} />
          <AppStack.Screen name='Treino do dia' component={DailyTrainning} />
          <AppStack.Screen name='Exercício' component={TrainningDetail} />
        </AppStack.Navigator>
      </>
    );
  }

  function HistoricRoute() {
    return (
      <>
        <Header />
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name='Historic' component={Historic} />
          <AppStack.Screen name='HistoricDetail' component={HistoricDetail} />
        </AppStack.Navigator>
      </>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;

          switch (route.name) {
            case 'Seu Perfil':
              iconName = 'account-box';
              break;

            case 'Treino do dia':
              iconName = 'fitness-center';
              break;

            case 'Histórico':
              iconName = 'calendar-today';
              break;

            default:
              iconName = null;
          }

          return <MaterialIcons name={iconName} size={22} color='#0B4455' />;
        },
        headerShown: false,
        activeTintColor: '#0B4455',
        labelStyle: {
          fontSize: 16,
        },
        style: {
          backgroundColor: '#f0f0f0',
          height: Platform.OS === 'ios' ? 110 : 90,
        },
      })}
      initialRouteName='Treino do dia'
    >
      <Tab.Screen name='Seu Perfil' component={ProfileRoute} />
      <Tab.Screen name='Treino do dia' component={TrainningStack} />
      <Tab.Screen name='Histórico' component={HistoricRoute} />
    </Tab.Navigator>
  );
}
