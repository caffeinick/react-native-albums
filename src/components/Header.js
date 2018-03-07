// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

// Make a component
const Header = props => {
  // Whenever we want to communicate from a parent component to a child compoenent we use props.
  // So props is for parent to child communication.
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

Header.propTypes = {
  headerText: PropTypes.string
};

const styles = {
  // Use JSX Style (not dash)
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
    color: 'white',
    fontWeight: 'bold'
  }
};

// Make the component available to other parts of the app
export default Header;
