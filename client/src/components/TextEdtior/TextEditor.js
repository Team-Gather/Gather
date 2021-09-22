import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import './TextEditorStyle.css';
import { quillStyle } from './TextEditorStyle';
import { formats, modules } from 'utils/constants';

const TextEditor = () => {
  const [text, setText] = useState('');

  const onChangeText = (value) => {
    setText(value);
  };

  return (
    <ReactQuill
      style={quillStyle}
      theme="snow"
      modules={modules}
      formats={formats}
      value={text || ''}
      onChange={(content, delta, source, editor) => onChangeText(editor.getHTML())}
    />
  );
};

export default TextEditor;
