import styled from "styled-components";

export const Container = styled.div`
    margin-top: 7.2rem;
`;

export const InputSearchComponent = styled.input`
    width: 100%;
    background: ${({ theme }) => theme["base-input"]};
    border: 1px solid ${({ theme }) => theme["base-border"]};
    border-radius: 6px;

    padding: 1.6rem 1.2rem;

    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme["base-text"]};

    &::placeholder{
        color: ${({ theme }) => theme["base-label"]};
    }
`;

export const PublicationsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-auto-rows: 26rem; */
    grid-gap: 3.2rem;
    margin-top: 4.8rem;
`;

export const Post = styled.div`
    padding: 3.2rem;
    background: ${({ theme }) => theme["base-post"]};
    border-radius: 10px;

    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
    
    p {
        display: block;
        margin-top: 2rem;
        font-size: 1.6rem;
        line-height: 160%;

        color: ${({ theme }) => theme["base-text"]};
    }
`
