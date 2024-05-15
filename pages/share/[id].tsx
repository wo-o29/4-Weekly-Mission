import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import * as Styled from '../../styles/Share.styled';
import { LinkType } from '../../types/type';
import { getFolderOwnerInfo, getFolderInfo, getLinkList } from '../../services/shareApi';
import { shareKey } from '../../services/queryKey';

function Share() {
  const router = useRouter();
  const { id } = router.query;

  const { data: folderInfo } = useQuery({
    queryKey: shareKey.folderInfo(id),
    queryFn: ({ queryKey }) => getFolderInfo(queryKey[1]),
    enabled: !!id
  });

  const { data: folderOwnerInfo } = useQuery({
    queryKey: shareKey.folderOwnerInfo(folderInfo?.user_id),
    queryFn: ({ queryKey }) => getFolderOwnerInfo(queryKey[1]),
    enabled: !!folderInfo?.user_id
  });

  const { data: linkList } = useQuery({
    queryKey: shareKey.linkList(id),
    queryFn: ({ queryKey }) => getLinkList(queryKey[1]),
    enabled: !!id
  });

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
        <Content linkList={linkList} option={false} />
      </Styled.Share>
      <Footer />
    </>
  );
}

export default Share;
