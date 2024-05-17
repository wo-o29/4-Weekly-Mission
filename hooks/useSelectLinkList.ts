import { useQuery } from '@tanstack/react-query';
import { folderKey } from '../services/queryKey';
import { selectLinkLoad } from '../services/folderApi';

export const useSelectLinkList = (id: number) => {
  const { data, refetch } = useQuery({
    queryKey: folderKey.selectLinkLoad(id),
    queryFn: () => selectLinkLoad(id),
    enabled: !!id
  });

  return { data, refetch };
};
