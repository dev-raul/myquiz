import {dark} from './dark';
import {light} from './light';
export interface FontInterface {
  logoTitle: string;
  heading: string;
  text: string;
  complements: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      green: string;
      green_dark: string;
      green_light: string;

      heading: string;
      body_dark: string;
      body_light: string;

      background: string;
      shape: string;
      white: string;
      gray: string;

      blue: string;
      blue_light: string;

      red: string;
    };
    fonts: FontInterface;
  }
}
export {light, dark};
