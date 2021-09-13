const EMAIL_REGEX = new RegExp(
  '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
);

const passwordCapitalCheckRegex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])/);
const passwordSpecialCheckRegex = new RegExp(/(?=.*[0-9])(?=.*[@$!%*#?&])/);

export const nameValidator = {
  required: {
    validator: (val) => val.length > 0,
    invalidText: 'Please input your name',
  },
};

export const emailValidator = {
  required: {
    validator: (val) => val.length > 0,
    invalidText: 'Please input your email',
  },
  format: {
    validator: (val) => EMAIL_REGEX.test(val),
    invalidText: 'This email is invalid',
  },
};

export const passwordValidator = {
  required: {
    validator: (val) => val.length > 0,
  },

  length: {
    validator: (val) => val.length > 7 && val.length < 13,
  },
  capital: {
    validator: (val) => passwordCapitalCheckRegex.test(val),
  },
  numberAndSpecialChar: {
    validator: (val) => passwordSpecialCheckRegex.test(val),
  },
};
