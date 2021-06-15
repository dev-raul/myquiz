import React, {memo} from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';

import {Container, TextButton} from './styles';
interface ButtonProps extends RectButtonProps {
  children?: React.ReactNode;
  text: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconAlign?: 'left' | 'right';
}
const Button = ({
  text,
  textColor,
  disabled = false,
  backgroundColor,
  icon,
  iconAlign = 'left',
  children,
  ...props
}: ButtonProps) => {
  return (
    <Container disabled={disabled} backgroundColor={backgroundColor} {...props}>
      {children ? (
        children
      ) : (
        <>
          {icon && iconAlign === 'left' && icon}
          <TextButton textColor={textColor}>{text}</TextButton>
          {icon && iconAlign === 'right' && icon}
        </>
      )}
    </Container>
  );
};

export default memo(Button);
