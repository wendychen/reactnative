// 2023.10.15

import React, { Component } from 'react';
import PropTypes from 'prop-type';
import { AppRegistry, Text, View } from 'react-native';

import styles form './styles.js';

class Recipe extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isYummy: PropTypes.bool.isRequired
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.name}</Text>
        { this.props.isYummy ? <Text>THIS PECIPE IS YUMMY~~</Text>: null }
      </View>
    )
  }
}

AppRegistry.registerComponent('Recipe', () => Recipe);

// Using the component
<Recipe name="Pancakes" isYummy={true} />
