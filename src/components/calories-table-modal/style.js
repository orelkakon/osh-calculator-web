import styled from 'styled-components'

export const FullPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    direction: rtl;
`;

export const Table = styled.table`
    border: 4px solid black;
    border-radius: 15px;
    box-shadow: 2px 2px black;
    width: 100%;
    font-size: x-large;
    font-weight: bold;
`;

export const TR = styled.tr`

`;

export const TD = styled.td`
    color: ${props => props.color}
`;