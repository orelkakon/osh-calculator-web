import styled from 'styled-components'

export const FullPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: linear-gradient(to top, #696969 0%, silver 100%);
    width: 100vw;
    min-height: 100vh;
`;

export const Square = styled.div`
    height: 90px;
    width: 100%;
    background-color: gray;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const SquareContent = styled.div`
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 70px;
    border-radius: 10px;
    background-color: ${props => props.color};
    font-weight: bold;
`;
