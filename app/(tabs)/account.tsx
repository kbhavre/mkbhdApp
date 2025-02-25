import { View, Text, Button, Pressable, useColorScheme, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemedText } from '@/components/ThemedText';


export default function Account() {


  const theme = useColorScheme() ?? "light";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}>
        <LoginButtons />
        <ThemeSelector/>
      </View>
    </SafeAreaView>
  );
}



function ThemeSelector() {
  return <>
    <View style={{padding: 20}}>
      <ThemedText style={styles.textBig}>Settings</ThemedText>
      <ThemedText>Theme</ThemedText>
      <View style={styles.themeSelectorContainer}>
        <ThemeButton title={"Dark"} selected={false}/>
        <ThemeButton title={"Light"} selected={false}/>
        <ThemeButton title={"System"} selected={false}/>

      </View>
    </View>
  </>
}

function ThemeButton({title, selected}: {title: string, selected: boolean}){
  return <Pressable style={styles.themeButton}>
    <ThemedText>{title}</ThemedText>
  </Pressable>
}

function LoginButtons() {
  const theme = useColorScheme() ?? 'light';
  return <>
    <AuthButton
      label='Sign In'
      icon={<FontAwesome
        name="google"
        size={24}
        color="white"
      // color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
      />}
    />
    <AuthButton
      label='Sign In'
      icon={<FontAwesome
        name="apple"
        size={24}
        color="white"
      // color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
      />}
    />
  </>
}

function Header() {
  return <View style={styles.topBar}>
    <ThemedText style={styles.textBig}>Panels</ThemedText>
    <ThemedText>Sign in to save you data</ThemedText>
  </View>
}

function AuthButton({ label, icon }: {
  label: string,
  icon: any
}) {

  const theme = useColorScheme() ?? "light";

  return <Pressable style={{
    backgroundColor: "black",
    padding: 10,
    marginHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 5,
  }}>
    {icon}
    <Text style={{ fontSize: 20, color: "white" }}>{label}</Text>
  </Pressable>
}


const styles = StyleSheet.create({
  textBig: {
    fontSize: 25,
    fontWeight: "600"
  },
  topBar: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  themeSelectorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  themeSelectorChild: {
    flex: 0.33,
  },
  themeButton: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  }
})