import React, {useCallback, useEffect} from 'react';
import Lottie from 'lottie-react-native';
import {Container, LottieView} from './styles';
import loadingLottie from '../../assets/lottie/loading-full.json';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Text} from 'react-native';

interface LoadingFullProps {
  loading?: boolean;
}

const LoadingFull = ({loading = false}: LoadingFullProps) => {
  const startAnimated = useSharedValue(0);
  const startAnimation = useCallback(() => {
    startAnimated.value = 0;
    startAnimated.value = withTiming(1, {
      duration: 1000,
      easing: Easing.ease,
    });
  }, [startAnimated]);

  const loadingToggleStyles = useAnimatedStyle(() => {
    const translateY = Math.round(
      interpolate(startAnimated.value, [0, 1], [400, 0], Extrapolate.CLAMP),
    );
    return {
      transform: [{translateY}],
    };
  }, [startAnimated.value]);

  useEffect(() => {
    if (loading) {
      startAnimation();
    }
  }, [startAnimation, loading]);

  if (!loading) {
    return null;
  }

  return (
    <Container>
      <Animated.View style={[loadingToggleStyles]}>
        <LottieView>
          <Text>{'  '}</Text>
          <Lottie resizeMode="contain" source={loadingLottie} autoPlay loop />
        </LottieView>
      </Animated.View>
    </Container>
  );
};

export default LoadingFull;
