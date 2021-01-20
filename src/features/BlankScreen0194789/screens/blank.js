import React, { Component } from 'react'
import { AppRegistry, View, Button, StyleSheet } from 'react-native'
class App extends Component {
  state = {
      count: 0,
  };
  handleCounter = () => {
     this.setState({"count": this.state.count + 1})
  };
  
  render() {
      const { count } = this.state;
      return (
          <View style={styles.container}>
                 <Button onPress={this.handleCounter}>Increment</Button>
             <Button onPress={this.handleCounter}>Decrement</Button>
            <Button onPress={this.handleCounter}>Reset</Button>
            <Button onPress={this.handleCounter}>Increment by 10</Button>
          </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    padding: 20
  },
})
AppRegistry.registerComponent('App', () => App)
