import { useQuery } from '@tanstack/react-query';
import { userKey } from '../services/queryKey';
import { getUserInfo } from '../services/userApi';

export const useUserInfo = () => {
  const { data } = useQuery({
    queryKey: userKey.userInfo,
    queryFn: getUserInfo
  });

  return data;
};
