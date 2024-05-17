import { useQuery } from '@tanstack/react-query';
import { folderKey } from '../services/queryKey';
import { userCategoryLoad } from '../services/folderApi';

export const useCategoryList = () => {
  const { data } = useQuery({
    queryKey: folderKey.categoryLoad,
    queryFn: userCategoryLoad
  });

  return data;
};
