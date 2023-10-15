import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Modal } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  state = {
    modalVisible: false,
  };

  _handleButtonPress = () => {
    this.setModalVisible(true);
  };

  setModalVisible = (visible) => {
   this.setTate({modalVisible: visible}); 
  }

  render() {
    var modalBackgroundStyle = {
      bakcgroundColor: 'rgba(0, 0, 0, 0.5)'
    };

    var innerContainerTransparentStyle = {backgroundColor: '#fff', padding: 20};
    return (
      <View style = {styles.container}>
      <Modal
        animationType = 'fade'
        transparent = {true}
        visible = {this.state.modalVisible}
        onRequestClose = {() => this.setModalVisible(false)}
      >
        <View style = {[styles.container, modalBackgroundStyle]}>
          <View style = {innerContainerTransparentStyle}>
            <Text>This is a modal</Text>
            <Button title = 'close'
              onPress = {this.setModalVisible.bind(this, false)} />
          </View>
        </View>
      </Modal>
      <Button 
        title = "Press me"
        onPress = {this._handleButtonPress}
      />
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});
