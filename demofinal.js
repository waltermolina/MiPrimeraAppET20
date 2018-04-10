
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Button,
  Linking,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {
  LinearGradient,
} from 'expo';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mostrarOlivia: false,
    };
  }

  render() {
    return (
      <View style={styles.contenedor}>
        <StatusBar
          backgroundColor="rgba(255,0,0,0.1)"
          barStyle="light-content"
          translucent
          animated
        />
        <LinearGradient
          colors={['rgb(140,0,149)', '#7E57C2']}
          style={styles.degradado}>
            <Text style={styles.hola}>
              ¡Hola!
            </Text>
            <Image
              //source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
              source={require('/assets/walter.jpg')}
              style={styles.imagenPerfil}
            />
            <View style={styles.infoPerfil}>
              <Text style={styles.nombre}>
                Mi nombre es <Text style={styles.negrita}>Walter Molina</Text>
              </Text>
              <Text style={styles.detalles}>
                <Text>
                  Soy Lic. en Sistemas de Información. Tengo 29 años. Me gusta mucho programar, y trabajo haciendo sitios web y aplicaciones para smartphones. Estoy aprendiendo a tocar la batería. ¡Tengo una perra salchicha, que se llama
                  {' '}
                  <Text style={styles.negrita}>Olivia</Text>
                  !
                </Text>
              </Text>
            </View>
            <View style={styles.botones}>
              <Button
                title="Seguime"
                style={styles.boton}
                onPress={() =>
                  Linking.openURL('http://instagram.com/w4ltermolina')}
              />
              <Button
                title="¡Quiero conocer a Olivia!"
                style={styles.boton}
                onPress={() => this.setState({ mostrarOlivia: true })}
              />
            </View>

        </LinearGradient>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.mostrarOlivia}>

          <View style={styles.contenedorOlivia}>
            <TouchableHighlight
              onPress={() => {
                this.setState({ mostrarOlivia: false });
              }}>
              <Image
                resizeMode="contain"
                source={require('/assets/olivia.jpg')}
              />
            </TouchableHighlight>

          </View>
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  degradado: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    paddingTop: 0,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  imagenPerfil: {
    height: 200,
    width: 200,
    borderRadius: 100,
    margin: 20,
  },
  infoPerfil: {
    marginTop: 0,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hola: {
    fontSize: 30,
    color: 'white',
  },
  nombre: {
    fontSize: 24,
    color: 'white',
  },
  negrita: {
    fontWeight: 'bold',
  },
  detalles: {
    color: 'white',
    fontSize: 18,
    flexDirection: 'row',
    textAlign: 'center',
    flexWrap: 'nowrap',
  },
  botones: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  contenedorOlivia: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
