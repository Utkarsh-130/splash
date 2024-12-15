import { Slot, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: false, // Hides header by default for all routes
        }}
      >
        {/* Slot renders the child route components here */}
        <Slot />
      </Stack>
    </GestureHandlerRootView>
  );
}
