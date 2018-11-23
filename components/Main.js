import React, { Component } from 'react'
import { 
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  } from 'react-native';

export default class Main extends Component {
  render() {
    return (
     <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>NOTE APP</Text>
        </View>
        <ScrollView style={styles.listContainer}>
        
        </ScrollView>
        <View style={styles.footer}>
          <TextInput style={styles.inputText}
          placeholder='note'
          placeholderTextColor='white'
          underlineColorAndroid='transparent'>
          </TextInput>
        </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});