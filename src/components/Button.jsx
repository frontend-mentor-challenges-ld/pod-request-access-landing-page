import styled from "styled-components";
import { TextPreset3 } from "../styling/TextStyles";

const ButtonContainer = styled.button`
  padding: var(--spacing-8) var(--spacing-32);
  background-color: var(--green);
  color: var(--blue-950);
  border-radius: 2.8rem;
  transition: all ease-in 0.3s;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #a9f3d7;
  }
`;

function Button({ children }) {
  return (
    <ButtonContainer>
      <TextPreset3>{children}</TextPreset3>
    </ButtonContainer>
  );
}

export default Button;
