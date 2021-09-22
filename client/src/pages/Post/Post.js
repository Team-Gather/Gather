import React from 'react';
import 'react-quill/dist/quill.snow.css';
import { useHistory } from 'react-router';
import SelectFieldModal from 'components/SelectFieldModal/SelectFieldModal';
import { useRecoilValue } from 'recoil';
import { fieldModalState } from 'atom/atom';
import { SubmitWrapper, Container } from './PostStyle';
import { ROUTES } from 'utils/routes';
import TextEditor from 'components/TextEdtior/TextEditor';
import Selects from 'components/Selects/Selects';

const Post = () => {
  const history = useHistory();
  const showSelectFieldModal = useRecoilValue(fieldModalState);

  const onSubmit = (e) => e.preventDefault();
  const goMainPage = () => history.push(`${ROUTES.MAIN}`);

  return (
    <Container>
      <input type="text" placeholder="Make your title" />
      <Selects />
      {showSelectFieldModal && <SelectFieldModal />}
      <TextEditor />

      <form onSubmit={onSubmit}>
        <SubmitWrapper>
          <button className="cancel" onClick={goMainPage}>
            Cancel
          </button>
          <button className="submit_post" onClick={onSubmit}>
            Submit
          </button>
        </SubmitWrapper>
      </form>
    </Container>
  );
};

export default Post;
