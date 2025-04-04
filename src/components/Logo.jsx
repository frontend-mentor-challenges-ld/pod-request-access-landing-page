import styled from "styled-components";
import { TextPreset3 } from "../styling/TextStyles";

const LogoImageContainer = styled.div`
  height: 5.6rem;
`;

const LogoImage = styled.img`
  height: 100%;
`;

function Logo() {
  return (
    <LogoImageContainer>
      <LogoImage src="/assets/logo.svg" alt="Pod Logo" />
    </LogoImageContainer>
  );
}

export default Logo;
