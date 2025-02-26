import React, { useCallback, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, useColorScheme, Pressable } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { Colors } from '@/constants/Colors';

const DownloadPicture = ({ pictureOpen, setPictureOpen, wallpaper }) => {
  
  const bottomSheetRef = useRef(null);
  const theme = useColorScheme() ?? 'light';

  useEffect(() => {
    if (pictureOpen) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [pictureOpen]);


  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
    if (index === -1) {
      setPictureOpen(false); 
    }
  }, [setPictureOpen]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={pictureOpen ? 0 : -1}
      snapPoints={["95%"]}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
      backgroundStyle={{
        backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background
      }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <ThemedView style={{flex: 1}}>
          <Image
            style={styles.image}
            source={{ uri: wallpaper.url }}
          />
          <View style={styles.topbar}>
            <AntDesign 
              name="close" 
              size={24} 
              color={theme === 'light' ? "white" : Colors.dark.text} 
              onPress={() => setPictureOpen(false)}
            />
            <View style={styles.topbarInner}>
              <FontAwesome 
                name="heart" 
                size={24} 
                color={theme === 'light' ? "white" : Colors.dark.text} 
              />
              <FontAwesome 
                name="share" 
                size={24} 
                color={theme === 'light' ? "white" : Colors.dark.text} 
                style={{paddingLeft: 10}} 
              />
            </View>
          </View>
          <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
          </ThemedView>
          
          <DownloadButton />
        </ThemedView>
      </BottomSheetView>
    </BottomSheet>
  );
};

function DownloadButton() {
  const theme = useColorScheme() ?? "light";

  return (
    <Pressable 
      style={{
        backgroundColor: "black",
        padding: 10,
        marginHorizontal: 40,
        marginVertical: 20,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon,
      }}
    >
      <FontAwesome 
        name="download" 
        size={24} 
        color={theme === 'light' ? "white" : Colors.dark.icon} 
        style={{paddingRight: 10}} 
      />
      <Text 
        style={{
          fontSize: 20, 
          color: theme === 'light' ? "white" : Colors.dark.text,
          fontWeight: "600",
        }}
      >
        Download
      </Text>
    </Pressable>
  );
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