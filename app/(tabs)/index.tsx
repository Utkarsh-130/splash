import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { ImageCard } from "@/components/ImageCard";
import { ThemedView } from "@/components/ThemedView";
import { FlatList } from "react-native-gesture-handler";

const TOPBAR_HEIGHT = 250;

export default function Explore() {
  const wallpapers = useWallpapers();

  // Check if wallpapers is not empty
  if (!wallpapers || wallpapers.length === 0) {
    return <Text>No wallpapers available.</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={<Image style={{ flex: 1 }} source={{ uri: String(wallpapers[0]?.url ?? "") }} />}
      >

        <ThemedView style={styles.container}>
          <ThemedView style={styles.incontainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 0)}
              renderItem={({ item }) => <ImageCard wallpaper={item} />}
              keyExtractor={(item) => item.name as string}
              contentContainerStyle={{ padding: 16 }}
            />
            
          </ThemedView>
        
        </ThemedView>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  incontainer: {
    display: "flex",
    padding: 1,
    flex: 0.5,
  },
});