import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
const {width} = Dimensions.get('window');
export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.background};
  padding: 20px ${width * 0.03}px;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  color: ${({theme}) => theme.colors.heading};
  font-family: ${({theme}) => theme.fonts.logoTitle};
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0px ${width * 0.02}px;
  font-family: ${({theme}) => theme.fonts.text};
  color: ${({theme}) => theme.colors.heading};
  font-style: italic;
`;

export const BtnNext = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  width: 56px;
  height: 56px;
`;

export const Footer = styled(Animated.View)`
  width: 100%;
  max-width: 200px;
`;
