import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

 
  componentDidMount = () => {
 
  
  }
  render() {

    return (
      <View style={styles.container}>

        
     
        <Text style={styles.text2}>Hello</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text2: {
    fontSize:50
  }
});
