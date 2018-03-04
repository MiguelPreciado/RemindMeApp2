/**
 * AddTasksModal
 *
 */

import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TextInput
} from 'react-native';
import Logo from './../components/Logo';


export default class AddTaskModal extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      taskTitle: ''
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Logo/>
          </View>
          <View style={styles.body}>
            <Text style={styles.tarea}>Agregar Tarea</Text>
            <TextInput
              placeholder={'Título de la tarea'}
              onChangeText={ ( text )=>{ this.setState({ taskTitle: text })  } }
              style={styles.input}/>

            <TouchableHighlight onPress={ ()=>{ this.props.addTask( this.state.taskTitle ) } } style={styles.addSecondaryButton}>
              <Text style={styles.addButtonText}>AGREGAR</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={ ()=>{ this.props.hideModal() } } style={styles.cancelSecondaryButton}>
              <Text style={styles.cancelButtonText}>CANCELAR</Text>
            </TouchableHighlight>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, .35)'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  header: {
    width:340,
    height: 242,
    padding: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(237,24,74)'
  },
  tarea:{
    fontSize: 16,
    color: '#7a7a7a',
    paddingTop: 19
  },
  body: {
    width:340,
    height: 300,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    paddingTop: 16,
    fontSize: 30,
    width: 270,
    color: '#1d1d26'
  },
  addSecondaryButton: {
    marginTop: 25,
    marginBottom: 29,
    height: 55,
    width: 325,
    padding: 17,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 27,
    backgroundColor: 'rgb(237,24,74)'
  },
  addButtonText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center'
  },
  cancelSecondaryButton: {
    marginBottom: 35,
    height: 55,
    width: 325,
    padding: 17,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgb(237,24,74)',
    borderRadius: 27
  },
  cancelButtonText: {
    color: 'rgb(237,24,74)',
    fontSize: 17,
    textAlign: 'center'
  }
});
