// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {      // Use JSX Style (not dash)
  viewStyle: {
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3
  },
  textStyle: {
    fontSize: 20,
    color: 'white'
  }
};

// Make the component available to other parts of the app
export default Header;