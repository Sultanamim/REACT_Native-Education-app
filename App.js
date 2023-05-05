import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Components/Home/Home';
import SubjectMenu from './src/Components/SubjectMenu/SubjectMenu';
import History from './src/Components/History/History';
import StudentProfile from './src/Components/StudentProfile/StudentProfile';
import ParentMenu from './src/Components/ParentMenu/ParentMenu';
import MainPage from './src/Components/MainPage/MainPage';
import StickerBook from './src/Components/StickerBook/StickerBook';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Parent-menu' component={ParentMenu} />
          <Stack.Screen name='Student-profile' component={StudentProfile} />
          <Stack.Screen name='Subject-menu' component={SubjectMenu} />
          <Stack.Screen name='Classroom' component={MainPage} />
          <Stack.Screen name='History' component={History} />
          <Stack.Screen name='Sticker-book' component={StickerBook} />
        </Stack.Navigator>

    </NavigationContainer>
  );
}
