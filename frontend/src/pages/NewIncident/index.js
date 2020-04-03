import React, { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Typography, Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import {
  NewIncidentContainer,
  SectionStyled,
  ContentNewIncident,
  FormStyled,
  ImgStyled,
  PositionButtons
} from "./styles";

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
