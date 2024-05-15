export const shareKey = {
  folderOwnerInfo: (userId: number) => ['folderOwnerInfo', userId] as const,
  folderInfo: (id: any) => ['folderInfo', id] as const,
  linkList: (id: any) => ['linkList', id] as const
};

export const userKey = {
  userInfo: ['userInfo'] as const
};

export const folderKey = {
  allLink: ['allLink'] as const,
  categoryLoad: ['categoryLoad'] as const,
  selectLinkLoad: (id: any) => [...folderKey.categoryLoad, id] as const
};
