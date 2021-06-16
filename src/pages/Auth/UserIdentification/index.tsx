import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useEffect, useState} from 'react';
import {Keyboard, Platform, TouchableWithoutFeedback} from 'react-native';
import {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Button from '../../../components/Button';
import LoadingFull from '../../../components/LoadingFull';
import {
  Container,
  KeyboardAvoidingView,
  Content,
  Form,
  FormHeader,
  FormBody,
  FooterForm,
  Title,
  Emoji,
  Input,
  Error,
  ErrorText,
} from './styles';

const UserIdentification = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>();
  const [error, setError] = useState<string>();
  const [isFocused, setIsFocused] = useState(false);

  const startAnimated = useSharedValue(0);

  useEffect(() => {
    startAnimated.value = withTiming(1, {
      duration: 700,
      easing: Easing.ease,
    });
  }, [startAnimated]);

  const headerFormStyle = useAnimatedStyle(() => {
    const translateY = Math.round(
      interpolate(startAnimated.value, [0, 1], [-20, 0], Extrapolate.CLAMP),
    );
    return {
      opacity: interpolate(
        startAnimated.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP,
      ),
      transform: [{translateY}],
    };
  }, [startAnimated.value]);
  const footerStyle = useAnimatedStyle(() => {
    const translateY = Math.round(
      interpolate(startAnimated.value, [0, 1], [20, 0], Extrapolate.CLAMP),
    );
    return {
      opacity: interpolate(
        startAnimated.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP,
      ),
      transform: [{translateY}],
    };
  }, [startAnimated.value]);

  const handleInputBlur = useCallback(() => {
    if (!name) {
      setIsFocused(false);
    }
  }, [name]);
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleConfirmar = useCallback(() => {
    if (!name) {
      setError('O nickname é obrigatório!');
      return;
    }
    navigation.navigate('UserBirthDay');
  }, [name, navigation]);

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <LoadingFull />
            <Form>
              <FormHeader style={[headerFormStyle]}>
                <Emoji> {name ? '😄️' : '😃️'} </Emoji>
                <Title>Digite seu nickname?</Title>
              </FormHeader>
              <FormBody>
                <Input
                  // placeholder="nickname"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  isFocused={isFocused}
                  isValue={!!name}
                  onChangeText={text => {
                    if (error && text) {
                      setError('');
                    }
                    setName(text);
                  }}
                />
                {!!error && (
                  <Error>
                    <ErrorText>⚠️ {error}</ErrorText>
                  </Error>
                )}
              </FormBody>
              <FooterForm style={[footerStyle]}>
                <Button
                  disabled={!name}
                  onPress={handleConfirmar}
                  text="Verificar"
                />
              </FooterForm>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
};
export default UserIdentification;
