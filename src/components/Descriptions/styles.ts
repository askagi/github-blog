import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
`;

export const Title = styled.h5`
    flex-wrap: wrap;
    flex: 2;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 160%;
    color: ${({ theme }) => theme["base-title"]};
`;

export const Subtitle = styled.span`
    flex: 1;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 160%;
    color: ${({ theme }) => theme["base-span"]};
    text-align: right;
`;