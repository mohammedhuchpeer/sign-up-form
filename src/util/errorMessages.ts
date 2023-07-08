import { isValidNumber } from "libphonenumber-js";
import {
  FIRST_LAST_NAME_VALIDATION_REGEX,
  FIRST_LAST_NAME_VALIDATION_ERROR_MESSAGE,
  FIRST_NAME_REQUIRED_MESSAGE,
  DEFAULT_MESSAGE,
  LAST_NAME_REQUIRED_MESSAGE,
  EMAIL_VALIDATION_REGEX,
  EMAIL_VALIDATION_ERROR_MESSAGE,
  EMAIL_REQUIRED_MESSSAGE,
  PHONE_NUMBER_VALIDATION_ERROR_MESSAGE,
  PHONE_NUMBER_REQUIRED_MESSAGE,
  PASSWORD_REQUIRED_MESSAGE,
  PASSWORD_HAS_LESS_THAN_THREE_CONSECUTIVE_CHARACTERS_REGEX,
  PASSWORD_HAS_LESS_THAN_THREE_REPETITVE_CHARACTERS_REGEX,
  PASSWORD_HAS_NUMBER_REGEX,
  PASSWORD_HAS_UPPER_LOWER_ALPHABET_REGEX,
  PASSWORD_HAS_SPECIAL_CHARACTERS_REGEX,
  PASSWORD_HAS_UNAPPROVED_CHARACTERS_REGEX,
  PASSWORD_VALIDATION_ERROR_MESSAGE,
} from "./constants";

export const getErrorMessage = (id: string, value: any) => {
  switch (id) {
    case "firstName": {
      if (value.length > 0) {
        if (!FIRST_LAST_NAME_VALIDATION_REGEX.test(value)) {
          return FIRST_LAST_NAME_VALIDATION_ERROR_MESSAGE;
        } else {
          return DEFAULT_MESSAGE;
        }
      } else return FIRST_NAME_REQUIRED_MESSAGE;
    }
    case "lastName": {
      if (value.length > 0) {
        if (!FIRST_LAST_NAME_VALIDATION_REGEX.test(value)) {
          return FIRST_LAST_NAME_VALIDATION_ERROR_MESSAGE;
        } else {
          return DEFAULT_MESSAGE;
        }
      } else return LAST_NAME_REQUIRED_MESSAGE;
    }
    case "email": {
      if (value.length > 0) {
        if (!EMAIL_VALIDATION_REGEX.test(value)) {
          return EMAIL_VALIDATION_ERROR_MESSAGE;
        } else {
          return DEFAULT_MESSAGE;
        }
      } else {
        return EMAIL_REQUIRED_MESSSAGE;
      }
    }
    case "phoneNumber": {
      if (value.length > 0) {
        if (!isValidNumber(value)) {
          return PHONE_NUMBER_VALIDATION_ERROR_MESSAGE;
        } else {
          return DEFAULT_MESSAGE;
        }
      } else {
        return PHONE_NUMBER_REQUIRED_MESSAGE;
      }
    }
    case "password": {
      if (value.length > 0) {
        if (
          PASSWORD_HAS_LESS_THAN_THREE_CONSECUTIVE_CHARACTERS_REGEX.test(
            value
          ) ||
          PASSWORD_HAS_LESS_THAN_THREE_REPETITVE_CHARACTERS_REGEX.test(value) ||
          !PASSWORD_HAS_NUMBER_REGEX.test(value) ||
          !PASSWORD_HAS_UPPER_LOWER_ALPHABET_REGEX.test(value) ||
          !PASSWORD_HAS_SPECIAL_CHARACTERS_REGEX.test(value) ||
          PASSWORD_HAS_UNAPPROVED_CHARACTERS_REGEX.test(value)
        ) {
          return PASSWORD_VALIDATION_ERROR_MESSAGE;
        } else {
          return DEFAULT_MESSAGE;
        }
      } else {
        return PASSWORD_REQUIRED_MESSAGE;
      }
    }
    case "confirmPassword": {
      if (value.length > 0) {
        if (
          PASSWORD_HAS_LESS_THAN_THREE_CONSECUTIVE_CHARACTERS_REGEX.test(
            value
          ) ||
          PASSWORD_HAS_LESS_THAN_THREE_REPETITVE_CHARACTERS_REGEX.test(value) ||
          !PASSWORD_HAS_NUMBER_REGEX.test(value) ||
          !PASSWORD_HAS_UPPER_LOWER_ALPHABET_REGEX.test(value) ||
          !PASSWORD_HAS_SPECIAL_CHARACTERS_REGEX.test(value) ||
          PASSWORD_HAS_UNAPPROVED_CHARACTERS_REGEX.test(value)
        ) {
          return PASSWORD_VALIDATION_ERROR_MESSAGE;
        } else {
          return DEFAULT_MESSAGE;
        }
      } else {
        return PASSWORD_REQUIRED_MESSAGE;
      }
    }
    default:
      break;
  }
};
