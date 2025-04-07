import styled from "styled-components";
import { TextPreset3 } from "../styling/TextStyles";

const InputElement = styled.input`
  background-color: var(--blue-900);
  border: none;
  border-radius: 2.8rem;
  padding: var(--spacing-16) var(--spacing-32);
  color: var(--white);
  font-size: 1.4rem;
  line-height: 200%;
  font-weight: var(--fw-bold);

  &::placeholder {
    font-size: 1.4rem;
    line-height: 200%;
    font-weight: var(--fw-bold);
    color: rgba(255, 255, 255, 50%);
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

function Input() {
  return (
    <InputElement
      type="email"
      name="email"
      id="email"
      placeholder="Email address"
    />
  );
}

export default Input;
