import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useWallpapers from '@/hooks/useWallpapers';
import SplitView from '@/components/SplitView';
import Carousel from 'react-native-reanimated-carousel';
import useCarousel from '@/hooks/useCarousel';
import Animated from 'react-native-reanimated';

const TOPBAR_HEIGHT = 250;

export default function Explore() {
  const wallpapers = useWallpapers();
  const width = Dimensions.get('window').width;
  const [yOffset, setScrollY] = useState(0);
  const carouselItems = useCarousel();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: TOPBAR_HEIGHT - yOffset }}>


        <Carousel
          loop
          autoPlay={true}
          width={width}
          scrollAnimationDuration={1000}
          // height={TOPBAR_HEIGHT - yOffset}
          data={carouselItems}
          renderItem={({ index }) => (
            <Animated.View
              style={{ flex: 1, borderWidth: 1, justifyContent: 'center' }}>
              <Image source={{ uri: carouselItems[index] }} style={{ height: 300 }} />

            </Animated.View>
          )}
        />
      </View>
      <SplitView onScroll={(yOffset) => {
        setScrollY(yOffset)
      }} wallpapers={wallpapers} />

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