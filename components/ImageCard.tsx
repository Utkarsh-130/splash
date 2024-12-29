import React, { useState } from "react";
import { TouchableOpacity, Image, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ImageCardProps {
  wallpaper: {
    url: string;
    name: string;
  };
  onPress: () => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({ wallpaper, onPress }) => {
  const [showHeart, setShowHeart] = useState(false);
  let lastTap: number | null = null;

  const handleDoubleTap = () => {
    const now = Date.now();
    if (lastTap && (now - lastTap) < 300) {
      setShowHeart(true);
      setTimeout(() => {
        setShowHeart(false);
      }, 450); // 0.45 seconds delay
    } else {
      lastTap = now;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handleDoubleTap();
        onPress();
      }}
      style={styles.card}
    >
      <Image source={{ uri: wallpaper.url }} style={styles.image} />
      {showHeart && (
        <Ionicons
          name="heart"
          size={48}
          color="red"
          style={styles.heartIcon}
        />
      )}
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
  heartIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -24 }, { translateY: -24 }],
  },
});