import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import Head from 'next/head';
import Header from '../../../components/Header/Header';
import FolderContent from '../../../components/Folder/FolderContent';
import Footer from '../../../components/Footer/Footer';
import FloatingButton from '../../../components/Folder/FloatingButton';
import Modal from '../../../components/Modal/Modal';
import { LinkType, CategoryType, ModalActionType } from '../../../types/type';
import { useCategoryList } from '../../../hooks/useCategoryList';
import { useSelectLinkList } from '../../../hooks/useSelectLinkList';

function Folder() {
  const router = useRouter();
  const { id } = router.query;
  const [selectCardId, setSelectCardId] = useState<number>(0);
  const [modalAction, setModalAction] = useState<ModalActionType>({
    isView: false,
    action: '',
    subTitle: '',
    url: ''
  });
  const prevId = useRef(999);

  const categoryList = useCategoryList();
  const { data: linkList, refetch } = useSelectLinkList(Number(id));

  const handleKebabClick = (cardId: number): void => {
    if (prevId.current !== cardId) {
      setSelectCardId(cardId);
      prevId.current = cardId;
      return;
    }
    setSelectCardId(0);
    prevId.current = 999;
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
        <Modal
          refetch={refetch}
          modalAction={modalAction}
          setModalAction={setModalAction}
          categoryList={categoryList}
        />
      )}
    </>
  );
}

export default Folder;
