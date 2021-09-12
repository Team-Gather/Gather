import React from 'react';
import Select from 'react-select';
import { useRecoilValue, useRecoilState } from 'recoil';
import { SearchOutlined, CheckOutlined } from '@ant-design/icons';
import { options } from 'utils/constants';
import {
  SelectWrapper,
  Fields,
  Button,
  CustomedMinusOutlined,
  CustomedCheckCircleOutlined,
} from './SelectsStyle';
import { checkFieldsState, isFieldSelected, fieldModalState } from 'atom/atom';

const Selects = () => {
  const checkFields = useRecoilValue(checkFieldsState);
  const isFieldsSelected = useRecoilValue(isFieldSelected);
  const [showSelectFieldModal, setShowSelectFieldModal] = useRecoilState(fieldModalState);

  const onHandleShowModal = () => setShowSelectFieldModal(true);

  return (
    <>
      <SelectWrapper>
        <Select options={options} isMulti placeholder="Select Languages.." />
        <Button
          onClick={onHandleShowModal}
          isClicked={showSelectFieldModal}
          isFieldsSelected={isFieldsSelected}
        >
          {isFieldsSelected ? <CheckOutlined /> : <SearchOutlined />}
        </Button>
      </SelectWrapper>
      <SelectWrapper>
        <Fields isSelected={checkFields.length}>
          {checkFields.map((item, i) => (
            <div key={i}>
              {i === 0 && <CustomedCheckCircleOutlined style={{ marginRight: '0.5rem' }} />}
              {item}
              {i !== checkFields.length - 1 && <CustomedMinusOutlined />}
            </div>
          ))}
        </Fields>
      </SelectWrapper>
    </>
  );
};

export default Selects;
