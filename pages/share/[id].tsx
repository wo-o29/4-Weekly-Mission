import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import * as Styled from '../../styles/Share.styled';
import { LinkType } from '../../types/type';
import authCheck from '../../utils/authCheck';
import { getFolderOwnerInfo, getFolderInfo, getLinkList } from '../../services/shareApi';
import { folderKey } from '../../services/queryKey';

function Share() {
  const [_, setLinkList] = useState<LinkType[]>([]);
  const router = useRouter();
  const { id } = router.query;

  const { data: folderInfo } = useQuery({
    queryKey: folderKey.folderInfo(id),
    queryFn: ({ queryKey }) => getFolderInfo(queryKey[1]),
    staleTime: 1 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    enabled: !!id
  });

  const { data: folderOwnerInfo } = useQuery({
    queryKey: folderKey.folderOwnerInfo(folderInfo?.user_id),
    queryFn: ({ queryKey }) => getFolderOwnerInfo(queryKey[1]),
    staleTime: 1 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    enabled: !!folderInfo?.user_id
  });

  const { data: linkList } = useQuery({
    queryKey: folderKey.linkList(id),
    queryFn: ({ queryKey }) => getLinkList(queryKey[1]),
    staleTime: 1 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    enabled: !!id
  });

  useEffect(() => {
    authCheck(router);
  }, []);

  return (
    <>
      <Head>
        <title>share | Linkbrary</title>
      </Head>
      <Header />
      <Styled.Share>
        <Styled.Profile>
          <Styled.ProfileBox>
            <Styled.ProfileImg src={folderOwnerInfo?.image_source} alt="유저 프로필 이미지" />
            <Styled.ProfileNickname>{folderOwnerInfo?.name}</Styled.ProfileNickname>
            <Styled.ProfileBookmark>{folderInfo?.name}</Styled.ProfileBookmark>
          </Styled.ProfileBox>
        </Styled.Profile>
        <Content linkList={linkList} option={false} setLinkList={setLinkList} />
      </Styled.Share>
      <Footer />
    </>
  );
}

export default Share;
