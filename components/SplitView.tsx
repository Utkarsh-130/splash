import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, Image, Modal, TouchableOpacity } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { ImageCard } from "@/components/ImageCard";
import { ThemedView } from "@/components/ThemedView";
import { FlatList } from "react-native-gesture-handler";
import { DownloadSheet } from '@/components/bottomsheet'; // Correct import statement


export function SplitView({ wallpapers }: { wallpapers: Wallpaper[] }): JSX.Element {  
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);


    function handlePress(item: Wallpaper): void {
        setSelectedWallpaper(item);
        setSelectedImage(item.url);
        setModalVisible(true);
    }

    return<>
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
                     {selectedImage && <Image source={{ uri: selectedImage }} style={styles.modalImage} />}
         </>
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



function handleLongPress(url: any): void {
        throw new Error("Function not implemented.");
    }
