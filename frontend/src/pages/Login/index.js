import React, { useState } from "react";
import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";
import { Typography, TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { LoginContainer, Sectiontyled, FormStyled } from "./styles";

export default function Login() {
  const [id, setId] = useState("");
  const history = useHistory();
  const goToRegister = event => {
    event.preventDefault();
    history.push("/register");
  };
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("session", { id });
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profile");
    } catch (err) {
      alert("Falha no login, tente novamente");
    }
  }
  return (
    <LoginContainer>
      <Sectiontyled>
        <img src={logoImg} alt="Be the Hero" />

        <FormStyled onSubmit={handleLogin}>
          <Typography variant="h4">Faça seu Login</Typography>
          <TextField
            label="Sua ID"
            variant="outlined"
            size="small"
            value={id}
            onChange={e => {
              setId(e.target.value);
            }}
          />
          <Button type="submit" color="secondary" variant="contained">
            Entrar
          </Button>

          <Button onClick={goToRegister} size="small" color="primary">
            Não possui cadastro? Clique aqui
          </Button>
        </FormStyled>
      </Sectiontyled>
      <img src={heroesImg} alt="Heroes" />
    </LoginContainer>
  );
}
