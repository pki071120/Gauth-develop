import styled from '@emotion/styled';
import Wave from 'react-wavify';

export const Layer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
`;

export const SideWaveBox = styled.div``;

export const SideWave = styled(Wave)`
  position: fixed;
  transform: rotate(90deg);
  transform-origin: left bottom;
  top: -100%;
  height: 100%;
  left: calc(100vw - 1920px);

  @media (max-width: 1650px) {
    left: calc(1650px - 1920px);
  }

  @media (max-width: 1200px) {
    top: 0;
    left: 0;
    transform: rotate(0);
  }
`;

export const Bubble = styled.span`
  position: absolute;
  background: #fff;
  width: 0;
  height: 0;
  border-radius: 100%;
  top: 210px;
  left: 12vw;
  animation: bubbleAnimate 2.5s linear
    ${({ delay }: { delay: number }) => delay + 's'} infinite;

  @keyframes bubbleAnimate {
    0%,
    100% {
      opacity: 0;
      transform: translateY(0);
    }
    10% {
      transform: translateY(-25px) translateX(-5px);
      width: 5px;
      height: 5px;
    }
    20% {
      transform: translateY(-45px) translateX(-15px);
      width: 12px;
      height: 12px;
    }
    35% {
      width: 19px;
      height: 19px;
      transform: translateY(-65px) translateX(-30px);
    }
    60% {
      opacity: 1;
      transform: translateY(-125px) translateX(-15px);
      width: 30px;
      height: 30px;
    }
    60.1% {
      opacity: 0;
    }
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 650px;

  @media (max-width: 1200px) {
    min-width: 0;
  }
`;

export const Img = styled.img`
  height: 475px;
`;

export const TitleBox = styled.div`
  position: relative;
  color: #fff;
  text-align: center;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  padding-top: 100px;

  @media (max-width: 1200px) {
    width: 100%;
    gap: 50px;
  }

  h1 {
    margin-bottom: 5px;
    font-size: 45px;
    letter-spacing: 16px;

    @media (max-width: 1200px) {
      font-size: 40px;
    }
  }

  h2 {
    margin-top: 5px;
    font-size: 35px;
    font-weight: 600;

    @media (max-width: 1200px) {
      font-size: 30px;
    }
  }
`;

export const LoginWrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const LoginContainer = styled.div`
  width: 425px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 60px;
    font-weight: 100;
    letter-spacing: 5px;
    margin: 0;
    color: #2e80cc;

    @media (max-width: 1200px) {
      color: #fff;
      font-size: 55px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  input {
    border: none;
    border-bottom: 3px solid black;
    width: 100%;
    padding: 0 30px 10px 30px;
    font-size: 27px;
    font-weight: 400;
    outline: none;
    background-color: transparent;
    z-index: 10;

    @media (max-width: 1200px) {
      color: #fff;
    }
  }

  h2 {
    position: relative;
    margin: 0px auto -60px auto;
    font-size: 27px;
    font-weight: 400;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  position: relative;
`;

export const Email = styled.div`
  position: absolute;
  top: -5px;
  left: ${({ left }: { left: number }) => {
    return left + 40 + 'px';
  }};
  font-size: 27px;

  @media (max-width: 1200px) {
    color: #fff;
  }
`;

export const InputName = styled.h3`
  color: #929292;
  position: absolute;
  margin: 0;
  transition: all 0.5s, color 0s;
  ${({ being }: { being: boolean }) => {
    if (being) {
      return 'transform: translateY(-25px); font-size: 15px;';
    }
  }};

  @media (max-width: 1200px) {
    color: #fff;
    font-size: 18px;

    ${({ being }: { being: boolean }) => {
      if (being) {
        return 'transform: translateY(-25px); font-size: 14px;';
      }
    }};
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  font-size: 18px;
  line-height: 21px;

  div {
    color: #929292;
    @media (max-width: 1200px) {
      color: #fff;
    }
  }
`;

export const Submit = styled.button`
  width: 100%;
  height: 60px;
  color: #fff;
  background: #2e80cc;
  font-weight: 590;
  font-size: 27px;
  line-height: 32px;
  text-align: center;
  border: none;
  border-radius: 30px;
  margin-bottom: 10px;
  cursor: pointer;

  &:active {
    box-shadow: rgba(50, 50, 93, 0.15) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.2) 0px 18px 36px -18px inset;
  }
`;
