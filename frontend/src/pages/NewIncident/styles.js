import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const NewIncidentContainer = styled.div`
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
