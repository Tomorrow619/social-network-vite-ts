import styled from "styled-components";


export const SBadge = styled.span`

  background-color: white;
  color:${(props) => props.theme.color.textColor};
        
  display: none;
    
  background-color: white;
  color: ${(props) => props.theme.color.textColor};



 
  padding: 5px;
  background-color: ${(props) => props.theme.color.primeColor};
  border-radius: 50px;
  height: 25px;
  text-align: center;
  color: white;

  line-height: 14px; //? 12 - 1440 | 14 - 1920
  font-size: 14px; //? 12 - 1440 | 14 - 1920
  flex: 0 1 25px;
  transition: 200ms;



`