import React, { useEffect } from 'react';
import ModalCloseButton from './ModalCloseIcon';
import ModalShareList from './ModalShareList';
import ModalFolderAdd from './ModalFolderAdd';
import ModalTitle from './ModalTitle';
import ModalForm from './ModalForm';
import * as Styled from './Modal.styled';
import MODAL_ACTION_SCRIPT from '../../constant/modalActionScript';
import { ModalActionType, CategoryType } from '../../types/type';

interface ModalType {
  modalAction: ModalActionType;
  setModalAction: React.Dispatch<React.SetStateAction<ModalActionType>>;
  categoryList: CategoryType[];
}

function Modal({ modalAction, setModalAction, categoryList }: ModalType) {
  const categoryListLoop: CategoryType[] = categoryList.slice(1); // 전체 카테고리는 제외
  const isSubTitleView: boolean = modalAction.subTitle !== '' && modalAction.action !== MODAL_ACTION_SCRIPT.FOLDER_EDIT;
  const actionScript: { [key: string]: JSX.Element } = {
    [MODAL_ACTION_SCRIPT.FOLDER_EDIT]: <ModalForm buttonText="변경하기" />,
    [MODAL_ACTION_SCRIPT.FOLDER_ADD]: <ModalForm buttonText="추가하기" />,
    [MODAL_ACTION_SCRIPT.FOLDER_SHARE]: <ModalShareList modalAction={modalAction} />,
    [MODAL_ACTION_SCRIPT.FOLDER_ADD_LINK]: <ModalFolderAdd categoryListLoop={categoryListLoop} />,
    [MODAL_ACTION_SCRIPT.LINK_DELETE]: <Styled.ModalButtonRed>삭제하기</Styled.ModalButtonRed>,
    [MODAL_ACTION_SCRIPT.FOLDER_DELETE]: <Styled.ModalButtonRed>삭제하기</Styled.ModalButtonRed>
  };

  const handleModalClose = () => {
    setModalAction({
      isView: false,
      action: '',
      subTitle: '',
      url: ''
    });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });

  return (
    <Styled.ModalBox>
      <Styled.Modal>
        <ModalCloseButton onClick={handleModalClose} />
        <ModalTitle title={modalAction.action} />
        {isSubTitleView && <Styled.ModalSubTitle>{modalAction.subTitle}</Styled.ModalSubTitle>}
        {actionScript[modalAction.action]}
      </Styled.Modal>
    </Styled.ModalBox>
  );
}

export default Modal;
