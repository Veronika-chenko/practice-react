import { trackInfo } from 'track.js';
import {
  CardWrap,
  BlurCardInnerWrap,
  ContentWrap,
  InnerCircle,
  CardAuthorName,
  CardSongTitle,
  CardInfoList,
  CardInfoItem,
  CardInfoTitle,
  CardInfoText,
  CardInput,
  Container,
  InputTiming,
} from './MusicCard.styled.js';
// import musicImage from '../../music-card-img.jpg';

export const MusicCard = () => {
  const onChange = () => {};
  return (
    <Container>
      <CardWrap>
        <BlurCardInnerWrap>
          <ContentWrap>
            <CardAuthorName>АвторАвторАвтор</CardAuthorName>
            <CardSongTitle>Назва пісні Назва пісні Назва пісні</CardSongTitle>
            <InnerCircle></InnerCircle>
            <CardInput type="range" value={0} onChange={onChange} />
            <InputTiming>
              <div>0:00</div>
              <div>3:45</div>
            </InputTiming>
            <CardInfoList>
              {trackInfo.map(el => (
                <CardInfoItem key={Date.now}>
                  <CardInfoTitle>{el.name}</CardInfoTitle>
                  <CardInfoText>{el.count}</CardInfoText>
                </CardInfoItem>
              ))}
            </CardInfoList>
          </ContentWrap>
        </BlurCardInnerWrap>
      </CardWrap>
    </Container>
  );
};
