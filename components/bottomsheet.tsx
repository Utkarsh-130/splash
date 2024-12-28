import React, { useCallback, useMemo, useRef } from 'react';
import { View, Image, StyleSheet, useColorScheme, Button, Pressable } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { ThemedView } from './ThemedView';
import { Text } from 'react-native';
interface DownloadSheetProps {
  onClose: () => void;
  wallpaper: Wallpaper;
}

export const DownloadSheet: React.FC<DownloadSheetProps> = ({ onClose, wallpaper }) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? 'light';

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={["95%"]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <ThemedView style={{flex: 1}}>
          <Image style={styles.image} source={{ uri: wallpaper.url }} />
          <View style={styles.topbar}>
            <Ionicons
                onPress={onClose}
                name={'close'}
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
            />
            <View style={styles.topbarInner}>
              <Ionicons
                  name={'heart'}
                  size={24}
                  color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
              />
              <Ionicons
                  name={'share'}
                  size={24}
                  color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
              />
            </View>
          </View>
          <DownloadButton/>
        </ThemedView>
      </BottomSheetView>
    </BottomSheet>
  );
};


function DownloadButton() {
  return (
    <Pressable
      style={{
        
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        margin: 16,
        padding:12,
        flexDirection: 'row',
        shadowColor: "#995ff1",
        backgroundColor: "#a690fe",
      }}
    >
      <Ionicons
        name={'download'}
        size={24}
        color="white"
        fontweight="bold"
      />
      <Text
        style={{
          fontSize: 28,
          color: "white",
        }}
      >
        Download
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  topbarInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
