import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import DownloadPicture from '@/components/BottomSheet';

export default function Account() {
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={{ flex: 1}}>

      
      <Text>Account Page</Text>
      <Button
        onPress={() => {
          setPictureOpen(true);
        }}
        title="Open Bottom Sheet"
      />
      <DownloadPicture pictureOpen={pictureOpen} setPictureOpen={setPictureOpen} />
      </View>
    </SafeAreaView>
  );
}