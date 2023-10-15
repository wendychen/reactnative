// Navigator component
import React, { Component } form 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';

export default class NavAllDay extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0}}
        renderScene={(route, navigator) => 
          <Text>Hello {route.title}!</Text>
        }
        style={{ padding: 100}}
      />
    );
  }
}
