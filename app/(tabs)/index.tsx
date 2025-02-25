import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import useWallpapers, { Wallpaper } from '@/hooks/useWallpapers';
import ImageCard from '@/components/ImageCard';
import { ThemedView } from '@/components/ThemedView';
import DownloadPicture from '@/components/BottomSheet';
import SplitView from '@/components/SplitView';


export default function Explore() {
  const wallpapers = useWallpapers();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: 'black', light: 'white' }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{ uri: "https://wallhalla.com/thumbs/1" }}
          />
        }
      >
        <SplitView wallpapers={wallpapers}/>
        
      </ParallaxScrollView>

      {/* {
  selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} pictureOpen={true} setPictureOpen={() => setSelectedWallpaper(null)} />
} */}
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
      padding: 4,
  },
  imageContainer: {
      paddingVertical: 10,

  }

}) 