import React, { useCallback } from 'react';
import { CloseModalButton, CreateModal } from './ModalStyle';
import { useRecoilState } from 'recoil';
import { fieldModalState } from 'atom/atom';

const Modal = ({ children }) => {
  const [, setShowSelectFieldModal] = useRecoilState(fieldModalState);

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const onCloseModal = () => {
    setShowSelectFieldModal(false);
  };

  return (
    <CreateModal onClick={onCloseModal}>
      <div onClick={stopPropagation}>
        <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
        {children}
      </div>
    </CreateModal>
  );
};

export default Modal;
