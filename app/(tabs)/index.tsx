import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, Image, Modal, TouchableOpacity } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { ImageCard } from "@/components/ImageCard";
import { ThemedView } from "@/components/ThemedView";
import { FlatList } from "react-native-gesture-handler";
import DownloadSheet from '@/components/bottomsheet'; // Correct import statement

const TOPBAR_HEIGHT = 250;

export default function Explore() {
  const wallpapers = useWallpapers();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);

  // Check if wallpapers is not empty
  if (!wallpapers || wallpapers.length === 0) {
    return <Text>No wallpapers available.</Text>;
  }

  const handleLongPress = (url: string) => {
    setSelectedImage(url);
    setModalVisible(true);
  };

  const handlePress = (wallpaper: Wallpaper) => {
    console.log("handlePress called", wallpaper);
    setSelectedWallpaper(wallpaper);
  };

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
              renderItem={({ item }) => (
                <TouchableOpacity onLongPress={() => handleLongPress(item.url)}>
                  <ImageCard wallpaper={item} onPress={() => handlePress(item)} />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.name as string}
              contentContainerStyle={{ padding: 16 }}
            />
          </ThemedView>
          <ThemedView style={styles.incontainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 !== 0)}
              renderItem={({ item }) => (
                <TouchableOpacity onLongPress={() => handleLongPress(item.url)}>
                  <ImageCard wallpaper={item} onPress={() => handlePress(item)} />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.name as string}
              contentContainerStyle={{ padding: 16 }}
            />
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalBackground} onPress={() => setModalVisible(false)}>
            {selectedImage && <Image source={{ uri: selectedImage }} style={styles.modalImage} />}
          </TouchableOpacity>
        </View>
      </Modal>
      {selectedWallpaper && (
        <DownloadSheet
          wallpaper={selectedWallpaper}
          onClose={() => {
            console.log("DownloadSheet closed");
            setSelectedWallpaper(null);
          }}
        />
      )}
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
});