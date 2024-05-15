import { MouseEvent } from 'react';
import getTimeDiff from '../../utils/getTimeDiff';
import getCoustomDate from '../../utils/getCoustomDate';
import * as Styled from './CardList.styled';
import { LinkType } from '../../types/type';

const StarIcon = '/icon/star.svg';
const KebabIcon = '/icon/kebab.svg';
const CardDefaultIcon = '/icon/default-card.svg';

interface CardListPropsType {
  handleKebabClick?: (id: number) => void;
  selectCardId?: number;
  linkList: LinkType[];
  option: boolean;
  handleModalAction?: (action: string, subTitle?: string, url?: string, id?: number) => void;
}

function CardList({ handleKebabClick, selectCardId, linkList, option, handleModalAction }: CardListPropsType) {
  const handleKebabModalAction = (
    actionParams: { action: string; subTitle: string; id: number },
    e: MouseEvent<HTMLLIElement>
  ) => {
    const { action, subTitle, id } = actionParams;
    if (handleModalAction) {
      e.preventDefault();
      handleModalAction(action, subTitle, subTitle, id);
    }
  };

  const handleKebabIconClick = (e: MouseEvent<HTMLImageElement>, id: number) => {
    if (handleKebabClick) {
      e.preventDefault();
      handleKebabClick(id);
    }
  };

  if (!linkList?.length) {
    return (
      <Styled.CardBox>
        <Styled.CardListEmpty>저장된 링크가 없습니다</Styled.CardListEmpty>
      </Styled.CardBox>
    );
  }
  return (
    <Styled.CardBox>
      {linkList.map((link) => {
        const { id, createdAt, created_at, imageSource, image_source, description, url } = link;
        const imgSrc: string = imageSource ?? image_source ?? '';
        const linkCreated: string = createdAt ?? created_at ?? '';
        const createDate: Date = new Date(linkCreated);
        const timeDiffText: string = getTimeDiff(linkCreated);
        const coustomDate: string = getCoustomDate(createDate);
        return (
          <Styled.Card key={id} href={url}>
            {option && <Styled.StarIcon width={34} height={34} src={StarIcon} alt="별 아이콘" />}
            <Styled.CardImgBox $imgSrc={imgSrc} $icon={CardDefaultIcon}>
              <Styled.CardImg width={340} height={253} src={imgSrc} alt="카드 이미지" />
            </Styled.CardImgBox>
            <Styled.CardInfo>
              {option ? (
                <Styled.CardInfoHeader>
                  <Styled.CardTimeDiff>{timeDiffText}</Styled.CardTimeDiff>
                  <img
                    onClick={(e) => handleKebabIconClick(e, id)}
                    className="content__kebab"
                    src={KebabIcon}
                    alt="케밥 아이콘"
                  />
                  {selectCardId === id && (
                    <Styled.KebabListBox>
                      <Styled.KebabList
                        onClick={(e) => handleKebabModalAction({ action: '링크 삭제', subTitle: url, id }, e)}
                      >
                        삭제하기
                      </Styled.KebabList>
                      <Styled.KebabList
                        onClick={(e) => handleKebabModalAction({ action: '폴더에 추가', subTitle: url, id }, e)}
                      >
                        폴더에 추가
                      </Styled.KebabList>
                    </Styled.KebabListBox>
                  )}
                </Styled.CardInfoHeader>
              ) : (
                <Styled.CardTimeDiff>{timeDiffText}</Styled.CardTimeDiff>
              )}
              <Styled.CardText>{description}</Styled.CardText>
              <Styled.CardDate>{coustomDate}</Styled.CardDate>
            </Styled.CardInfo>
          </Styled.Card>
        );
      })}
    </Styled.CardBox>
  );
}

export default CardList;
