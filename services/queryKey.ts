const QUERY_KEY = {
  userInfo: ['userInfo'],
  folderOwnerInfo: (userId: number) => ['folderOwnerInfo', userId],
  folderInfo: (id: any) => ['folderInfo', id],
  linkList: (id: any) => ['linkList', id]
};

export default QUERY_KEY;
