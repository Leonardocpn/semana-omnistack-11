import React, { useEffect, useState } from "react";
import { Typography, Paper, IconButton } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import styled from "styled-components";
import api from "../../../services/api";

export const CaseContainer = styled(Paper)`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const TextFormat = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`;

export default function Case() {
  const [incidents, setIncidents] = useState([]);
  const ongId = localStorage.getItem("ongId");
  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function HandleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert("Erro ao deletar o caso, tente novamente.");
    }
  }

  return (
    <>
      {incidents.map(incident => (
        <CaseContainer key={incident.id}>
          <TextFormat>
            <Typography variant="subtitle2">CASO:</Typography>
            <Typography color="textSecondary" variant="body1">
              {incident.title}
            </Typography>
            <Typography variant="subtitle2">DESCRICAO</Typography>
            <Typography color="textSecondary" variant="body1">
              {incident.description}
            </Typography>
            <Typography variant="subtitle2">VALOR:</Typography>
            <Typography color="textSecondary" variant="body1">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </Typography>
          </TextFormat>
          <div>
            <IconButton
              edge="end"
              color="secondary"
              size="medium"
              onClick={() => HandleDeleteIncident(incident.id)}
            >
              <Delete />
            </IconButton>
          </div>
        </CaseContainer>
      ))}
    </>
  );
}
