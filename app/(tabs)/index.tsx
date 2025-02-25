


import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import useWallpapers, { Wallpaper } from '@/hooks/useWallpapers';
import ImageCard from '@/components/ImageCard';
import { ThemedView } from '@/components/ThemedView';
import DownloadPicture from '@/components/BottomSheet';


export default function Explore() {
  const wallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);

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

        <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
             data={wallpapers.filter((_, index) => index%2 ==1)}
              renderItem={({ item }) => <View style={styles.imageContainer}>
                <ImageCard wallpaper={item} onPress={()=>{
                  setSelectedWallpaper(item);
                }} />
              </View>}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index%2 ==0)}
              renderItem={({ item }) => <View style={styles.imageContainer}>
              <ImageCard wallpaper={item} onPress={()=>{
                  setSelectedWallpaper(item);
                }} />
            </View>}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>

      {
  selectedWallpaper && <DownloadPicture pictureOpen={true} setPictureOpen={() => setSelectedWallpaper(null)} />
}
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