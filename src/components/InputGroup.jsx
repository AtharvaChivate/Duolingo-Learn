import * as React from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import "../index.css";
import { useState } from "react";
import { Grid } from "@mui/material";

const InputGroup = () => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  function handleWordChange(e) {
    setWord(e.target.value);
  }

  function handleMeaningChange(e) {
    setMeaning(e.target.value);
  }

  function handleClick() {
    console.log(word, meaning);
  }

  return (
    <div>
      <div style={{ minHeight: "100vh" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "80vh" }}
        >
          <br />
          <Container
            sx={{
              boxShadow:
                "0px 10px 36px 0px rgba(0, 0, 0, 0.16), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)",
              width: "400px",
              height: "400px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "white",
            }}
          >
            <Typography variant="h4">Add a word</Typography>
            <TextField
              id="outlined-basic"
              label="Word"
              variant="outlined"
              style={{
                marginTop: "10px",
                boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
                zIndex: "1",
              }}
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
              style={{
                marginTop: "10px",
                boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
              }}
            />
            <br />
            <Button
              variant="contained"
              onClick={handleClick}
              style={{
                marginTop: "10px",
                boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
              }}
            >
              Add word
            </Button>
          </Container>
        </Grid>
      </div>
    </div>
  );
};

export default InputGroup;
