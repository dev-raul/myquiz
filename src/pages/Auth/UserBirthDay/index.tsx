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
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../../../components/Button';
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
  BirthDay,
  Error,
  ErrorText,
  BirthDayText,
} from './styles';
import {format} from 'date-fns';

const UserBirthDay = () => {
  const [birthDay, setBirthDay] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(
    Platform.OS === 'ios' ? true : false,
  );

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

  const handleChangeTime = useCallback(
    (_, dateTime: Date | undefined) => {
      if (Platform.OS === 'android') {
        setShowDatePicker(oldState => !oldState);
      }
      if (dateTime) {
        setBirthDay(dateTime);
        setIsFocused(true);
      } else {
        setIsFocused(false);
      }
    },
    [setBirthDay],
  );

  const handleConfirmar = useCallback(() => {
    if (!birthDay) {
      setError('O nascimento é obrigatório!');
      return;
    }
  }, [birthDay]);

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <FormHeader style={[headerFormStyle]}>
                <Emoji> {birthDay ? '😄️' : '😃️'} </Emoji>
                <Title>Qual a data do seu nascimento?</Title>
              </FormHeader>
              <FormBody>
                {showDatePicker && (
                  <DateTimePicker
                    value={birthDay}
                    mode="datetime"
                    display="calendar"
                    onChange={handleChangeTime}
                    maximumDate={new Date()}
                  />
                )}

                {Platform.OS === 'android' && (
                  <BirthDay
                    isFocused={isFocused}
                    onPress={() => setShowDatePicker(oldState => !oldState)}>
                    <BirthDayText>
                      {isFocused && `${format(birthDay, 'dd/MM/yyyy')} `}
                    </BirthDayText>
                  </BirthDay>
                )}
                {!!error && (
                  <Error>
                    <ErrorText>⚠️ {error}</ErrorText>
                  </Error>
                )}
              </FormBody>
              <FooterForm style={[footerStyle]}>
                <Button
                  disabled={!birthDay}
                  onPress={handleConfirmar}
                  text="Confirmar"
                />
              </FooterForm>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
};
export default UserBirthDay;
