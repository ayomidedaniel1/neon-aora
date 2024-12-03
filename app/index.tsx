import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 bg-white items-center justify-center'>
      <Text>Aora!</Text>
      <StatusBar style='auto' />
      <Link href={'/profile'} style={{ color: 'blue' }}>Go to profile</Link>
    </View>
  );
}
