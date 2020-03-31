import React, { useState } from "react";
import logoImg from "../../assets/logo.svg";
import styled from "styled-components";
import { Typography, Button, Paper, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

const NewIncidentContainer = styled.div`
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

export const ContentNewIncident = styled.div`
  max-width: 380px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

export const ImgStyled = styled.img`
  margin-bottom: 30px;
`;

export const PositionButtons = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 10px;
`;

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const history = useHistory();
  const goToProfile = event => {
    event.preventDefault();
    history.push("/profile");
  };
  const ongId = localStorage.getItem("ongId");

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = { title, description, value };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push("/profile");
    } catch (error) {
      alert("Erro ao cadastrar novo Caso");
    }
  }
  return (
    <NewIncidentContainer>
      <SectionStyled>
        <ContentNewIncident>
          <ImgStyled src={logoImg} alt="Be the Hero" />
          <Typography variant="h4" component="h2">
            Cadastrar novo caso
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </Typography>

          <Button onClick={goToProfile} size="small" color="primary">
            Voltar para Casos cadastrados
          </Button>
        </ContentNewIncident>

        <FormStyled onSubmit={handleNewIncident}>
          <TextField
            label="Titulo do caso"
            variant="outlined"
            size="small"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <TextField
            label="Descrição"
            variant="outlined"
            size="small"
            type="text"
            multiline
            rows="6"
            rowsMax="15"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
          <TextField
            label="Valor em reais"
            variant="outlined"
            size="small"
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            required
          />
          <PositionButtons>
            <Button onClick={goToProfile} variant="contained">
              Cancelar
            </Button>
            <Button type="submit" color="secondary" variant="contained">
              Cadastrar
            </Button>
          </PositionButtons>
        </FormStyled>
      </SectionStyled>
    </NewIncidentContainer>
  );
}
