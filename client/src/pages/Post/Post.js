import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useHistory } from 'react-router';
import { formats, modules, options } from 'utils/constants';
import SelectFieldModal from 'components/SelectFieldModal/SelectFieldModal';
import { useRecoilValue, useRecoilState } from 'recoil';
import { checkFieldsState, fieldModalState } from 'atom/atom';
import { CheckCircleOutlined, MinusOutlined, SearchOutlined } from '@ant-design/icons';
import Select from 'react-select';
import './PostStyle.css';
import { SubmitWrapper, quillStyle, Container, SelectWrapper, Button, Fields } from './PostStyle';
import { ROUTES } from 'utils/routes';

const Post = () => {
  const history = useHistory();
  const checkFields = useRecoilValue(checkFieldsState);

  const [value, setValue] = useState('');
  const [showSelectFieldModal, setShowSelectFieldModal] = useRecoilState(fieldModalState);

  const onHandleShowModal = () => setShowSelectFieldModal(true);

  const onChangeText = (value) => setValue(value);

  const onSubmit = (e) => e.preventDefault();

  const goMainPage = () => history.push(`${ROUTES.MAIN}`);

  return (
    <Container>
      <input type="text" placeholder="Make your title" />
      <SelectWrapper>
        <Select options={options} isMulti placeholder="Select Languages" />
        <Button onClick={onHandleShowModal} isClicked={showSelectFieldModal}>
          <SearchOutlined />
        </Button>
      </SelectWrapper>
      <SelectWrapper>
        <Fields isSelected={checkFields.length}>
          {checkFields.map((item, i) => (
            <div>
              {i === 0 && <CheckCircleOutlined style={{ marginRight: '0.5rem' }} />}
              {item}
              {i !== checkFields.length - 1 && (
                <MinusOutlined
                  style={{ transform: 'rotate(90deg)', padding: '0 0.4rem', opacity: '0.2' }}
                />
              )}
            </div>
          ))}
        </Fields>
      </SelectWrapper>

      {showSelectFieldModal && <SelectFieldModal />}

      <ReactQuill
        style={quillStyle}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value || ''}
        onChange={(content, delta, source, editor) => onChangeText(editor.getHTML())}
      />
      <form onSubmit={onSubmit}>
        <SubmitWrapper>
          <button onClick={goMainPage}>Cancel</button>
          <button onClick={onSubmit}>Submit</button>
        </SubmitWrapper>
      </form>
    </Container>
  );
};

export default Post;
