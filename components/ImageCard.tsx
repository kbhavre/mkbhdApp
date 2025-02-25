import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Wallpaper } from '@/hooks/useWallpapers'
import { ThemedText } from './ThemedText'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ImageCard({wallpaper, onPress} : {
    wallpaper: Wallpaper,
    onPress: ()=> void
}){
  return (
    <Pressable onPress={onPress}>
    <View>
        <Image source={{uri: wallpaper.url}} style={styles.image} />
        <View style={styles.labelContainer}>
        <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
        <FontAwesome name="heart" size={16} color="white" />
        </View>
       
  
    </View>
    </Pressable>
  )
} 


const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 220,
        borderRadius: 12
    },
    label: {
        color: "white",
    },
    labelContainer: {
        position: 'absolute',
        bottom: 0,
        width: "100%", 
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 5,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    }
})

