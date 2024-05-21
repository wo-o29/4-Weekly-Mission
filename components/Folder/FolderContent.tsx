import { useState, useEffect, FormEvent, ChangeEvent, MouseEvent, useRef } from 'react';
import { useRouter } from 'next/router';
import Content from '../Content/Content';
import * as Styled from './Folder.styled';
import { LinkType, CategoryType, SelectCategoryType } from '../../types/type';

const linkIcon = '/icon/link.svg';

interface FolderContentPropsType {
  linkList: LinkType[];
  handleKebabClick: (id: number) => void;
  selectCardId: number;
  categoryList: CategoryType[];
  handleModalAction: (action: string, subTitle?: string, url?: string) => void;
}

function FolderContent({
  linkList,
  handleKebabClick,
  selectCardId,
  categoryList,
  handleModalAction
}: FolderContentPropsType) {
  const router = useRouter();
  const [selectCategory, setSelectCategory] = useState<SelectCategoryType>({
    // 현재 선택중인 카테고리
    id: 0,
    name: '전체'
  });
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const handleSelectCategory = (categoryId: number, name: string): void => {
    setSelectCategory({
      id: categoryId,
      name
    });
  };

  const getClickArea = (e: MouseEvent<HTMLElement>): void => {
    if ((e.target as HTMLElement).className !== 'content__kebab') {
      handleKebabClick(0);
    }
  };

  const handleSearchFromSumbit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!searchInputValue) {
      alert('링크를 입력해 주세요!');
      return;
    }
    handleModalAction('폴더에 추가', undefined, searchInputValue);
    setSearchInputValue('');
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchInputValue(e.target.value);
  };

  const contentProps = {
    categoryList,
    selectCategory,
    handleSelectCategory,
    handleKebabClick,
    selectCardId,
    linkList,
    option: true,
    handleModalAction
  };

  return (
    <Styled.Folder onClick={(e) => getClickArea(e)}>
      <Styled.Link>
        <Styled.LinkBox>
          <form onSubmit={handleSearchFromSumbit}>
            <Styled.Label htmlFor="link--add">링크 추가</Styled.Label>
            <Styled.LinkInput
              id="link--add"
              onChange={(e) => handleSearchInputChange(e)}
              value={searchInputValue}
              type="text"
              placeholder="      링크를 추가해 보세요"
              $icon={linkIcon}
            />
            <Styled.LinkAddButton>추가하기</Styled.LinkAddButton>
          </form>
        </Styled.LinkBox>
      </Styled.Link>
      <Content {...contentProps} />
    </Styled.Folder>
  );
}
export default FolderContent;
