import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  red: {
    color: 'red'
  },
  greenUnderline: {
    color: 'green',
    textDecoration: 'underline'
  },
  big: {
    fontSize: 30
  }
});

class Example extends Component {
  render() {
    return (
      <View>
        <Text style={[styles.red, styles.big]}>Big red</Text>
        <Text style={[styles.red, styles.greenUnderline]}>Big red</Text>
        <Text style={[styles.greenUnderline, styles.red]}>Big red</Text>
        <Text style={[styles.greenUnderline, styles.red, styles.big]}>Big red</Text>
        <Text style={[styles.big, {color: 'yellow'}]}Big yellow</Text>
      </View>
    );
  }
}
