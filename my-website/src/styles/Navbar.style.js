import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "90px" ) };
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;
export const LeftContainer = styled.div`
  flex: 80%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;
export const RightContainer = styled.div`
  flex: 20%;
  display: flex;
  align-items: flex-end;
  padding-left: 5%;
`;
export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: baseline;
`;
export const NavbarLinkContainer = styled.div`
display: flex;
`;
export const NavbarLink = styled(Link)`
font-family: 'Heebo', sans-serif;
font-weight: 400;
color:#212121;
text-decoration: none;
margin: 0px 50px 0px 0px;
@media (max-width: 700px) {
  display: none;
}
`;
export const NavbarLinkExtended = styled(Link)`
font-family: 'Heebo', sans-serif;
font-weight: 400;
color:#212121;
text-decoration: none;
margin: 20px;
`;
export const Logotype = styled.div`
font-family: 'Vibur', cursive;
font-size: 2.2em;
font-weight: 700;
color: #212121;
margin: 30px;
`;
export const OpenLinksButton = styled.button`
width: 70px;
height: 50px;
background: none;
border: none;
color: #212121;
font-size: 45px;
cursor: pointer;
@media (min-width: 700px) {
  display: none;
}
`;
export const NavbarExtendedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 700px) {
  display: none;
}
`;
