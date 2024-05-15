import React, { useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import ModalCloseButton from './ModalCloseIcon';
import ModalShareList from './ModalShareList';
import ModalFolderAdd from './ModalFolderAdd';
import ModalTitle from './ModalTitle';
import ModalForm from './ModalForm';
import * as Styled from './Modal.styled';
import MODAL_ACTION_SCRIPT from '../../constant/modalActionScript';
import { ModalActionType, CategoryType } from '../../types/type';
import { deleteLink, deleteFolder } from '../../services/modalApi';
import { folderKey } from '../../services/queryKey';

interface ModalType {
  modalAction: ModalActionType;
  setModalAction: React.Dispatch<React.SetStateAction<ModalActionType>>;
  categoryList: CategoryType[];
  refetch?: any;
}

function Modal({ modalAction, setModalAction, categoryList, refetch }: ModalType) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const categoryListLoop: CategoryType[] = categoryList.slice(1); // 전체 카테고리는 제외
  const isSubTitleView: boolean = modalAction.subTitle !== '' && modalAction.action !== MODAL_ACTION_SCRIPT.FOLDER_EDIT;
  const payloadId = modalAction.id ?? 0;

  const deleteMutation = useMutation({
    mutationFn: () => (modalAction.action === '링크 삭제' ? deleteLink(payloadId) : deleteFolder(payloadId)),
    onSuccess: () => {
      if (modalAction.action === '링크 삭제') {
        refetch();
      } else {
        queryClient.invalidateQueries({ queryKey: folderKey.categoryLoad });
        router.push('/folder');
      }
      setModalAction({
        isView: false,
        action: '',
        subTitle: '',
        url: ''
      });
    }
  });

  const actionScript: { [key: string]: JSX.Element } = {
    [MODAL_ACTION_SCRIPT.FOLDER_EDIT]: (
      <ModalForm setModalAction={setModalAction} modalAction={modalAction} buttonText="변경하기" />
    ),
    [MODAL_ACTION_SCRIPT.FOLDER_ADD]: <ModalForm setModalAction={setModalAction} buttonText="추가하기" />,
    [MODAL_ACTION_SCRIPT.FOLDER_SHARE]: <ModalShareList modalAction={modalAction} />,
    [MODAL_ACTION_SCRIPT.FOLDER_ADD_LINK]: (
      <ModalFolderAdd
        refetch={refetch}
        modalAction={modalAction}
        categoryListLoop={categoryListLoop}
        setModalAction={setModalAction}
      />
    ),
    [MODAL_ACTION_SCRIPT.LINK_DELETE]: (
      <Styled.ModalButtonRed onClick={() => deleteMutation.mutate()}>삭제하기</Styled.ModalButtonRed>
    ),
    [MODAL_ACTION_SCRIPT.FOLDER_DELETE]: (
      <Styled.ModalButtonRed onClick={() => deleteMutation.mutate()}>삭제하기</Styled.ModalButtonRed>
    )
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
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.removeChild(script);
      document.body.style.overflow = 'none';
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
