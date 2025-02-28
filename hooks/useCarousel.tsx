import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function useCarousel(): { title: string, image: string }[] {
  return [
    {
      title: "In the sunset",
      image: "https://picsum.photos/800/600?random=1"
    },
    {
      title: "Close to me",
      image: "https://picsum.photos/800/600?random=2",
    },
    {
      title: "Made of sky",
      image: "https://picsum.photos/800/600?random=3",
    },
    {
      title: "Nothing in the air",
      image: "https://picsum.photos/800/600?random=4",
    },
    {
      title: "Never settle",
      image: "https://picsum.photos/800/600?random=5"
    },
  ];
}

const styles = StyleSheet.create({})