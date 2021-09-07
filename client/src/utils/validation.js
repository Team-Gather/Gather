const EMAIL_REGEX = new RegExp(
  '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
);

const passwordCapitalCheckRegex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])/);
const passwordSpecialCheckRegex = new RegExp(/(?=.*[0-9])(?=.*[@$!%*#?&])/);

export const emailValidator = {
  format: {
    invalidText: 'This email is invalid',
    validator(val) {
      return EMAIL_REGEX.test(val);
    },
  },
};

export const passwordValidator = {
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
