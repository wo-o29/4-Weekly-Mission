import { REGEXP_EMAIL, REGEXP_PASSWORD } from './regExp';
import AUTH_TEXT from '../constant/authText';

const validateUserInput = (name: string, inputValue: string): boolean => {
  if (name === AUTH_TEXT.TYPE_EMAIL) {
    return !REGEXP_EMAIL.test(inputValue);
  }
  return !REGEXP_PASSWORD.test(inputValue);
};

export default validateUserInput;
