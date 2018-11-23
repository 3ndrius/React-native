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

});