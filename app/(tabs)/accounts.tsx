import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
// Ensure this is a valid import//-
import DownloadSheet from '@/components/bottomsheet'; // Correct import statement//+

export default function Accounts() {
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.vw}>
      <Text>Accounts page is needed</Text>
      <Button title="Open Picture" onPress={() => setPictureOpen(true)} />
          
            {pictureOpen && <DownloadSheet onClose={() => setPictureOpen(false)} />}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'transparent',
  
  },
  vw:{
    flex: 1,
    backgroundColor: 'black',
 
    // Placeholder for bottom sheet height adjustment. Adjust as needed.
  }
});
