import React, { Component } form 'react';
import [ AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class MyParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myInteger: 0
    }
  }

  getRandomInteger() {
    const randomInt = Math.floor(Math.random()*100);

    this.setState({
      myInteger: randomInt
    });
  }
  incrementInteger() {
    this.setState((previousState, currentProps) => {
      return {
        myInteger: previousState.myInteger+1
      }
    });
  }
  render() {
    return <View style={styles.container}>
      <Text>Parent Component Integer: {this.state.myInterger}</Text>
      <MyChildComponent myInteger={this.state.myInteger} />

      <Button label="Get Random Integer" onPress={this.getRandomInteger.bind(this)} />
      <Button label="Increment Integer" onPress={this.incrementInteger.bind(this)} />
    </View>
  }
}

export default class MyChildComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // this will get updated when "MyPraentComponent" state changes
    return <View>
      <Text>Child Component Integer: {this.props.myInteger}</Text>
    </View>
  }
}

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TouchableOpacity onPress={this.props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{this.props.label}</Text>
      </View>
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#444',
    padding: 10,
    marginTop: 10
  },
  buttonText: {
    color: '#fff'
  }
});

AppRegistry.registerComponent('MyApp', () => MyParentComponent);
