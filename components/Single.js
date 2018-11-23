import React, { Component } from 'react'
import  {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
export default class Single extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
            <Text style={styles.noteDeleteText} >Del </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#4C5C68'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#4C5C68'
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
        backgroundColor: '#4C5C68'
    },
    noteDeleteText: {
        color: '#DCDCDD'
    }
});