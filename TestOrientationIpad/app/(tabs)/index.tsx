import { useEffect } from 'react';
import { Text, View, AppState } from 'react-native';

export default function HomeScreen() {
  // AppState listener
  useEffect(() => {
    const listener = AppState.addEventListener('change', (nextAppState) => {
      console.log('AppState changed to: ' + nextAppState);
    });
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 16, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: '500' }}>This screen doesn't have orientation listener</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>The app doesn't crash when you leave it from this screen</Text>
    </View>
  );
}
