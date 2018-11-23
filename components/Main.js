import React, { Component } from 'react'
import { 
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  } from 'react-native';

  import Single from './Single';

export default class Main extends Component {

  state = {
    todoArray: [],
    todo: ''
  }
  render() {

    let notes = this.state.todoArray.map((val, key) => {
      return <Single key={key} keyval={key} val={val} deleteMethod={ () => this.deleteTodo(key)} />
    });
    return (
     <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>NOTE APP</Text>
        </View>
        <ScrollView style={styles.listContainer}>
        
        </ScrollView>
        <View style={styles.footer}>
          <TextInput style={styles.inputText}
          placeholder='Add todos..'
          placeholderTextColor='white'
          underlineColorAndroid='transparent'>
          </TextInput>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.addButtonText} > + </Text>
        </TouchableOpacity>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDD'

  },
  header: {
    backgroundColor: '#1985A1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#DCDCDD',
    fontSize: 20,
    padding: 20,
    fontWeight: '700',
    marginTop: 20
  },
  listContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex:10,
   
  },
  inputText: {
    alignSelf: 'stretch',
    color: '#DCDCDD',
    padding: 25,
    backgroundColor: '#46494C'
  },
  button: {
    height:60,
    width:60,
    backgroundColor:'#1985A1',
    position: 'absolute',
    zIndex: 11,
    bottom: 40,
    right:20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonText: {
    fontWeight: '700',
    fontSize: 25,
    color:'#DCDCDD'
    
  }
});