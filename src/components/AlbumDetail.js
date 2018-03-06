import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types'

const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

AlbumDetail.propTypes = {
  album: PropTypes.object,
}

export default AlbumDetail;