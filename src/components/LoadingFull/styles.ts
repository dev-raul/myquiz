import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const {width, height} = Dimensions.get('window');
export const Container = styled.View`
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: ${width}px;
  height: ${height}px;
`;
