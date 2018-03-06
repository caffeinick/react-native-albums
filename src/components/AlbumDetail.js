import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  // object destructuring
  const { title, artist, thumbnail_image, image } = album;
  const { 
    thumbnailContainerStyle,
    thumbnailStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image 
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageStyle: {
    width: null,
    height: 300,
    flex: 1,
  },
};

AlbumDetail.propTypes = {
  album: PropTypes.object
};

export default AlbumDetail;
