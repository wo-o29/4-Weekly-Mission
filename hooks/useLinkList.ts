import { useQuery } from '@tanstack/react-query';
import { folderKey } from '../services/queryKey';
import { allLinkLoad } from '../services/folderApi';

export const useLinkList = () => {
  const { data } = useQuery({
    queryKey: folderKey.allLink,
    queryFn: allLinkLoad
  });

  return data;
};
