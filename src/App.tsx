import Container from "@mui/material/Container";
import Select from "components/select/Select";
import SignUp from "containers/sign-up";

const App: React.FC = () => {
  return (
    <Container style={{ padding: "10px" }} maxWidth="md">
      <SignUp />
      <Select />
    </Container>
  );
};

export default App;
