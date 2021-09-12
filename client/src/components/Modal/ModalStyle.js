import styled from 'styled-components';

export const CreateModal = styled.div`
  position: fixed;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 10;

  & > div {
    margin-top: 30px;
    opacity: 1 !important;
    display: inline-block;
    background-color: #ecf0f3;
    border-radius: 30px;
    user-select: none;
    max-width: 440px;
    z-index: 1012;
    padding: 30px 40px 0;
    position: relative;

    @media screen and (max-width: 600px) {
      width: 100%;
      margin-top: 0;
      border-radius: 0;

      overflow: scroll;
      overflow-x: hidden;

      height: 100vh;
      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
        background: lightgray;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
      }
    }
  }
`;

export const CloseModalButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  opacity: 0.15;
`;
