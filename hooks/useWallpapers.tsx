import { View, Text } from 'react-native'
import React from 'react'

export interface Wallpaper {
    url: string,
    name: string,
}

export default function useWallpapers(): Wallpaper[] {
    return [
        {
            url: "https://wallhalla.com/wallpaper/72/variant/preview/lg",
            name: "Beautiful Nature",
        },
        {
            url: "https://wallhalla.com/wallpaper/24/variant/preview/lg",
            name: "City Lights",
        },
        {
            url: "https://wallhalla.com/thumbs/15",
            name: "Ocean Waves",
        },
        {
            url: "https://wallhalla.com/thumbs/45",
            name: "Majestic Mountains",
        },
        {
            url: "https://wallhalla.com/thumbs/21",
            name: "Deep Forest",
        },
    ];
}