import styled from "styled-components";
import header_bg from "../../assets/header-bg.png";

export const Container = styled.header`
    width: 100%;
    height: 29.6rem;
    background: url(${header_bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    justify-content: center;
    padding-top: 6.4rem;
    padding-bottom: 4.6rem;
`;

export const Logo = styled.img`
    width: 14.8rem;
    height: 9.8rem;
`;