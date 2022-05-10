import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  OversizedButtonStyle,
} from "../styles/OversizedButton.styles";


function OversizedButton() {
    const navigate = useNavigate();
   
  return (
   
      <ButtonContainer>
        <OversizedButtonStyle
        onClick={() => {
            navigate(`/components/Form`);
        }}
   
        >
          ENQUIRE HERE
        </OversizedButtonStyle>
      </ButtonContainer>
   
  );
}

export default OversizedButton;
