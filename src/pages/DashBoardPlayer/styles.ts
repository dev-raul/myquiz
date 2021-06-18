import {Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
const {width} = Dimensions.get('screen');
export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: column;
  height: 300px;
`;
export const HeaderBackground = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 240px;
  width: ${width}px;
  background-color: ${({theme}) => theme.colors.primary};
  border-bottom-left-radius: ${width / 2}px;
  border-bottom-right-radius: ${width / 2}px;
  transform: scaleX(2);
`;
export const UserName = styled(Animated.Text)`
  font-size: 28px;
  padding: 0px ${width * 0.02}px;
  font-family: ${({theme}) => theme.fonts.text};
  color: ${({theme}) => theme.colors.white};
`;
export const SubTitle = styled(Animated.Text)`
  margin-top: 10px;
  font-size: 16px;
  padding: 0px ${width * 0.02}px;
  font-family: ${({theme}) => theme.fonts.text};
  color: ${({theme}) => theme.colors.white};
  font-style: italic;
`;
