import React, { useState } from "react";
import logoImg from "../../assets/logo.svg";
import styled from "styled-components";
import { Typography, Button, Paper, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

export const CityUf = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
`;

const RegisterContainer = styled.div`
  background-color: #f0f0f5;
  font: 400 20px Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  outline: 0;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  margin-left: 30px;
`;

export const SectionStyled = styled(Paper)`
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
`;

export const ContentRegister = styled.div`
  max-width: 380px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

export const ImgStyled = styled.img`
  margin-bottom: 30px;
`;

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    const data = { name, email, whatsapp, city, uf };
    try {
      const response = await api.post("ongs", data);
      alert(`Seu ID de acesso : ${response.data.id}`);
      history.push("/");
    } catch (e) {
      alert(`Erro no cadastro, tente novamente`);
    }
  }

  const history = useHistory();
  const goToLogin = event => {
    event.preventDefault();
    history.push("/");
  };
  return (
    <RegisterContainer>
      <SectionStyled>
        <ContentRegister>
          <ImgStyled src={logoImg} alt="Be the Hero" />
          <Typography variant="h4" component="h2">
            Cadastro
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </Typography>

          <Button onClick={goToLogin} size="small" color="primary">
            Já possui cadastro? Clique aqui
          </Button>
        </ContentRegister>
        <div>
          <FormStyled onSubmit={handleRegister}>
            <TextField
              label="Nome da ONG"
              variant="outlined"
              size="small"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              label="WhatsApp"
              variant="outlined"
              size="small"
              type="tel"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
            <CityUf>
              <TextField
                label="Cidade"
                variant="outlined"
                size="small"
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
              <TextField
                label="UF"
                variant="outlined"
                size="small"
                type="text"
                value={uf}
                onChange={e => setUf(e.target.value)}
              />
            </CityUf>
            <Button type="submit" color="secondary" variant="contained">
              Cadastrar
            </Button>
          </FormStyled>
        </div>
      </SectionStyled>
    </RegisterContainer>
  );
}
