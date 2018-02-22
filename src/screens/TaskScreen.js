/*
*TaskScreen
*/

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default class TaskScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      tasks: [
        { id: 1, title:'Leche', completed: false },
        { id: 2, title:'Basura', completed: false },
        { id: 3, title:'Platos', completed: false },
        { id: 4, title:'Fiesta', completed: false }
      ]
    }
  }

  render(){
    return (
      <View style={ styles.container }>
        <View style={ styles.headerContainer }>
          <Image style={styles.userAvatar} source={require('./../images/user-avatar.png')}/>
          <Text style={styles.pendingTasksText}>6 Pendientes</Text>
          <Text style={styles.dateText}>SÁBADO 27 DE ENERO 2018</Text>
        </View>
        <View style={ styles.tasksContainer }>

          <View style={styles.taskContainer}>
            <Image style={styles.taskIcon} source={require('./../images/icon-circle.png')}/>
            <Text style={styles.taskText}>Crear componentes</Text>
          </View>

          <View style={styles.taskContainer}>
            <Image style={styles.taskIcon} source={require('./../images/icon-circle.png')}/>
            <Text style={styles.taskText}>Validar pantallas</Text>
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tasksContainer: {
    backgroundColor: 'green',
    flex: 1
  },
  userAvatar: {
    height: 130,
    width: 130,
    borderRadius: 65
  },
  pendingTasksText: {
    marginTop: 25,
    fontSize: 36,
    color: 'white'
  },
  dateText: {
    marginTop: 8,
    fontSize: 16,
    color: '#A0A0A0'
  },
  taskContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#E7E7E7'
  },
  taskIcon: {
    height: 25,
    width: 25,
    marginRight: 15
  },
  taskText: {
    fontSize: 21
  }
});
