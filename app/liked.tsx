import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SplitView from '@/components/SplitView';
import useWallpapers, { useLikedWallpapers } from '@/hooks/useWallpapers';

export default function Liked() {
  const wallpapers = useLikedWallpapers();
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