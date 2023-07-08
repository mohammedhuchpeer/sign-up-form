import { useState } from "react";
import MuiSelect, {
  SelectProps,
  SelectChangeEvent,
} from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Paper, Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";

const StyledSelect = styled(MuiSelect)<SelectProps>`
  &.MuiInputBase-root {
    &.Mui-focused {
      border: 1px solid #6b63a1;
    }
  }
`;

const StyledInputLabel = styled(InputLabel)`
  &.MuiFormLabel-root {
    &.Mui-focused {
      color: #000000;
    }
  }
`;

interface SelecCompoenttProps {}

const Select: React.FC<SelecCompoenttProps> = () => {
  const [age, setAge] = useState("");

  const onChangeHandler = (event: SelectChangeEvent<unknown>) => {
    setAge(event.target.value as string);
  };

  return (
    <Paper elevation={2} sx={{ padding: "35px" }}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <FormControl fullWidth>
            <StyledInputLabel id="demo-simple-select-label" variant="filled">
              Age
            </StyledInputLabel>
            <StyledSelect
              labelId="demo-simple-select-label"
              id="demo-select"
              label="Age"
              value={age}
              onChange={onChangeHandler}
              variant="filled"
              disableUnderline
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={40}>40</MenuItem>
            </StyledSelect>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Select;
