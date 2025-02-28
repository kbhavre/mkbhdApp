import { View, FlatList, StyleSheet } from 'react-native';
import React, { useState, useCallback } from 'react';
import { ThemedView } from './ThemedView';
import ImageCard from './ImageCard';
import { Wallpaper } from '@/hooks/useWallpapers';
import DownloadPicture from './BottomSheet';

export default function SplitView({ wallpapers, onScroll }: { 
    wallpapers: Wallpaper[];
    onScroll?: (yOffset: number) => void; 
}) {
    const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);

    // Memoized function to close the bottom sheet
    const closeBottomSheet = useCallback(() => {
        setSelectedWallpaper(null);
    }, []);

    return (
        <>
            <ThemedView style={styles.container}>
                <FlatList
                    onScroll={(e) => {
                        let yOffset = e.nativeEvent.contentOffset.y;
                        onScroll?.(yOffset); 
                    }}
                    data={wallpapers}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer}>
                            <ImageCard
                                wallpaper={item}
                                onPress={() => setSelectedWallpaper(item)}
                            />
                        </View>
                    )}
                    keyExtractor={(item) => item.name}
                />
            </ThemedView>

            {selectedWallpaper && (
                <DownloadPicture
                    wallpaper={selectedWallpaper}
                    pictureOpen={!!selectedWallpaper} 
                    setPictureOpen={closeBottomSheet} 
                />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        padding: 4, 
    },
});