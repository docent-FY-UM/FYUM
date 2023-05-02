import styled from "styled-components";
import { grey } from "../../../styles/colors";

export const FormContainer = styled.div`
  p {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
  }
`;

export const InputStyle = styled.input`
  width: 330px;
  padding: 5px;
  border-radius: 5px;

  &.contents {
    height: 100px;
  }
`;
