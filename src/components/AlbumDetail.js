import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = props => {
  return (
    <Card>
      <CardSection>
        <View></View>
        <View style={styles.headerContentStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

AlbumDetail.propTypes = {
  album: PropTypes.object
};

export default AlbumDetail;
