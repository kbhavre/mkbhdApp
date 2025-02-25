import React, { useCallback, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const DownloadPicture = ({ pictureOpen, setPictureOpen }) => {
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
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={pictureOpen ? 0 : -1} // Controlled by the pictureOpen prop
        snapPoints={["95%"]}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        handleIndicatorStyle={{height: 0}}
        backgroundStyle={styles.bottomSheetBackground}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome hey there 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject, // Position the component over the entire screen
    zIndex: 999, // Ensure it's above other components
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  bottomSheetBackground: {
    backgroundColor: 'white',
  },
});

export default DownloadPicture;