import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  state = { albums: [] };                                                 // 1. define initial state

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData })) // 2. define state by setState method
  }

  render() {
    console.log(this.state);
    
    return (
      <View>
        <Text>Album List!! </Text>
      </View>
    );
  }
}

export default AlbumList;