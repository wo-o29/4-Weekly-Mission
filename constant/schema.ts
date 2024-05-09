import { z } from 'zod';
import AUTH_TEXT from './authText';

export const LoginSchema = z.object({
  [AUTH_TEXT.TYPE_EMAIL]: z.string().nonempty('이메일을 입력해 주세요!').email('올바른 이메일 주소가 아닙니다!'),
  [AUTH_TEXT.TYPE_PASSWORD]: z
    .string()
    .nonempty('비밀번호를 입력해 주세요!')
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요!')
});

export const RegisterSchema = z
  .object({
    [AUTH_TEXT.TYPE_EMAIL]: z.string().nonempty('이메일을 입력해 주세요!').email('올바른 이메일 주소가 아닙니다!'),
    [AUTH_TEXT.TYPE_PASSWORD]: z
      .string()
      .nonempty('비밀번호를 입력해 주세요!')
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요!'),
    [AUTH_TEXT.PASSWORD_CONFIRM]: z
      .string()
      .nonempty('비밀번호를 입력해 주세요!')
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요!')
      .optional()
  })
  .refine((data) => data[AUTH_TEXT.TYPE_PASSWORD] === data[AUTH_TEXT.PASSWORD_CONFIRM], {
    path: [AUTH_TEXT.PASSWORD_CONFIRM],
    message: '비밀번호가 일치하지 않습니다!'
  });
