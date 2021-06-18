import React, {useEffect} from 'react';
import {Dimensions, StatusBar} from 'react-native';
import Lottie from 'lottie-react-native';
import welcomeLottie from '../../assets/lottie/welcome.json';
import {
  Container,
  Content,
  Header,
  UserName,
  SubTitle,
  HeaderBackground,
} from './styles';
import {getGreetingMessage} from '../../utils/date';
import {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useTheme} from 'styled-components';
const {width} = Dimensions.get('screen');
const DashBoardPlayer = () => {
  const startAnimated = useSharedValue(0);
  const {colors} = useTheme();
  useEffect(() => {
    startAnimated.value = withTiming(1, {
      duration: 1500,
      easing: Easing.bounce,
    });
  }, [startAnimated]);

  const nameStyle = useAnimatedStyle(() => {
    const translateX = Math.round(
      interpolate(
        startAnimated.value,
        [0, 0.5, 1],
        [-width * 0.1, 0, 0],
        Extrapolate.CLAMP,
      ),
    );
    return {
      opacity: interpolate(
        startAnimated.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP,
      ),
      transform: [{translateX}],
    };
  }, [startAnimated.value]);
  const subTitletyle = useAnimatedStyle(() => {
    const translateX = Math.round(
      interpolate(
        startAnimated.value,
        [0, 0.5, 1],
        [-width * 0.2, -width * 0.1, 0],
        Extrapolate.CLAMP,
      ),
    );
    return {
      opacity: interpolate(
        startAnimated.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP,
      ),
      transform: [{translateX}],
    };
  }, [startAnimated.value]);

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Content>
        <Header>
          <HeaderBackground />
          <Lottie
            style={{height: 70}}
            resizeMode="contain"
            source={welcomeLottie}
            autoPlay
            loop
          />
          <UserName style={nameStyle}>{getGreetingMessage()} rraul</UserName>
          <SubTitle style={subTitletyle}>
            "O importante não é vencer todos os dias, mas lutar sempre."
          </SubTitle>
        </Header>
      </Content>
    </Container>
  );
};

export default DashBoardPlayer;
