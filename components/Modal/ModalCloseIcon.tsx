import * as Styled from './Modal.styled';

const ModalCloseIcon = '/icon/modal-close.svg';

interface ModalCloseButtonType {
  onClick: () => void;
}

function ModalCloseButton({ onClick }: ModalCloseButtonType) {
  return <Styled.ModalCloseIcon onClick={onClick} src={ModalCloseIcon} alt="모달 닫기 아이콘" />;
}

export default ModalCloseButton;
