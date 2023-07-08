import styled from "styled-components";
import {
  Grid as MuiGrid,
  Button,
  Paper as MuiPaper,
  FormHelperText,
  Box,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import StyledInput from "components/input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_FIRSTNAME_LASTNAME,
  VALIDATOR_PASSWORD,
} from "util/validator";
import useForm from "hooks/form";
import {
  PASSWORD_HAS_LESS_THAN_THREE_CONSECUTIVE_CHARACTERS_REGEX,
  PASSWORD_HAS_LESS_THAN_THREE_REPETITVE_CHARACTERS_REGEX,
  PASSWORD_HAS_NUMBER_REGEX,
  PASSWORD_HAS_SPECIAL_CHARACTERS_REGEX,
  PASSWORD_HAS_UNAPPROVED_CHARACTERS_REGEX,
  PASSWORD_HAS_UPPER_LOWER_ALPHABET_REGEX,
} from "util/constants";

const Form = styled.form`
  width: 100%;
`;

const ErrorText = styled.span`
  font-weight: 500;
  font-size: 13px;
  font-family: "Google sans";
`;

const Grid = styled(MuiGrid)`
  margin: 0 auto;
  width: 100%;
  margin: 0 auto;
`;

const Paper = styled(MuiPaper)`
  padding: 35px;
`;

const PasswordConditionWrppaer = styled(Box)`
  /* width: 600px; */
  display: flex;
  align-items: flex-start;
  jutify-content: space-between;
`;

const App: React.FC<any> = () => {
  const { state, inputHandler, submitHandler } = useForm(
    {
      firstName: {
        value: "",
        label: "First Name",
        isValid: false,
        isTouched: false,
        id: "firstName",
        element: "input",
        errorText: "First Name is required.",
        validators: [VALIDATOR_REQUIRE(), VALIDATOR_FIRSTNAME_LASTNAME()],
      },
      lastName: {
        value: "",
        isValid: false,
        isTouched: false,
        label: "Last Name",
        id: "lastName",
        element: "input",
        errorText: "Last Name is required.",
        validators: [VALIDATOR_REQUIRE(), VALIDATOR_FIRSTNAME_LASTNAME()],
      },
      email: {
        value: "",
        isValid: false,
        isTouched: false,
        label: "Email",
        id: "email",
        element: "input",
        errorText: "Please enter a valid email.",
        validators: [VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()],
      },
      phoneNumber: {
        value: "",
        isValid: false,
        isTouched: false,
        label: "Phone Number",
        id: "phoneNumber",
        element: "input",
        errorText: "Please enter a valid(10 digit) phone Number.",
        validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)],
      },
      password: {
        value: "",
        isValid: false,
        isTouched: false,
        label: "Password",
        id: "password",
        element: "input",
        errorText: "Password id required.",
        validators: [
          VALIDATOR_REQUIRE(),
          VALIDATOR_PASSWORD(),
          VALIDATOR_MINLENGTH(8),
        ],
      },
      confirmPassword: {
        value: "",
        isValid: false,
        isTouched: false,
        label: "Confirm Password",
        id: "confirmPassword",
        element: "input",
        errorText: "Confirm Password is required.",
        validators: [VALIDATOR_REQUIRE(), VALIDATOR_PASSWORD()],
      },
    },
    false
  );

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      state.isValid &&
      state.inputs.password.value === state.inputs.confirmPassword.value
    ) {
      console.log(state);
    } else if (
      state.isValid &&
      state.inputs.password.value !== state.inputs.confirmPassword.value
    ) {
    } else {
      for (const inputId in state.inputs) {
        const id = inputId as string;

        if (state.inputs[id].value === "" || !state.inputs[id].isValid) {
          submitHandler(id);
        }
      }
    }
  };

  const { value } = state.inputs.password;

  const passwordCriteria = (
    <Box marginTop={2} display="flex" justifyContent="space-between">
      <Box>
        <PasswordConditionWrppaer>
          {value.length > 8 ? (
            <CheckCircleIcon
              sx={{ fontSize: "14px", color: "green", marginRight: "4px" }}
            />
          ) : (
            <CancelIcon
              sx={{ fontSize: "14px", color: "#ba482e", marginRight: "4px" }}
            />
          )}

          <Typography fontSize={12} variant="body1" sx={{ color: "gray" }}>
            Has at least 8 characters
          </Typography>
        </PasswordConditionWrppaer>

        <PasswordConditionWrppaer>
          {value.length > 0 &&
          !PASSWORD_HAS_LESS_THAN_THREE_CONSECUTIVE_CHARACTERS_REGEX.test(
            value.toLocaleLowerCase()
          ) ? (
            <CheckCircleIcon
              sx={{ fontSize: "14px", color: "green", marginRight: "4px" }}
            />
          ) : (
            <CancelIcon
              sx={{ fontSize: "14px", color: "#ba482e", marginRight: "4px" }}
            />
          )}
          <Typography fontSize={12} variant="body1" sx={{ color: "gray" }}>
            Has no more than 3 consecutive characters (e.g. xyz).
          </Typography>
        </PasswordConditionWrppaer>

        <PasswordConditionWrppaer>
          {value.length > 0 &&
          !PASSWORD_HAS_LESS_THAN_THREE_REPETITVE_CHARACTERS_REGEX.test(
            value.toLocaleLowerCase()
          ) ? (
            <CheckCircleIcon
              sx={{ fontSize: "14px", color: "green", marginRight: "4px" }}
            />
          ) : (
            <CancelIcon
              sx={{ fontSize: "14px", color: "#ba482e", marginRight: "4px" }}
            />
          )}
          <Typography fontSize={12} variant="body1" sx={{ color: "gray" }}>
            Has no more than 3 repeating characters in a row. (e.g. xyz).
          </Typography>
        </PasswordConditionWrppaer>
      </Box>
      <Box>
        <PasswordConditionWrppaer>
          {value.length > 0 && PASSWORD_HAS_NUMBER_REGEX.test(value) ? (
            <CheckCircleIcon
              sx={{ fontSize: "14px", color: "green", marginRight: "4px" }}
            />
          ) : (
            <CancelIcon
              sx={{ fontSize: "14px", color: "#ba482e", marginRight: "4px" }}
            />
          )}
          <Typography fontSize={12} variant="body1" sx={{ color: "gray" }}>
            Has a number (0-9).
          </Typography>
        </PasswordConditionWrppaer>
        <PasswordConditionWrppaer>
          {value.length > 0 &&
          PASSWORD_HAS_UPPER_LOWER_ALPHABET_REGEX.test(value) ? (
            <CheckCircleIcon
              sx={{ fontSize: "14px", color: "green", marginRight: "4px" }}
            />
          ) : (
            <CancelIcon
              sx={{ fontSize: "14px", color: "#ba482e", marginRight: "4px" }}
            />
          )}
          <Typography fontSize={12} variant="body1" sx={{ color: "gray" }}>
            Has a lowercase or uppercase letter.
          </Typography>
        </PasswordConditionWrppaer>
        <PasswordConditionWrppaer>
          {value.length > 0 &&
          PASSWORD_HAS_SPECIAL_CHARACTERS_REGEX.test(value) &&
          !PASSWORD_HAS_UNAPPROVED_CHARACTERS_REGEX.test(value) ? (
            <CheckCircleIcon
              sx={{ fontSize: "14px", color: "green", marginRight: "4px" }}
            />
          ) : (
            <CancelIcon
              sx={{ fontSize: "14px", color: "#ba482e", marginRight: "4px" }}
            />
          )}
          <Typography fontSize={12} variant="body1" sx={{ color: "gray" }}>
            Has approved special characters (@, #, $, %, ^, &, +, =).
          </Typography>
        </PasswordConditionWrppaer>
      </Box>
    </Box>
  );

  return (
    <Paper square>
      <Form onSubmit={onSubmitHandler}>
        <Grid container spacing={2}>
          {Object.keys(state.inputs).map((id) => {
            return (
              <Grid item md={6} key={id}>
                <StyledInput
                  initialTouchability={state.inputs[id].isTouched}
                  initialValue={state.inputs[id].value}
                  initialValidity={state.inputs[id].isValid}
                  autoFocus={id === "firstName"}
                  onInput={inputHandler}
                  label={state.inputs[id].label}
                  id={id}
                  element={state.inputs[id].element}
                  fullWidth={true}
                  validators={state.inputs[id].validators}
                  helperText={
                    <ErrorText>{state.inputs[id].errorText}</ErrorText>
                  }
                  isFormValid={state.isValid}
                />
                {id === "password" &&
                  state.inputs[id].value.length > 0 &&
                  passwordCriteria}
                {id === "confirmPassword" &&
                  state.isValid &&
                  state.inputs.password.value !==
                    state.inputs.confirmPassword.value && (
                    <FormHelperText
                      error
                      variant="filled"
                      sx={{ fontWeight: 500, fontSize: 13 }}
                    >
                      Passwords do not match.
                    </FormHelperText>
                  )}
              </Grid>
            );
          })}
          <Grid item md={6}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              id="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Paper>
  );
};

export default App;
