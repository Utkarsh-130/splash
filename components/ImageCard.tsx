import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useColorScheme, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

interface ImageCardProps {
  wallpaper: {
    url: string;
    name: string;
  };
}

export const ImageCard: React.FC<ImageCardProps> = ({ wallpaper }) => {
  const theme = useColorScheme();
  const [liked, setLiked] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  let lastTap: number | null = null;

  const handleDoubleTap = () => {
    const now = Date.now();
    if (lastTap && (now - lastTap) < 300) {
      setLiked(!liked);
      setShowHeart(true);
      setTimeout(() => {
        setShowHeart(false);
      }, 450); // 0.4 seconds delay
    } else {
      lastTap = now;
    }
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity activeOpacity={1} onPress={handleDoubleTap}>
        <Image source={{ uri: wallpaper.url }} style={styles.image} />
        {showHeart && (
          <Ionicons
            name="heart"
            size={48}
            color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
            style={styles.heartIcon}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.title}>{wallpaper.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    padding: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  heartIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -24 }, { translateY: -24 }],
  },
});