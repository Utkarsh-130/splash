import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Import screens
import HomeScreen from '../upbar/HomeScreen';
import SettingsScreen from '../upbar/SettingsScreen';
import SuggestedScreen from '../upbar/SuggestedScreen';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        style={{ flex: 1 }}
        screenOptions={{
          tabBarActiveTintColor: 'blue', // Active tab color
          tabBarStyle: {
            backgroundColor: 'white', // Tab bar background color
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'blue', // Tab indicator color
            height: 5,
          },
        }}
      >
        <Tab.Screen name="Library" component={HomeScreen} />
        <Tab.Screen name="Liked" component={SettingsScreen} />
        <Tab.Screen name="Suggested" component={SuggestedScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

// Example of a simple screen (for testing purposes)
function LibraryScreen() {
  return (
    <View style={styles.container}>
      <Text>Library Screen</Text>
    </View>
  );
}

function LikedScreen() {
  return (
    <View style={styles.container}>
      <Text>Liked Screen</Text>
    </View>
  );
}

function Suggested() {
  return (
    <View style={styles.container}>
      <Text>Suggested Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
