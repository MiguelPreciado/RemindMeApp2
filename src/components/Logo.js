/**
 * IntroScreen
 *
 */

import React, { Component } from 'react';

import {
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class Logo extends Component<Props> {

  render() {
    return (
        <Image style={styles.logo} source={require('./../images/remindMe-logo.png')} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1//crecer hasta el tope
  },
  logo: {
    width: 285,
    height: 75
  }
});
