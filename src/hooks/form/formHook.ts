import { useReducer, useCallback } from "react";
import { getErrorMessage } from "util/errorMessages";

type Input = {
  value: string;
  isValid: boolean;
  isTouched: boolean;
  label?: string;
  id?: string;
  element?: "input" | "select" | "textarea";
  errorText?: string;
  validators?: any[];
};

interface Form {
  [key: string]: Input;
}

export interface State {
  inputs: any;
  isValid: boolean;
}

const reducer = (
  state: State,
  action: {
    type: string;
    payload: {
      id: string;
      value?: string;
      isValid?: boolean;
    };
  }
): State => {
  switch (action.type) {
    case "INPUT_CHANGE": {
      let isFormValid: boolean = true;
      for (const inputId in state.inputs) {
        if (inputId === action.payload.id) {
          isFormValid = (isFormValid && action.payload.isValid) || false;
        } else {
          isFormValid =
            isFormValid &&
            state.inputs[inputId as keyof typeof state.inputs].isValid;
        }
      }

      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload.id]: {
            ...state.inputs[action.payload.id as keyof typeof state.inputs],
            value: action.payload.value,
            isValid: action.payload.isValid,
            errorText: getErrorMessage(action.payload.id, action.payload.value),
          },
        },
        isValid: isFormValid,
      };
    }

    case "SUBMIT": {
      let updatedInputs = { ...state.inputs };
      for (const inputId in updatedInputs) {
        if (inputId === action.payload.id) {
          const id = inputId as keyof typeof state.inputs;
          updatedInputs[id] = {
            ...updatedInputs[id],
            isTouched: true,
          };
        }
      }
      return { ...state, inputs: updatedInputs };
    }

    default:
      return state;
  }
};

const useForm = (initialInputs: Form, initialValidity: boolean) => {
  const [state, dispatch] = useReducer(reducer, {
    inputs: initialInputs,
    isValid: initialValidity,
  });

  const inputHandler = useCallback(
    (id: string, value: string, isValid: boolean) => {
      dispatch({ type: "INPUT_CHANGE", payload: { id, value, isValid } });
    },
    []
  );

  const submitHandler = useCallback((id: string) => {
    dispatch({ type: "SUBMIT", payload: { id } });
  }, []);

  return { state, inputHandler, submitHandler };
};

export default useForm;
