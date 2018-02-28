/*
*TaskScreen
*/

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView
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
        { id: 8, title:'Fiesta', completed: false },
        { id: 9, title:'Leche', completed: false },
        { id: 10, title:'Basura', completed: false },
        { id: 11, title:'Platos', completed: false },
        { id: 12, title:'Fiesta', completed: false },
        { id: 13, title:'Leche', completed: false },
        { id: 14, title:'Basura', completed: false },
        { id: 15, title:'Platos', completed: false },
        { id: 16, title:'Fiesta', completed: false },
      ]
    }
  }

  addTask(){

  }

  calculateTaskToBeCompleted(){
    //Retorna el numero de tareas no completadas
    let count = 0;
    this.state.tasks.forEach( task => {
      if(!task.completed){
        count++;
      }
    } );
    return count;
  }

  updateTask(targetId){
    //copiar estado
    let currentTask = [...this.state.tasks];
    //verificar id a cambiar
    let taskToBeUpdated = currentTask.find( task => task.id === targetId );
    //checar ver estado y cambiarlo
    taskToBeUpdated.completed = !taskToBeUpdated.completed;
    //actualizar estado
    this.setState( {tasks: currentTask } );
  }

  renderTasks(){
    return(
      this.state.tasks.map( (task) => {
          return(
            <Task key= {task.id} task={task} updateTask={this.updateTask.bind(this)}/>
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
        <TasksHeader toBeCompleted={this.calculateTaskToBeCompleted()} />
        <ScrollView style={ styles.tasksContainer }>
          { this.renderTasks() }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tasksContainer: {
    backgroundColor: 'white',
    flex: 1
  }
});
