//https://snack.expo.io/@waltermolina/et20-demo

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default class App extends Component {
  
  render() {
    return (
      <View style={styles.contenedor}>
        <StatusBar
          backgroundColor="rgba(255,0,0,0.1)"
          barStyle="light-content"
          translucent
          animated
        />

        <Text>¡Hola!</Text>
        <Text> Mi nombre es Walter Molina</Text>

        <Text>
          Soy Lic. en Sistemas de Información. Tengo 29 años. Me gusta mucho programar, y trabajo haciendo sitios web y aplicaciones para smartphones. Estoy aprendiendo a tocar la batería. ¡Tengo una perra salchicha, que se llama Olivia
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
