import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useWallpapers from '@/hooks/useWallpapers';
import SplitView from '@/components/SplitView';
import Carousel from 'react-native-reanimated-carousel';
import useCarousel from '@/hooks/useCarousel';
import Animated from 'react-native-reanimated';
import {LinearGradient} from 'expo-linear-gradient'

const TOPBAR_HEIGHT = 250;

export default function Explore() {
  const wallpapers = useWallpapers();
  const width = Dimensions.get('window').width;
  const [yOffset, setScrollY] = useState(0);
  const carouselItems = useCarousel();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View style={{ height: TOPBAR_HEIGHT - yOffset }}>


        <Carousel
          loop
          autoPlay={true}
          width={width}
          scrollAnimationDuration={1000}
          // height={TOPBAR_HEIGHT - yOffset}
          data={carouselItems}
          renderItem={({ index }) => (
           
              <>
            <View
              style={{ 
                flex: 1, 
                borderWidth: 1, 
                justifyContent: 'center' 
              }}>
              <Image 
              source={{ uri: carouselItems[index].image }} 
              style={{ height: 300 }} 
              />
            </View>

            <LinearGradient colors={['transparent', 'black']} style={styles.linearGradient}>
              <Text style={styles.carouselText}>{carouselItems[index].title}</Text>
            </LinearGradient>
            </>
            
          )}
        />

      </Animated.View>
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

  },
  linearGradient: {
    flex: 1,
    position: "absolute",
    zIndex: 10,
    height: TOPBAR_HEIGHT/2,
    width: "100%",
    bottom: 0,
  },
  carouselText: {
    paddingTop: TOPBAR_HEIGHT/3,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    color: "white",
  }

}) 