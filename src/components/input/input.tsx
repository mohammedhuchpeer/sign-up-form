import { useReducer, useEffect } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { MuiTelInput as PhoneField } from "mui-tel-input";
import TextArea, {
  TextareaAutosizeProps,
} from "@mui/material/TextareaAutosize";
import { validate } from "util/validator";

import MailIcon from "@mui/icons-material/Mail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

import ProfileIcon from "@mui/icons-material/Person";
import Phone from "@mui/icons-material/PhoneAndroid";

import "react-phone-input-2/lib/material.css";
import { format, isValidNumber } from "libphonenumber-js";

const StyledInput = styled(TextField)<{ width?: any }>`
  ${(props) => props.width && `width:${props.width};`}
  & .MuiInputLabel-root.Mui-focused {
    color: #000000;
  }

  & .MuiInputLabel-root.Mui-error {
    font-weight: medium;
  }

  & .MuiFilledInput-root.Mui-focused {
    border: 1px solid #6b63a1;
  }

  & .MuiFilledInput-root.Mui-error {
    border: 1.5px solid #ba482e;
  }
`;

const StyledTextArea = styled(TextArea)<TextareaAutosizeProps>``;

const StyledPhoneInput = styled(PhoneField)`
  &.react-tel-input .form-control {
    width: 100%;
  }

  & .MuiInputLabel-root.Mui-focused {
    color: #000000;
  }

  & .MuiInputLabel-root.Mui-error {
    font-weight: medium;
  }

  & .MuiFilledInput-root.Mui-focused {
    border: 1px solid #6b63a1;
  }

  & .MuiFilledInput-root.Mui-error {
    border: 1.5px solid #ba482e;
  }
`;

interface State {
  value: string;
  isValid: boolean;
  isTouched: boolean;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

const reducer = (
  state: State,
  action: { type: string; payload?: any }
): State => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.payload.value,
        isValid:
          validate(action.payload.value, action.payload.validators) || false,
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    case "PHONE_NUMBER_CHANGE":
      const formattedNumber = format(action.payload.value, "INTERNATIONAL");
      const isValid = isValidNumber(action.payload.value);

      return {
        ...state,
        value: isValid ? formattedNumber : action.payload.value,
        isValid: isValidNumber(action.payload.value) || false,
      };

    case "SHOW_HIDE_PASSWORD": {
      return {
        ...state,
        showPassword: !state.showPassword,
      };
    }
    case "SHOW_HIDE_CONFIRM_PASSWORD": {
      return { ...state, showConfirmPassword: !state.showConfirmPassword };
    }
    default:
      return state;
  }
};

interface CustomInputProps {
  type?: "text" | "number" | "email" | "password" | "tel";
  initialValue: string;
  autoFocus?: boolean;
  width?: any | null;
  label?: string;
  element: "input" | "textarea";
  id: string;
  fullWidth?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  initialValidity?: boolean;
  helperText?: React.ReactElement<any>;
  validators: any[];
  onInput: (id: string, value: string, isValid: boolean) => void;
  isFormValid: boolean;
  initialTouchability: boolean;
  formState?: any;
}

const Input: React.FC<CustomInputProps> = ({
  label,
  element,
  id,
  fullWidth,
  helperText,
  validators,
  onInput,
  width,
  autoFocus,
  initialValue,
  initialValidity,
  initialTouchability,
}) => {
  const [
    { value, isTouched, isValid, showPassword, showConfirmPassword },
    dispatch,
  ] = useReducer(reducer, {
    value: initialValue || "",
    isValid: initialValidity || false,
    isTouched: initialTouchability || false,
    showPassword: false,
    showConfirmPassword: false,
  });

  const iconColor = !isValid && isTouched ? "#ba482e" : "";

  const EndAdornmentIcon = (id: string, show: boolean) => {
    switch (id) {
      case "email":
        return (
          <IconButton>
            <MailIcon sx={{ color: iconColor }} />
          </IconButton>
        );
      case "password":
        return !showPassword ? (
          <IconButton
            id="visibiility-password-icon"
            onClick={() => {
              dispatch({ type: "SHOW_HIDE_PASSWORD" });
            }}
          >
            <VisibilityIcon sx={{ color: iconColor }} />
          </IconButton>
        ) : (
          <IconButton
            id="visibiilityoff-password-icon"
            onClick={() => {
              dispatch({ type: "SHOW_HIDE_PASSWORD" });
            }}
          >
            <VisibilityOffIcon sx={{ color: iconColor }} />
          </IconButton>
        );
      case "confirmPassword":
        return !showConfirmPassword ? (
          <IconButton
            id="visibiility-confirm-password-icon"
            onClick={() => {
              dispatch({ type: "SHOW_HIDE_CONFIRM_PASSWORD" });
            }}
          >
            <VisibilityIcon sx={{ color: iconColor }} />
          </IconButton>
        ) : (
          <IconButton
            id="visibiilityoff-confirm-password-icon"
            onClick={() => {
              dispatch({ type: "SHOW_HIDE_CONFIRM_PASSWORD" });
            }}
          >
            <VisibilityOffIcon sx={{ color: iconColor }} />
          </IconButton>
        );
      case "phoneNumber":
        return (
          <IconButton>
            <Phone sx={{ color: iconColor }} />
          </IconButton>
        );
      default:
        return (
          <IconButton>
            <ProfileIcon sx={{ color: iconColor }} />
          </IconButton>
        );
    }
  };

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  useEffect(() => {
    if (initialTouchability) {
      dispatch({ type: "TOUCH" });
    }
  }, [initialTouchability]);

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: "CHANGE",
      payload: {
        id: event.target.id,
        value: event.target.value,
        validators: validators,
      },
    });
  };

  const touchHandler = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    if (!event.relatedTarget?.id) {
      dispatch({ type: "TOUCH" });
    }
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      dispatch({ type: "TOUCH" });
    }
  };

  let component = (
    <StyledInput
      color="secondary"
      type={
        (id === "password" && !showPassword) ||
        (id === "confirmPassword" && !showConfirmPassword)
          ? "password"
          : "text"
      }
      autoFocus={autoFocus}
      width={width}
      id={id}
      label={label}
      error={!isValid && isTouched}
      value={value}
      variant="filled"
      onBlur={touchHandler}
      onKeyDown={onKeyDownHandler}
      onChange={onChangeHandler}
      fullWidth={fullWidth}
      helperText={!isValid && isTouched && helperText}
      InputProps={
        element === "textarea"
          ? {
              inputComponent: StyledTextArea,
              rows: 3,
            }
          : {
              endAdornment: EndAdornmentIcon(id, showPassword),
              disableUnderline: true,
            }
      }
    />
  );

  if (id === "phoneNumber") {
    component = (
      <StyledPhoneInput
        color="secondary"
        flagSize="small"
        label={label}
        id={id}
        variant="filled"
        defaultCountry="US"
        fullWidth={fullWidth}
        error={!isValid && isTouched}
        value={value}
        onChange={(phone: any) => {
          dispatch({
            type: "PHONE_NUMBER_CHANGE",
            payload: { value: phone, validators },
          });
        }}
        InputProps={{
          endAdornment: EndAdornmentIcon(id, showPassword),
          disableUnderline: true,
        }}
        helperText={!isValid && isTouched && helperText}
        onBlur={touchHandler}
        onKeyDown={onKeyDownHandler}
        inputProps={{
          maxLength: 17,
        }}
      />
    );
  }

  return component;
};

export default Input;
