import React, { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Typography, Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import {
  RegisterContainer,
  SectionStyled,
  ContentRegister,
  ImgStyled,
  FormStyled,
  CityUf
} from "./styles";

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
