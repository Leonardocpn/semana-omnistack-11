import React from "react";
import Header from "./components/Header";
import { Typography } from "@material-ui/core";
import Case from "./components/Case";
import { ProfileContainer, CaseContainer } from "./styles";

export default function Profile() {
  return (
    <ProfileContainer>
      <Header />
      <Typography variant="h5">Casos Cadastrados</Typography>
      <CaseContainer>
        <Case />
      </CaseContainer>
    </ProfileContainer>
  );
}
