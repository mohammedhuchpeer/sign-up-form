import { validatePassword } from "helper/validatePassword";
import { isValidNumber } from "libphonenumber-js";
import {
  EMAIL_VALIDATION_REGEX,
  FIRST_LAST_NAME_VALIDATION_REGEX,
} from "./constants";

export const VALIDATOR_TYPE_REQUIRE = "REQUIRE";
export const VALIDATOR_TYPE_FIRSTNAME_LASTNAME = "FIRST_LAST_NAME";
export const VALIDATOR_TYPE_MINIMUMLENGTH = "MINILENGTH";
export const VALIDATOR_TYPE_MAXIMUMLENGTH = "MAXLENGTH";
export const VALIDATOR_TYPE_MIN = "MIN";
export const VALIDATOR_TYPE_MAX = "MAX";
export const VALIDATOR_TYPE_EMAIL = "EMAIL";
export const VALIDATOR_TYPE_FILE = "FILE";
export const VALIDATOR_TYPE_PHONE_NUMBER = "PHONE_NUMBER";
export const VALIDATOR_TYPE_PASSWORD = "PASSWORD";
export const VALIDATOR_TYPE_PASSWORD_MISMATCH = "PASSWORD_MISMATCH";
export const VALIDATOR_TYPE_CONFIRM_PASSWORD_MISMATCH =
  "CONFIRM_PASSWORD_MISMATCH";

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FIRSTNAME_LASTNAME = () => ({
  type: VALIDATOR_TYPE_FIRSTNAME_LASTNAME,
});
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = (value: number) => ({
  type: VALIDATOR_TYPE_MINIMUMLENGTH,
  value,
});
export const VALIDATOR_MAX_LENGTH = (value: number) => ({
  type: VALIDATOR_TYPE_MAXIMUMLENGTH,
  value,
});
export const VALIDATOR_MIN = (value: string) => ({
  type: VALIDATOR_TYPE_MIN,
  value,
});
export const VALIDATOR_MAX = (value: string) => ({
  type: VALIDATOR_TYPE_MAX,
  value,
});
export const VALIDATOR_PHONE_NUMBER = (value: number) => ({
  type: VALIDATOR_TYPE_PHONE_NUMBER,
  value,
});

export const VALIDATOR_PASSWORD = () => ({
  type: VALIDATOR_TYPE_PASSWORD,
});

export const VALIDATOR_PASSWORD_MISMATCH = () => ({
  type: VALIDATOR_TYPE_PASSWORD_MISMATCH,
});

export const VALIDATOR_CONFIRM_PASSWORD_MISMATCH = () => ({
  type: VALIDATOR_TYPE_CONFIRM_PASSWORD_MISMATCH,
});

export const validate = (value: string, validators: any) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }

    if (validator.type === VALIDATOR_TYPE_FIRSTNAME_LASTNAME) {
      isValid = isValid && FIRST_LAST_NAME_VALIDATION_REGEX.test(value);
    }

    if (validator.type === VALIDATOR_TYPE_MINIMUMLENGTH) {
      isValid = isValid && value.trim().length >= validator.value;
    }

    if (validator.type === VALIDATOR_TYPE_MAXIMUMLENGTH) {
      isValid = isValid && value.trim().length <= validator.value;
    }

    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.value;
    }

    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.value;
    }

    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && EMAIL_VALIDATION_REGEX.test(value);
    }

    if (validator.type === VALIDATOR_TYPE_PHONE_NUMBER) {
      isValid = isValid && isValidNumber(value);
    }

    if (validator.type === VALIDATOR_TYPE_PASSWORD) {
      isValid = isValid && validatePassword(value);
    }
  }

  return isValid;
};
