import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import useWallpapers, { useLibraryWallpapers } from '@/hooks/useWallpapers'
import SplitView from '@/components/SplitView';

export default function Library() {

  const wallpapers = useLibraryWallpapers();
      return (
        <View style={styles.container}>
          <SplitView wallpapers={wallpapers}/>
        </View>
      )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  })