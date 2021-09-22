import { atom } from 'recoil';

export const checkFieldsState = atom({
  key: 'checkFieldsState',
  default: [],
});

export const fieldModalState = atom({
  key: 'fieldModalState',
  default: false,
});

export const isFieldSelected = atom({
  key: 'isFieldSelected',
  default: false,
});
