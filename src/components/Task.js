import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class Task extends Component{
  constructor(props){
    super(props);
    //TODO: Define state
  }

  render(){
    return(
      <View key= {this.props.id}style={styles.taskContainer}>
      <TouchableHighlight>
        <Image style={styles.taskIcon} source={require('./../images/icon-circle.png')}/>
      </TouchableHighlight>
        <Text style={styles.taskText}>{this.props.title}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
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
