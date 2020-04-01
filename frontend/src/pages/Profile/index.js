import React from "react";
import Header from "./components/Header";
import { Typography } from "@material-ui/core";
import Case from "./components/Case";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f0f0f5;
  font: 400 20px Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;

export const CaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
  background-color: #f0f0f5;
`;

export default function Profile() {
  return (
    <Container>
      <Header />
      <Typography variant="h5">Casos Cadastrados</Typography>
      <CaseContainer>
        <Case />
      </CaseContainer>
    </Container>
  );
}
