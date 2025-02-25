import React, { useCallback, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const DownloadPicture = ({ pictureOpen, setPictureOpen }) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Open Bottom Sheet when `pictureOpen` changes
  useEffect(() => {
    if (pictureOpen) {
      bottomSheetRef.current?.expand();
    }
  }, [pictureOpen]);

  // Handle closing of the bottom sheet
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    if (index === -1) {
      setPictureOpen(false); // Close when fully collapsed
    }
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // Initially hidden
        snapPoints={['99%']} // Define height of the bottom sheet
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        handleIndicatorStyle={{height: 0}}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default DownloadPicture;