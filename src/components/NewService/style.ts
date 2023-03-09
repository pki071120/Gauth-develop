import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  @media (min-width: 801px) {
    padding-left: 100px;
  }
`;

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  @media (max-width: 1500px) {
    align-items: center;
  }
  @media (max-width: 550px) {
    font-size: 3.6364vw;
    width: 100%;
    margin: 0 50px;
  }
`;

export const TitleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-weight: 700;
    font-size: 1.2em;
    color: #1c1c1c;
  }
  h3 {
    font-weight: 600;
    font-size: 0.8em;
    color: #929292;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 352px;
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 53px;
`;

export const Submit = styled.button`
  width: 100%;
  aspect-ratio: auto 1/0.125;
  color: #fff;
  background: #5499d9;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.75em;
  margin-top: 70px;
`;

export const ImgBox = styled.div`
  width: 40%;
  display: flex;
  align-items: center;

  svg {
    width: 100%;
  }
`;

export const ModalPosition = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalLayer = styled.div`
  width: 60%;
  height: 70%;
  background: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

export const ModelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 35px;

  h3 {
    color: #929292;
    text-align: center;
    svg {
      max-height: 25px;
      margin-bottom: -5px;
      cursor: pointer;
    }
  }

  div {
    :nth-of-type(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    :nth-of-type(2) {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  button {
    background: #2e80cc;
    color: #fff;
    width: 300px;
    height: 80px;
    border-radius: 50px;
    font-size: 24px;
    font-weight: bold;
  }
`;
