import { Pressable, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect } from 'react';

export default function TabTwoScreen() {
  useEffect(() => {
    console.warn('Attaching orientation change listener');
    const subscription = ScreenOrientation.addOrientationChangeListener((event) => {
      console.log(event);
    });

    return () => {
      console.warn('Removing orientation change listener');
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 16, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: '500' }}>This screen has orientation listener</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>The app will crash if you leave it while in Split-View mode</Text>

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#ddd' : '#fff', padding: 10, borderRadius: 5, marginTop: 20 },
          pressed && { transform: [{ scale: 0.95 }] },
        ]}
      >
        <Text style={{ fontSize: 16, color: '#007AFF' }}>Dummy UI Button</Text>
      </Pressable>
    </View>
  );
}
