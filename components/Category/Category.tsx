import Link from 'next/link';
import { useRouter } from 'next/router';
import * as Styled from './Category.styled';
import { SelectCategoryType, CategoryType } from '../../types/type';

const AddIcon = '/icon/category-add.svg';
const ShareIcon = '/icon/category-share.svg';
const ModifyIcon = '/icon/category-modify.svg';
const DeleteIcon = '/icon/category-delete.svg';

interface CategoryControlListType {
  img: string;
  actionText: string;
  text: string;
}

const categoryControlList: CategoryControlListType[] = [
  {
    img: ShareIcon,
    actionText: '폴더 공유',
    text: '공유'
  },
  {
    img: ModifyIcon,
    actionText: '폴더 이름 변경',
    text: '수정'
  },
  {
    img: DeleteIcon,
    actionText: '폴더 삭제',
    text: '삭제'
  }
];

interface CategoryPropsType {
  categoryList?: CategoryType[];
  selectCategory?: SelectCategoryType;
  handleSelectCategory?: (id: number, name: string) => void;
  handleModalAction?: (action: string, subTitle?: string, url?: string, id?: number) => void;
}

function Category({ categoryList, selectCategory, handleSelectCategory, handleModalAction }: CategoryPropsType) {
  const router = useRouter();
  const { id } = router.query;

  if (!categoryList || !selectCategory || !handleSelectCategory || !handleModalAction) {
    return null;
  }

  const isControlVisible: boolean = selectCategory.name !== '전체';

  return (
    <>
      <Styled.Category>
        <Styled.CategoryBox>
          {categoryList.map((category) => {
            let isSelect = false;
            if (id) {
              isSelect = +id === category.id;
            } else {
              isSelect = category.id === 0;
            }
            const url = category.id === 0 ? '/folder' : `/folder/${category.id}`;

            return (
              <Link href={url} key={category.id}>
                <Styled.CategoryList
                  $isSelect={isSelect}
                  onClick={() => handleSelectCategory(category.id, category.name)}
                >
                  {category.name}
                </Styled.CategoryList>
              </Link>
            );
          })}
        </Styled.CategoryBox>
        <Styled.CategoryAddButton onClick={() => handleModalAction('폴더 추가')}>
          <Styled.CategoryAddText>폴더 추가</Styled.CategoryAddText>
          <Styled.CategoryAddImg width={16} height={16} src={AddIcon} alt="폴더 추가 아이콘" />
        </Styled.CategoryAddButton>
      </Styled.Category>

      <Styled.CategoryTitleBox>
        <Styled.CategoryTitle>{selectCategory.name}</Styled.CategoryTitle>
        {isControlVisible && (
          <Styled.CategoryControlList>
            {categoryControlList.map((list, idx) => (
              <li
                key={idx}
                onClick={() => {
                  const url = `${window.location.origin}/shared/${selectCategory.id}`;
                  handleModalAction(list.actionText, selectCategory.name, url, selectCategory.id);
                }}
              >
                <Styled.CategoryControlImg width={18} height={18} src={list.img} alt={`${list.text} 이미지`} />
                <Styled.CategoryControlText>{list.text}</Styled.CategoryControlText>
              </li>
            ))}
          </Styled.CategoryControlList>
        )}
      </Styled.CategoryTitleBox>
    </>
  );
}

export default Category;
