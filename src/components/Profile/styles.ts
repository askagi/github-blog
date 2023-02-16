import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 3.2rem 4rem;
    background: ${({ theme }) => theme["base-profile"]};
    border-radius: 10px;
    margin-top: calc(0px - 10rem - 6px);
`;

export const Body = styled.div`
    display: flex;
    gap: 3.2rem;
`;

export const Avatar = styled.img`
    width: 14.8rem;
    height: 14.8rem;
    border-radius: 8px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const InfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: -2.5rem;
`;

export const Username = styled.h1`
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;
    color: ${({ theme }) => theme["base-title"]};
`;

export const Link = styled.a`
    text-decoration: none;
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.blue};

    display: flex;
    align-items: center;
    gap: 0.8rem;
`;

export const Description = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 160%;
    color: ${({ theme }) => theme["base-text"]};
`;

export const InfoFooter = styled.footer`
    display: flex;
    justify-items: flex-end;
    justify-self: flex-end;
    vertical-align: bottom;
`;

export const ListItems = styled.ul`
    list-style: none;
    display: flex;
    gap: 2.4rem;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`;
