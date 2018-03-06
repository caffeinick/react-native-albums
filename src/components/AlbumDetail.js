import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import PropTypes from 'prop-types';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

AlbumDetail.propTypes = {
  album: PropTypes.object,
}

export default AlbumDetail;