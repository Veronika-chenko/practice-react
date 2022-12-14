import musicImage from '../../music-card-img.jpg';
import styled from "styled-components";

// remove blur

export const Container = styled.div`
    padding-top: 40px;
`

export const CardWrap = styled.div`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 416px;
    
    border-radius: 24px;
    background: linear-gradient(rgba(163, 125, 240, 0.3), 
    rgba(163, 125, 240, 0.3)),
    url(${musicImage});
    /* background-image: url(${musicImage}); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 24px;
`

export const BlurCardInnerWrap = styled.div`
    height: 100%;
    --webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(5px);
    border-radius: 24px;
`

export const ContentWrap = styled.div`
    box-sizing: border-box;
    padding: 24px 12px 12px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 590px;
`

export const CardAuthorName = styled.p`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.019em;
    color: #fff;
    margin-bottom: 6px;
`

export const CardSongTitle = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.019em;
    color: #fff;
    margin-bottom: 56px;
`

export const InnerCircle = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 256px;
    height: 256px;
    border-radius: 50%;
    border: 6px solid #CCB6CF;
    background-image: url(${musicImage});
    background-position: center;
    background-position: 50% 40.5%;
    margin-bottom: 56px;

    &::before {
        box-sizing: border-box;
        position: absolute;
        top: -12px;
        left: -12px;
        top: -11.5px;
        left: -11.5px;
        display: block;
        content: "";
        width: 267.5px;
        height: 267.5px;
        border-radius: 50%;
        border: 6px solid rgba(237, 240, 243, 0.35);
        width: 267px;
        height: 267px;
    }

    &::after {
        box-sizing: border-box;
        position: absolute;
        top: -16px;
        left: -16.5px;
        display: block;
        content: "";
        width: 276.5px;
        height: 276px;
        border-radius: 50%;
        border: 5px solid rgba(237, 240, 243, 0.3);
    }
`

export const CardInput = styled.input`
    width: 100%;
    display: inline-block;
    height: 4px;
    background-color: #fff;
    margin-bottom: 10px;
`

export const InputTiming = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 24px;
` 

export const CardInfoList = styled.ul`
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 12px 8px;
    background-color: rgba(144, 135, 164, 0.8);
    border-radius: 20px;
`
export const CardInfoItem = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CardInfoTitle = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.019em;
    color: #fff;
`
export const CardInfoText = styled.p`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.019em;
    color: #fff;
`