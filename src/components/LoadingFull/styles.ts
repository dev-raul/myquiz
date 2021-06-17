import {Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
const {width, height} = Dimensions.get('window');
export const Container = styled(Animated.View)`
  position: absolute;
  z-index: 1;
  left: 0;
  top: -80px;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: ${width}px;
  height: ${height + 80}px;
  background-color: rgba(68, 71, 90, 0.9);
`;

export const LottieView = styled.View`
  height: ${width * 0.5}px;
  width: ${width * 0.5}px;
`;
