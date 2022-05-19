import styled from 'styled-components'
import { isMobile } from 'react-device-detect';

export const FullPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${isMobile ? '10px' : '10px'};
    width: ${isMobile ? '100%' : '14%'};
    height: ${isMobile ? '100%' : '14%'};
    font-size: small;
`;