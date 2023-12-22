import * as React from "react";
import { Button, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import "../index.css";
import { useState } from "react";


const InputGroup = () => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  function handleWordChange(e) {
    setWord(e.target.value);
  }
  function handleMeaningChange(e) {
    setMeaning(e.target.value);
  }
  function alert() {
    console.log(word, meaning)
  }
  return (
    <>
      <Grid
        maxWidth="sm"
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <br />
        <TextField
          id="outlined-basic"
          label="Word"
          variant="outlined"
          style={{ marginTop: "10px" }}
          value={word}
          onChange={handleWordChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Meaning"
          variant="outlined"
          onChange={handleMeaningChange}
          value={meaning}
        />
        <br />
        <Button variant="contained" onClick={alert}>
          Add word
        </Button>
      </Grid>
    </>
  );
};

export default InputGroup;
