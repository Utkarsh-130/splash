import React from "react";
import { TouchableOpacity, Image, StyleSheet, View, Text } from "react-native";

interface ImageCardProps {
  wallpaper: {
    url: string;
    name: string;
  };
  onPress: () => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({ wallpaper, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: wallpaper.url }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{wallpaper.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});