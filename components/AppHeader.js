import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Quiz Master App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'blue',
  },

  text: {
    color: 'white',
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
  },
});

