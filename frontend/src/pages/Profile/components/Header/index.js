import React from "react";
import { Typography, Button, IconButton } from "@material-ui/core";
import logoImg from "../../../../assets/logo.svg";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import { useHistory } from "react-router-dom";
import {
  HeaderContainer,
  HeaderStyled,
  StyledImg,
  ButtonContainer
} from "./styles";

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
    <HeaderContainer>
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
    </HeaderContainer>
  );
}
