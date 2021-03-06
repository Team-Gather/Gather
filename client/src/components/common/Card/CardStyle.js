import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 30px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ecf0f3;
  border-radius: 10px;
  box-shadow: -3px 3px 7px #ffffff, 3px 3px 5px #ceced1;
`;

export const ImgAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 120px;
  margin: 0 5px;
  background: #ecf0f3;
  border-radius: 50%;
  box-shadow: -3px 3px 7px #ffffff, 3px 3px 5px #ceced1;
`;

export const InnerArea = styled.div`
  height: calc(100% - 25px);
  width: calc(100% - 25px);

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Title = styled.div`
  text-align: center;
  display: block;
  font-size: 15px;
  font-weight: 500;
  color: #31344b;
  margin: 10px 0 10px 0;
  line-height: 200%;

  width: 290px;
  height: 60px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Writer = styled.div`
  font-weight: 400;
  color: #44476a;
  font-size: 13px;
`;

export const SocialIcons = styled.div`
  margin: 15px 0 25px 0;
  & > a {
    text-decoration: none;
    color: inherit;
    position: relative;
    height: 40px;
    width: 40px;
    display: inline-flex;
    margin: 0 5px;
    border-radius: 50%;

    background: #ecf0f3;
    border-radius: 50%;
    box-shadow: -3px 3px 7px #ffffff, 3px 3px 5px #ceced1;
  }

  & > a:hover::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: #ecf0f3;
    border-radius: 50%;
    box-shadow: inset -3px 3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }

  & > a > span {
    position: relative;
    text-align: center;
    width: 100%;
    height: 100%;
    line-height: 40px;
    z-index: 5;
  }

  & > a > .instagram {
    color: #e1306c;
  }

  & > a > .linkedin {
    color: #4267b2;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  width: 75%;
  margin-top: 7px;
  padding: 0 5px;
  justify-content: space-between;
`;

export const InformationWrapper = styled.div`
  color: #31344b;
  font-size: 17px;

  & > span > svg {
    vertical-align: unset;
  }

  & > span {
    margin-left: 3px;
  }
`;
