import { useMutation } from '@tanstack/react-query';
import { register, login } from '../services/authApi';
import { userInfoType } from '../types/type';

export const useAuthMutation = (isRegister: boolean) => {
  const { mutate, isPending } = useMutation({
    mutationFn: (userInfo: userInfoType) => (isRegister ? register(userInfo) : login(userInfo))
  });

  return { mutate, isPending };
};
