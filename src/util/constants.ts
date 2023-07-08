export const DEFAULT_MESSAGE = "";

export const FIRST_LAST_NAME_VALIDATION_REGEX = /^[A-Za-z\d\-.\s]*$/;
export const FIRST_LAST_NAME_VALIDATION_ERROR_MESSAGE =
  "Only letters (a-z), numbers (0-9), hyphens (-), spaces( ) and periods (.) are allowed";

export const FIRST_NAME_REQUIRED_MESSAGE = "First name is required.";
export const LAST_NAME_REQUIRED_MESSAGE = "Last name is required.";

export const EMAIL_VALIDATION_REGEX = /^\S+@\S+\.\S+$/;
export const EMAIL_VALIDATION_ERROR_MESSAGE =
  "Please enter a valid email address (e.g., jill@mail.com).";
export const EMAIL_REQUIRED_MESSSAGE = "Email is required.";

export const PHONE_NUMBER_REQUIRED_MESSAGE = "Mobile number is required.";
export const PHONE_NUMBER_VALIDATION_ERROR_MESSAGE =
  "Please enter a valid 10-digit phone number (e.g.,+1 912 912 9323).";

export const PASSWORD_MISMATCH_ERROR_MESSAGE = "Passwords must match.";
export const PASSWORD_REQUIRED_MESSAGE = "Password is required.";
export const PASSWORD_HAS_NUMBER_REGEX = /^(?:(?=.*\d).*)$/;
export const PASSWORD_HAS_UPPER_LOWER_ALPHABET_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z]).+$/;

export const PASSWORD_HAS_LESS_THAN_THREE_CONSECUTIVE_CHARACTERS_REGEX =
  /(abc|bcd|cde|def|efg|fgh|ghi|hij|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)+/;
export const PASSWORD_HAS_LESS_THAN_THREE_REPETITVE_CHARACTERS_REGEX =
  /([a-zA-z0-9])\1\1+/;
export const PASSWORD_HAS_SPECIAL_CHARACTERS_REGEX =
  /^(?:(?=.*[@#$%^&,+="{}()<>\\[\]?*\\!\\/`'`~:_;-]).*)$/;
export const PASSWORD_HAS_UNAPPROVED_CHARACTERS_REGEX =
  /^(?:(?=.*[^a-zA-Z\d@#$%^&,+="{}()<>\\[\]?*\\!\\/`'~:_;-]).*)$/;
export const PASSWORD_VALIDATION_ERROR_MESSAGE =
  "Complete all password requirements.";
