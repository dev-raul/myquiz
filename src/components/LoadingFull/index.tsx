import React from 'react';
import Lottie from 'lottie-react-native';
import {Container} from './styles';
import loadingLottie from '../../assets/lottie/loading-full.json';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
interface LoadingFullProps {
  loading?: boolean;
}
const LoadingFull = ({loading = false}: LoadingFullProps) => {
  if (!loading) {
    return null;
  }
  return (
    <Container>
      <Lottie
        style={{height: width * 0.6}}
        resizeMode="contain"
        source={loadingLottie}
        autoPlay
        loop
      />
    </Container>
  );
};

export default LoadingFull;
