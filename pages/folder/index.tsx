import { useState } from 'react';
import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import Header from '../../components/Header/Header';
import FolderContent from '../../components/Folder/FolderContent';
import Footer from '../../components/Footer/Footer';
import FloatingButton from '../../components/Folder/FloatingButton';
import Modal from '../../components/Modal/Modal';
import { LinkType, CategoryType, ModalActionType } from '../../types/type';
import { userCategoryLoad, allLinkLoad } from '../../services/folderApi';
import { folderKey } from '../../services/queryKey';

let prevId = 999;

function Folder() {
  const [selectCardId, setSelectCardId] = useState<number>(0);
  const [modalAction, setModalAction] = useState<ModalActionType>({
    isView: false,
    action: '',
    subTitle: '',
    url: ''
  });

  const { data: categoryList } = useQuery({
    queryKey: folderKey.categoryLoad,
    queryFn: userCategoryLoad,
    staleTime: 1 * 60 * 1000,
    gcTime: 5 * 60 * 1000
  });

  const { data: linkList } = useQuery({
    queryKey: folderKey.allLink,
    queryFn: allLinkLoad,
    staleTime: 1 * 60 * 1000,
    gcTime: 5 * 60 * 1000
  });

  const handleKebabClick = (id: number): void => {
    if (prevId !== id) {
      setSelectCardId(id);
      prevId = id;
      return;
    }
    setSelectCardId(0);
    prevId = 999;
  };

  const handleModalAction = (action: string, subTitle?: string, url?: string, selectId?: number): void => {
    setModalAction({
      isView: true,
      action,
      subTitle,
      url,
      id: selectId
    });
  };

  const folderContentProps: {
    linkList: LinkType[];
    handleKebabClick: (id: number) => void;
    selectCardId: number;
    categoryList: CategoryType[];
    handleModalAction: (action: string, subTitle?: string, url?: string) => void;
  } = {
    linkList,
    handleKebabClick,
    selectCardId,
    categoryList,
    handleModalAction
  };

  return (
    <>
      <Head>
        <title>folder | Linkbrary</title>
      </Head>
      <Header isSticky={false} />
      <FolderContent {...folderContentProps} />
      <Footer />
      <FloatingButton />
      {modalAction.isView && (
        <Modal modalAction={modalAction} setModalAction={setModalAction} categoryList={categoryList} />
      )}
    </>
  );
}

export default Folder;
