import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
// Import screens
import HomeScreen from '../upbar/HomeScreen';
import SettingsScreen from '../upbar/SettingsScreen';
import SuggestedScreen from '../upbar/SuggestedScreen';
import { SplitView } from '@/components/SplitView';

import { ImageCard } from "@/components/ImageCard";
import { ThemedView } from "@/components/ThemedView";
import { FlatList } from "react-native-gesture-handler";
import { DownloadSheet } from '@/components/bottomsheet'; // Correct import statement

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
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Liked" component={LikedScreen} />
        <Tab.Screen name="Suggested" component={Suggested} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

// Example of a simple screen (for testing purposes)
function LibraryScreen() {
  const  wallpapersn  = useWallpapers();
  return (
    <View style={styles.container}>
      <SplitView wallpapers={wallpapersn} />
    </View>
  );
}

function LikedScreen() {
  const  wallpapersn  = useWallpapers();
  return (
    <View style={styles.container}>
      <SplitView wallpapers={wallpapersn} />
    </View>
  );
}

function Suggested() {
  const  wallpapersn  = useWallpapers();
  return (
    <View style={styles.container}>
      <SplitView wallpapers={wallpapersn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
