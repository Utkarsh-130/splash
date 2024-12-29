import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useWallpapers } from '@/hooks/useWallpapers'
import { SplitView } from '@/components/SplitView';

export default function Library() {
 const wallpapers = useWallpapers();
 return <View>
    <SplitView wallpapers={wallpapers}/>
    </View>
}

const styles = StyleSheet.create({})