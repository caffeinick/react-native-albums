import React, { Component } from 'react';
import { View } from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // State is for components internal recordkeeping that is the purpose of state.
  // We use state whenever we want to update some amount of data overtime.
  state = { albums: [] }; 
  // 1. define initial state

  // Lifecyle method starts
  componentWillMount() {
    this.loadData();
  }

  // loadData() {
  //   fetch('https://rallycoding.herokuapp.com/api/music_albums')
  //   .then((response) => response.json())
  //   .then((responseData) => this.setState({ albums: responseData }))      
  //                            // 2. update state by this.setState method
  //   .catch((e) => console.log(e))
  // }

  async loadData() {
    try {
      const response = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
      const albums = await response.json();
      this.setState({ albums });
    } catch (e) {
      console.log('Error', e);
    }
  }

  // Lifecycle method ends

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    console.log(this.state);

    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
