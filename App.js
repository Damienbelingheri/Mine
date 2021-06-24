import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { style } from 'styled-system';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Mine</Text>
      <Text style={styles.dot}>.</Text>
      <Text style={styles.greet}>Hola</Text>
      <Text style={styles.why}>Quieres empezar a mejorar ? </Text>
      <Text style={styles.intro}>Explora nuestro mundo visual y sonoro para empezar a mejorar tu vida íntima y ser más feliz.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F7FC',
    fontFamily: 'HelveticaNeue',
  },
  logo:{
    position: 'absolute',
    left: 58,
    top: 159,
    fontSize: 35,
    lineHeight: 35,
    /* or 100% */
    textAlign: 'justify',
    color: '#9377C9'
  },
  dot:{
    position: 'absolute',
    width: 6,
    height: 6,
    left: 89,
    top: 161,
    backgroundColor: '#FA8080',
    borderRadius: 3,
    overflow: 'hidden'
  },
  greet:{
    position: 'absolute',
    width: 77,
    height: 37,
    left: 58,
    top: 293,
    fontSize: 28,
    lineHeight: 36,
    /* identical to box height, or 130% */
    color: "#2B163D"

  },
  why:{
    position: 'absolute',
    width: 194,
    height: 54,
    left: 58,
    top: 335,
    fontSize: 23,
    lineHeight: 27,
    
    color: '#78717D'
  },
  intro:{
    position: 'absolute',
width: 308,
height: 32,
left: 58,
top: 412.9,
fontSize: 14,
lineHeight: 16,
/* or 114% */
color: '#78717D'
  }

});
