export const folderKey = {
  folderOwnerInfo: (userId: number) => ['folderOwnerInfo', userId] as const,
  folderInfo: (id: any) => ['folderInfo', id] as const,
  linkList: (id: any) => ['linkList', id] as const
};

export const userKey = {
  userInfo: ['userInfo'] as const
};
