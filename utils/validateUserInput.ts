import { REGEXP_EMAIL, REGEXP_PASSWORD } from './regExp';

const EMAIL = '이메일';

const validateUserInput = (labelText: string, inputValue: string): boolean => {
  if (labelText === EMAIL) {
    return !REGEXP_EMAIL.test(inputValue);
  }
  return !REGEXP_PASSWORD.test(inputValue);
};

export default validateUserInput;
