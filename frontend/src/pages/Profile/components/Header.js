import React from "react";
import { Typography, Button, IconButton } from "@material-ui/core";
import logoImg from "../../../assets/logo.svg";
import styled from "styled-components";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import { useHistory } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
`;

export const StyledImg = styled.img`
  height: 64px;
  margin-right: 30px;
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
  margin-right: 10px;
`;

export default function Header() {
  const ongName = localStorage.getItem("ongName");
  const history = useHistory();
  const goToNewIncident = event => {
    event.preventDefault();
    history.push("/incidents/new");
  };
  function handleLogout() {
    localStorage.removeItem("ongId");
    localStorage.removeItem("ongName");
    history.push("/");
  }

  return (
    <Container>
      <HeaderStyled>
        <StyledImg src={logoImg} alt="Be the Hero" />
        <Typography> Bem vinda, {ongName}</Typography>
        <ButtonContainer>
          <Button
            color="secondary"
            variant="contained"
            onClick={goToNewIncident}
          >
            Cadastrar novo caso
          </Button>
        </ButtonContainer>
        <IconButton onClick={handleLogout} color="secondary" size="medium">
          <PowerSettingsNew fontSize="inherit" />
        </IconButton>
      </HeaderStyled>
    </Container>
  );
}
