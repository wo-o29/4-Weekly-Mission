import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as Styled from './Modal.styled';
import { addFolder, renameFolder } from '../../services/modalApi';
import { folderKey } from '../../services/queryKey';

interface ModalFormType {
  buttonText: string;
  modalAction?: any;
  setModalAction: any;
}

function ModalForm({ modalAction, buttonText, setModalAction }: ModalFormType) {
  const [inputValue, setInputValue] = useState(modalAction.subTitle ?? '');
  const queryClient = useQueryClient();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const formMutation = useMutation({
    mutationFn: () => (buttonText === '변경하기' ? renameFolder(modalAction.id, inputValue) : addFolder(inputValue)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: folderKey.categoryLoad });
      setModalAction({
        isView: false,
        action: '',
        subTitle: '',
        url: ''
      });
    }
  });

  const handleFormSumbit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    formMutation.mutate();
  };

  return (
    <form className="modal__form">
      <Styled.ModalLabel htmlFor="modal--input">{`폴더 ${buttonText} 입력창`}</Styled.ModalLabel>
      <Styled.ModalInput
        value={inputValue}
        onChange={handleInputChange}
        id="modal--input"
        type="text"
        placeholder="내용 입력"
      />
      <Styled.ModalButtonBlue onClick={handleFormSumbit}>{buttonText}</Styled.ModalButtonBlue>
    </form>
  );
}

export default ModalForm;
