import styled from 'styled-components'

export const FullPage = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const Title = styled.p`
    direction: rtl;
    font-size: 45px;
    margin: 0px;
`;

export const SubTitle = styled.p`
    direction: rtl;
    font-size: 25px;
    margin: 0px;
`;

export const Values = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const ButtonsGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const RowData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const RowLine = styled.p`
    font-size: medium;
    font-weight: bold;
    margin: 0;
    color: ${props => props.color};
    @media only screen and (min-width: 960px) {
        font-size: xx-large;
    }
`;

export const SliderTitle = styled.p`
    margin-bottom: 5px;
`;

export const SaveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 30px;
    border-radius: 5px;
    background-color: black;
    color: white;
    margin: 10px;
    cursor: pointer;
    @media only screen and (min-width: 960px) {
        width: 80px;
        height: 40pxx;
        &:hover {
            transform: scale(1.1);
        }
    }
`;