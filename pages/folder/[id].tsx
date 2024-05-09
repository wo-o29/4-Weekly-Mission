import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../../components/Header/Header';
import FolderContent from '../../components/Folder/FolderContent';
import Footer from '../../components/Footer/Footer';
import FloatingButton from '../../components/Folder/FloatingButton';
import Modal from '../../components/Modal/Modal';
import authCheck from '../../utils/authCheck';
import { LinkType, CategoryType, DefaultCategoryType, ModalActionType } from '../../types/type';
import { API_PATH } from '../../services/apiPath';

let prevId = 999;

const INITIAL_CATEGORY: DefaultCategoryType[] = [
  {
    id: 0,
    name: '전체',
    link: { count: 0 }
  }
];

function Folder() {
  const router = useRouter();
  const { id } = router.query;
  const [selectCardId, setSelectCardId] = useState<number>(0);
  const [linkList, setLinkList] = useState<LinkType[]>([]); // 유저가 가지고 있는 링크
  const [categoryList, setCategoryList] = useState<CategoryType[]>(INITIAL_CATEGORY); // 유저가 가지고 있는 카테고리
  const [modalAction, setModalAction] = useState<ModalActionType>({
    isView: false,
    action: '',
    subTitle: '',
    url: ''
  });

  useEffect(() => {
    authCheck(router);
  }, []);

  const idLinkLoad = async () => {
    try {
      const response = await fetch(API_PATH.CATEGORY_LINK + id);
      if (!response.ok) {
        throw new Error('카테고리 링크 로드 에러 발생');
      }
      const result = await response.json();
      setLinkList(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    idLinkLoad();
  }, [id]);

  const handleKebabClick = (id: number): void => {
    if (prevId !== id) {
      setSelectCardId(id);
      prevId = id;
      return;
    }
    setSelectCardId(0);
    prevId = 999;
  };

  const handleModalAction = (action: string, subTitle?: string, url?: string): void => {
    setModalAction({
      isView: true,
      action,
      subTitle,
      url
    });
  };

  const folderContentProps: {
    linkList: LinkType[];
    setLinkList: React.Dispatch<React.SetStateAction<LinkType[]>>;
    handleKebabClick: (id: number) => void;
    selectCardId: number;
    categoryList: CategoryType[];
    setCategoryList: React.Dispatch<React.SetStateAction<CategoryType[]>>;
    handleModalAction: (action: string, subTitle?: string, url?: string) => void;
  } = {
    linkList,
    setLinkList,
    handleKebabClick,
    selectCardId,
    categoryList,
    setCategoryList,
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
