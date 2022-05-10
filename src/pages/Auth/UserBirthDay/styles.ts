import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`;
export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background-color: ${({theme}) => theme.colors.background};
  padding: 0px 50px;
`;
export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${({theme}) => theme.colors.heading};
  margin-top: 20px;
  font-family: ${({theme}) => theme.fonts.heading};
  line-height: 32px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const FormHeader = styled(Animated.View)`
  width: 100%;
  align-items: center;
`;
export const FormBody = styled(Animated.View)`
  width: 100%;
  align-items: center;
`;
export const FooterForm = styled(Animated.View)`
  width: 100%;
  margin-top: 40px;
  padding: 0px 20px;
`;
export const Emoji = styled.Text`
  font-size: 44px;
`;
interface BirthDayProps {
  isFocused?: boolean;
  isValue?: boolean;
}
export const BirthDay = styled.TouchableOpacity<BirthDayProps>`
  border-bottom-width: 1.5px;
  border-bottom-color: ${({isFocused, isValue, theme}) =>
    isFocused || isValue ? theme.colors.primary : theme.colors.gray};
  color: ${({theme}) => theme.colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`;

export const BirthDayText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${({theme}) => theme.colors.heading};
`;

export const Error = styled.View`
  margin-top: 10px;
`;
export const ErrorText = styled.Text`
  color: ${({theme}) => theme.colors.red};
`;
