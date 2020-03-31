import React, { useState } from "react";
import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";
import { Typography, TextField, Button, Paper } from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

const LoginContainer = styled.div`
  background-color: #f0f0f5;
  font: 400 20px Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  margin: 0 auto;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Sectiontyled = styled(Paper)`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 80px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 350px;
`;

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
