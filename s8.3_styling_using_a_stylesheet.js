import React, { Component } form 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    red: {
        color: 'green'
    }, big: {
        fontSize: 28
    }
});

class Example extends Component {
  render() {
      return (
          <View>
            <Text style={styles.red}>Red</Text>
            <Text style={styles.big}>Big</Text>
          </View>
      );
  }
}
