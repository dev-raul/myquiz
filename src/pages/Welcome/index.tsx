import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import Lottie from 'lottie-react-native';
import welcomeLottie from '../../assets/lottie/welcome.json';
import {Container, Title, Header, SubTitle, Content, Footer} from './styles';
import Button from '../../components/Button';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/core';
const {width} = Dimensions.get('screen');
const Welcome: React.FC = () => {
  const navigation = useNavigation();
  const startAnimated = useSharedValue(0);

  useEffect(() => {
    console.log(startAnimated);
    startAnimated.value = withTiming(1, {
      duration: 1000,
      easing: Easing.bounce,
    });
  }, [startAnimated]);

  const buttonStyle = useAnimatedStyle(() => {
    // const translateY = Math.round(
    //   interpolate(startAnimated.value, [0, 1], [10, 0], Extrapolate.CLAMP),
    // );
    return {
      opacity: interpolate(
        startAnimated.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP,
      ),
      // transform: [{translateY}],
    };
  }, [startAnimated.value]);

  return (
    <Container>
      <Content>
        <Header>
          <Lottie
            style={{height: width * 0.6}}
            resizeMode="contain"
            source={welcomeLottie}
            autoPlay
            loop
          />
          <Title>QUIZEMON</Title>
        </Header>
        <SubTitle>
          "A essência do conhecimento consiste em aplicá-lo, uma vez possuído."
        </SubTitle>
        <Footer style={[buttonStyle]}>
          <Button
            text="Avançar"
            onPress={() => navigation.navigate('UserIdentification')}
          />
        </Footer>
      </Content>
    </Container>
  );
};

export default Welcome;
