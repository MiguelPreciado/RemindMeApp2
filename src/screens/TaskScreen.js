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

import TasksHeader from './../components/TasksHeader';
import Task from './../components/Task';

export default class TaskScreen extends Component {

  constructor(props){
    super(props);//llama al constructor padre

    this.state = {
      tasks: [
        { id: 1, title:'Leche', completed: false },
        { id: 2, title:'Basura', completed: false },
        { id: 3, title:'Platos', completed: false },
        { id: 4, title:'Fiesta', completed: false },
        { id: 5, title:'Leche', completed: false },
        { id: 6, title:'Basura', completed: false },
        { id: 7, title:'Platos', completed: false },
        { id: 8, title:'Fiesta', completed: false }
      ]
    }
  }

  renderTasks(){
    return(
      this.state.tasks.map( (task) => {
          return(
            <Task key= {task.id} id={task.id} title={task.title} />
            //<Task id={task.id} tittle={task.tittle} onUpdateTask={this.updateTask}/>
            //updateTask(id) investigar
            //Ejecutar en el componente desde props
          )
      } )
    )
  }

  render(){
    return (
      <View style={ styles.container }>
        <TasksHeader toBeCompleted={28} />
        <View style={ styles.tasksContainer }>
          { this.renderTasks() }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tasksContainer: {
    backgroundColor: 'green',
    flex: 1
  }
});
