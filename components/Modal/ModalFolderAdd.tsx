import { useState, MouseEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import * as Styled from './Modal.styled';
import { addLink } from '../../services/modalApi';

interface CategoryType {
  created_at?: string;
  favorite?: boolean;
  id: number;
  link_count: number;
  name: string;
}

interface ModalActionType {
  isView?: boolean;
  action: string;
  subTitle?: string;
  url?: string;
}

interface ModalFolderAddType {
  setModalAction: React.Dispatch<React.SetStateAction<ModalActionType>>;
  modalAction: ModalActionType;
  categoryListLoop: CategoryType[];
  refetch: any;
}

function ModalFolderAdd({ setModalAction, modalAction, categoryListLoop, refetch }: ModalFolderAddType) {
  const [selectCategoryId, setSelectCategoryId] = useState<number>(0);
  const router = useRouter();

  const addLinkMutation = useMutation({
    mutationFn: () =>
      addLink({
        url: modalAction.url ?? '',
        folderId: selectCategoryId
      }),
    onSuccess: () => {
      refetch();
      setModalAction({
        isView: false,
        action: '',
        subTitle: '',
        url: ''
      });
      router.push(`/folder/${selectCategoryId}`);
    }
  });

  const handleSelectCategory = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    if (target.dataset.id) {
      setSelectCategoryId(+target.dataset.id);
    }
  };

  return (
    <>
      <Styled.ModalCategory>
        {categoryListLoop.map((category) => {
          const { id, name, link_count } = category;
          const isSelect = +selectCategoryId === id;
          return (
            <Styled.ModalCategoryList onClick={handleSelectCategory} key={id} data-id={id} $isSelect={isSelect}>
              {name}
              <Styled.ModalCategoryCount data-id={id}>{`${link_count}개 링크`}</Styled.ModalCategoryCount>
              {isSelect && (
                <Styled.ModalCategorySelectImg width={14} height={14} src="/icon/modal-check.svg" alt="체크 아이콘" />
              )}
            </Styled.ModalCategoryList>
          );
        })}
      </Styled.ModalCategory>
      <Styled.ModalButtonBlue disabled={addLinkMutation.isPending} onClick={() => addLinkMutation.mutate()}>
        추가하기
      </Styled.ModalButtonBlue>
    </>
  );
}

export default ModalFolderAdd;
