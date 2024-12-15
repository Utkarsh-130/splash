import { StyleSheet, Dimensions, Text, View, Image, SafeAreaView } from "react-native";
import { useState } from "react";
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

const TOPBAR_HEIGHT = 250;

export default function Explore() {
  const width = Dimensions.get('window').width;
  const [yOffset, setScrollY] = useState(0);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(yOffset, [-TOPBAR_HEIGHT, 0, TOPBAR_HEIGHT], [1.5, 1, 1]),
        },
      ],
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(yOffset, [-TOPBAR_HEIGHT, TOPBAR_HEIGHT / 2, TOPBAR_HEIGHT], [1, 1, 0]),
    };
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View style={[{ height: Math.max(0, TOPBAR_HEIGHT - yOffset) }, headerAnimatedStyle]}>
        <View style={{ flex: 1, borderWidth: 1, justifyContent: 'center' }}>
          {/* Static image to replace the carousel */}
          <Image 
            source={{ uri: 'https://via.placeholder.com/500x250' }} 
            style={{ height: TOPBAR_HEIGHT, width: width }} 
          />
        </View>

        <Animated.View style={[textAnimatedStyle]}>
          <Text style={{ color: "white", paddingTop: TOPBAR_HEIGHT / 3, textAlign: "center", fontSize: 30, fontWeight: "600" }}>
            Static Image Title
          </Text>
        </Animated.View>
      </Animated.View>

      <View style={{ borderRadius: 20, padding: 10 }}>
        {/* Static content area */}
        <Text style={{ textAlign: 'center' }}>Content goes here</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1
  },
  innerContainer: {
    flex: 1,
    padding: 10
  },
  imageContainer: {
    paddingVertical: 10
  }
});
