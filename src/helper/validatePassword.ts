import {
  PASSWORD_HAS_LESS_THAN_THREE_CONSECUTIVE_CHARACTERS_REGEX,
  PASSWORD_HAS_LESS_THAN_THREE_REPETITVE_CHARACTERS_REGEX,
  PASSWORD_HAS_NUMBER_REGEX,
  PASSWORD_HAS_SPECIAL_CHARACTERS_REGEX,
  PASSWORD_HAS_UNAPPROVED_CHARACTERS_REGEX,
  PASSWORD_HAS_UPPER_LOWER_ALPHABET_REGEX,
} from "util/constants";

export const validatePassword = (value: string) => {
  let isValid = true;

  if (value.length > 0) {
    isValid =
      isValid &&
      !PASSWORD_HAS_LESS_THAN_THREE_CONSECUTIVE_CHARACTERS_REGEX.test(value) &&
      !PASSWORD_HAS_LESS_THAN_THREE_REPETITVE_CHARACTERS_REGEX.test(value) &&
      PASSWORD_HAS_NUMBER_REGEX.test(value) &&
      PASSWORD_HAS_UPPER_LOWER_ALPHABET_REGEX.test(value) &&
      PASSWORD_HAS_SPECIAL_CHARACTERS_REGEX.test(value) &&
      !PASSWORD_HAS_UNAPPROVED_CHARACTERS_REGEX.test(value);
  }

  return isValid;
};
