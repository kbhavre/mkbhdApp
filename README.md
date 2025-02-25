<!-- import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ThemedView } from './ThemedView';
import ImageCard from './ImageCard';
import { Wallpaper } from '@/hooks/useWallpapers';
import DownloadPicture from './BottomSheet';

export default function SplitView({ wallpapers }: { wallpapers: Wallpaper[] }) {

    const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);

    return (<>
        <ThemedView style={styles.container}>
            <ThemedView style={styles.innerContainer}>
                <FlatList
                    data={wallpapers.filter((_, index) => index % 2 == 1)}
                    renderItem={({ item }) => <View style={styles.imageContainer}>
                        <ImageCard wallpaper={item} onPress={() => {
                            setSelectedWallpaper(item);
                        }} />
                    </View>}
                    keyExtractor={(item) => item.name}
                />
            </ThemedView>
            <ThemedView style={styles.innerContainer}>
                <FlatList
                    data={wallpapers.filter((_, index) => index % 2 == 0)}
                    renderItem={({ item }) => <View style={styles.imageContainer}>
                        <ImageCard wallpaper={item} onPress={() => {
                            setSelectedWallpaper(item);
                        }} />
                    </View>}
                    keyExtractor={(item) => item.name}
                />
            </ThemedView>
        </ThemedView>

        {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} pictureOpen={true} setPictureOpen={() => setSelectedWallpaper(null)} />
        }
    </>
    )
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

})  -->
