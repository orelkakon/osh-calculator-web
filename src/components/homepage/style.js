import styled from 'styled-components'

export const FullPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: linear-gradient(to top, black 0%, silver 100%);
    width: 100vw;
    height: 100vh;
    position: fixed;
`;

export const Title = styled.h1`
    font-size: 60px;
    color: white;
`;

export const SubTitle = styled.h1`
    font-size: 25px;
    color: white;
    margin: 0;
`;