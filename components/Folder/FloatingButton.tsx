import * as Styled from './FloatingButton.styled';

const FloatingAddIcon = '/icon/floating-add.svg';

function FloatingButton() {
  return (
    <Styled.FloatingButton>
      <Styled.FloatingButtonText>폴더 추가</Styled.FloatingButtonText>
      <Styled.FloatingButtonImg width={16} height={17} src={FloatingAddIcon} alt="플로팅 버튼 아이콘" />
    </Styled.FloatingButton>
  );
}

export default FloatingButton;
