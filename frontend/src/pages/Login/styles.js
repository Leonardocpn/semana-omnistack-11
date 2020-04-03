import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const LoginContainer = styled.div`
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
