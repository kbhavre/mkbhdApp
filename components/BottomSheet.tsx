import React, { useCallback, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button, useColorScheme } from 'react-native';
import { GestureHandlerRootView, Pressable } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemedText } from './ThemedText';

const DownloadPicture = ({ pictureOpen, setPictureOpen, wallpaper }) => {
  // ref
  const bottomSheetRef = useRef(null);

  // Handle the bottom sheet visibility when pictureOpen changes
  useEffect(() => {
    if (pictureOpen) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [pictureOpen]);

  // Handle closing of the bottom sheet
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
    if (index === -1) {
      setPictureOpen(false); // Close when fully collapsed
    }
  }, [setPictureOpen]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={pictureOpen ? 0 : -1} // Controlled by the pictureOpen prop
      snapPoints={["95%"]}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={{ uri: wallpaper.url }}
        />
        <View style={styles.topbar}>
          <AntDesign name="close" size={24} color="white" />
          <View style={styles.topbarInner}>
            <FontAwesome name="heart" size={24} color="white" />
            <FontAwesome name="share" size={24} color="white" style={{paddingLeft: 10}} />
          </View>
        </View>
        <View style={styles.textContainer}>
        <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
        </View>
        
        {/* <Button title='Download'></Button> */}
        <DownloadButton/>
      </BottomSheetView>
    </BottomSheet>

  );
};

function DownloadButton() {
  
  const theme = useColorScheme() ?? "light";

  return <Pressable style={{
    backgroundColor: "black",
    padding: 10, 
    marginHorizontal: 40, 
    justifyContent: "center", 
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 20
    }}>
       <FontAwesome name="download" size={24} color="white" style={{paddingRight: 10}} />
    <Text style={{fontSize: 20, color: "white"}}>Download</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  bottomSheetBackground: {
    backgroundColor: 'white',
  },
  image: {
    height: "70%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  topbar: {
    position: "absolute",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  topbarInner: {
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
     width: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    paddingTop: 20,
    fontWeight: 600,
  }
});

export default DownloadPicture;