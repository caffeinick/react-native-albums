import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';

const AlbumDetail = (props) => {
  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  );
};

AlbumDetail.propTypes = {
  album: PropTypes.object,
}

export default AlbumDetail;