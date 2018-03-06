import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  // object destructuring
  const { title, artist, thumbnail_image } = album;
  const { thumbnailStyle, headerContentStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Image 
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }} 
          />
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

AlbumDetail.propTypes = {
  album: PropTypes.object
};

export default AlbumDetail;
