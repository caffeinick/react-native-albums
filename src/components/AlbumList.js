import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  // State is for components internal recordkeeping that is the purpose of state.
  // We use state whenever we want to update some amount of data overtime.
  state = { albums: [] };                                                 // 1. define initial state

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData }))      // 2. update state by this.setState method
  }

  renderAlbums() {
    return this.state.albums.map((album) => {
      return (
        <Text key={album.title.toString()}>
          {album.title}
        </Text>
      );
  });
  }

  render() {
    console.log(this.state);
    
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;