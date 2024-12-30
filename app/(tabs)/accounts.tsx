import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Pressable, StatusBar } from 'react-native';
import { DownloadSheet } from '@/components/bottomsheet';
import { useWallpapers, Wallpaper } from '@/hooks/useWallpapers';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';

export default function Accounts() {
  const [pictureOpen, setPictureOpen] = useState(false);
  const theme = 'light'; // or 'dark', depending on your theme logic
  const wallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);



 return (

    <SafeAreaView style={styles.container}>
       
      <View style={styles.header}>
        <ThemedText style={{paddingTop:20,paddingLeft:20, fontSize: 32, fontWeight: 'bold' }}>Splash</ThemedText>
        <ThemedText style={{paddingLeft:20, fontSize: 18, fontWeight: 'light' }}>Sign in to save data </ThemedText>
      </View>
         
      

      <View style={styles.vw}>
        {/* Google Sign-In Button */}
        <AuthButton
          label="Sign in"
icon={<Ionicons name="logo-google" size={24} color={theme==="light"? Colors.light.icon:Colors.dark.icon} />}
        />

        {/* Apple Sign-In Button */}
        <AuthButton
          label="Sign in "
          icon={<Ionicons name="logo-apple" size={24} color={theme==="light"? Colors.light.icon:Colors.dark.icon} />}
        />
      </View>
    </SafeAreaView>
  );
}
interface AuthButtonProps {
  label: string;
  icon: any;
}

function AuthButton({ label, icon }: AuthButtonProps) {
  return (
    <Pressable
      style={{
        
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        margin: 16,
        padding:12,
        flexDirection: 'row',
 
        backgroundColor: "#a690fe",
      }}
    >
    {icon}
    <Text style={{
      fontSize: 28,
      color: "white",
      fontWeight: "bold"
    }}>{label}</Text>
   
 
    
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {},
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  vw: {
    flex: 1,
   
    
  },
});