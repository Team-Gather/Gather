import React from 'react';
import Modal from 'components/Modal/Modal';
import { Button, ButtonWrapper, Checkbox, CheckboxContainer, Label } from './SelectFieldModalStyle';
import { fields } from 'utils/constants';
import { useRecoilState } from 'recoil';
import { checkFieldsState, fieldModalState } from 'atom/atom';

const SelectFieldModal = () => {
  const [checkedFields, setCheckedFields] = useRecoilState(checkFieldsState);
  const [, setShowSelectFieldModal] = useRecoilState(fieldModalState);

  const onCloseModal = () => setShowSelectFieldModal(false);
  const onSubmitFields = () => setShowSelectFieldModal(false);

  const handleToggle = (title) => {
    const currentIndex = checkedFields.indexOf(title);
    const newChecked = [...checkedFields];
    if (currentIndex === -1) newChecked.push(title);
    else newChecked.splice(currentIndex, 1);

    setCheckedFields(newChecked);
  };

  return (
    <Modal>
      <Label id="channel-label">
        <span>Field</span>
        <CheckboxContainer>
          {fields.map((item) => (
            <Checkbox
              key={item.id}
              onClick={() => handleToggle(item.title)}
              isChecked={checkedFields.includes(item.title)}
            >
              {item.title}
            </Checkbox>
          ))}
        </CheckboxContainer>
      </Label>
      <ButtonWrapper>
        <Button type="submit" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button type="submit" onClick={onSubmitFields}>
          Submit
        </Button>
      </ButtonWrapper>
    </Modal>
  );
};

export default SelectFieldModal;
