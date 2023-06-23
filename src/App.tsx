import { useState } from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import Add from "@mui/icons-material/Add";

const Title = styled(Typography)`
  &.MuiTypography-root {
    font-weight: bold;
    font-size: 18px;
    color: darkblue;
    text-transform: uppercase;
  }
`;

const Spacer = styled.hr`
  color: black;
  border: 1px solid lightgrey;
`;

const FirstAndLastNameContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const InputContainer = styled(FormGroup)`
  margin: 15px auto;
  flex: 0.5;

  &.MuiFormGroup-root:first-child {
    margin-right: 10px;
    flex: 1;
  }

  &.MuiFormGroup-root:nth-child(2) {
    flex: 1;
  }
`;

const App: React.FC<any> = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [touchedFirstName, setTouchedFirstName] = useState(false);
  const [touchedLastName, setTouchedLastName] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [touchedConfirmPassword, setTouchedConfirmPassword] = useState(false);

  return (
    <Container>
      <Box></Box>
      <Title variant="h6" typeof="negative">
        Sign Up
      </Title>
      <Spacer />
      <FirstAndLastNameContainer>
        <InputContainer>
          <TextField
            variant="filled"
            label="First Name"
            id="first-name"
            type="text"
            error={touchedFirstName && firstName.length < 3}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={() => setTouchedFirstName(true)}
          />
        </InputContainer>
        <InputContainer>
          <TextField
            variant="filled"
            label="Last Name"
            fullWidth
            id="last-name"
            type="text"
            error={touchedLastName && lastName.length < 3}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={() => setTouchedLastName(true)}
          />
        </InputContainer>
      </FirstAndLastNameContainer>
      <InputContainer>
        <TextField
          variant="filled"
          label="Email"
          fullWidth
          id="email"
          type="email"
          error={touchedEmail && lastName.length < 6}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouchedEmail(true)}
        />
      </InputContainer>
      <FirstAndLastNameContainer>
        <InputContainer>
          <TextField
            variant="filled"
            label="Password"
            fullWidth
            id="password"
            type="password"
            error={touchedConfirmPassword && lastName.length < 3}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setTouchedPassword(true)}
          />
        </InputContainer>
        <InputContainer>
          <TextField
            variant="filled"
            label="Confirm Password"
            fullWidth
            id="confrim-password"
            type="password"
            error={touchedPassword && lastName.length < 3}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => setTouchedConfirmPassword(true)}
          />
        </InputContainer>
      </FirstAndLastNameContainer>
      <Button aria-label="Add">
        <Add />
      </Button>
    </Container>
  );
};

export default App;
