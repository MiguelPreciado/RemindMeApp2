/**
 * IntroScreen
 *
 */

import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class IntroScreen extends Component<Props> {

  goToTask(){
  /*  console.log('Hello there');
    console.log(this.props);*/
    this.props.navigation.navigate('Tasks');
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./../images/remindMe-logo.png')} />
        <TouchableHighlight style={styles.secondaryButton}
        onPress={ this.goToTask.bind(this) }>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </TouchableHighlight>
        <Image
          source={require('./../images/avatars.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//crecer hasta el tope
    alignItems: 'center', //eje secundario y
    justifyContent: 'space-between',//eje principal x
    backgroundColor: 'rgb(237,24,74)'
  },
  logo: {
    width: 285,
    height: 75,
    marginTop: 140
  },
  secondaryButton: {
    height: 55,
    width: 325,
    padding: 17,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 27
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center'
  }
});
