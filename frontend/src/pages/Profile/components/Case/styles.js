import styled from "styled-components";
import { Paper } from "@material-ui/core";

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
