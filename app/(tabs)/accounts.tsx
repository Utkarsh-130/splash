import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { DownloadSheet } from '@/components/bottomsheet';
import { useWallpapers, Wallpaper } from '@/hooks/useWallpapers';

export default function Accounts() {
  const [pictureOpen, setPictureOpen] = useState(false);
  const wallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);

  const handleOpenPicture = () => {
    if (wallpapers.length > 0) {
      setSelectedWallpaper(wallpapers[0]); // Select the first wallpaper for demonstration
      setPictureOpen(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.vw}>
        <Text>Accounts page is needed</Text>
        <Button title="Open Picture" onPress={handleOpenPicture} />
        {pictureOpen && selectedWallpaper && (
          <DownloadSheet
            onClose={() => setPictureOpen(false)}
            wallpaper={selectedWallpaper}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  vw: {
    flex: 1,
    backgroundColor: 'black',
  },
});