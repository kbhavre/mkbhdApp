import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import liked from '../liked';
import library from '../library';
import suggested from '../suggested';
import { Colors } from '@/constants/Colors';
const Tab = createMaterialTopTabNavigator();


export default function ForYou() {

  const theme = useColorScheme() ?? "light"; 
  return (
    // <SafeAreaView style={styles.container}>
    <Tab.Navigator 
    style={{
      flex: 1,
    }}
    screenOptions={{
      tabBarActiveTintColor: Colors[theme].tint,
      tabBarStyle: {
        backgroundColor: Colors[theme].background
      }
    }}
    >
      <Tab.Screen name="Library" component={library} />
      <Tab.Screen name="Liked" component={liked} />
      <Tab.Screen name="Suggested" component={suggested} />
    </Tab.Navigator>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
})