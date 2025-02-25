import { View, Text } from 'react-native'
import React from 'react'

export interface Wallpaper {
    url: string,
    name: string,
}

interface FullWallpaper extends Wallpaper{
    liked: boolean,
    suggested: boolean,
    library: boolean, 
}

export function useSuggestedWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.suggested);
}

export function useLikedWallpapers(): FullWallpaper[]{
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.liked);
}

export function useLibraryWallpapers(): FullWallpaper[]{
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.library);
}

export default function useWallpapers(): FullWallpaper[] {
    return [
        {
            url: "https://wallhalla.com/wallpaper/72/variant/preview/lg",
            name: "Beautiful Nature",
            liked: true,
            suggested: true,
            library: false,
        },
        {
            url: "https://wallhalla.com/wallpaper/24/variant/preview/lg",
            name: "City Lights",
            liked: true,
            suggested: false,
            library: true,
        },
        {
            url: "https://wallhalla.com/thumbs/15",
            name: "Ocean Waves",
            liked: true,
            suggested: true,
            library: true,
        },
        {
            url: "https://wallhalla.com/thumbs/45",
            name: "Majestic Mountains",
            liked: false,
            suggested: true,
            library: true,
        },
        {
            url: "https://wallhalla.com/thumbs/21",
            name: "Deep Forest",
            liked: true,
            suggested: true,
            library: false,
        },
    ];
}