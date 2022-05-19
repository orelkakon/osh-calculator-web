import styled from 'styled-components'
import { isMobile } from 'react-device-detect';

export const FullPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${props => `${isMobile ? props.margin[0] : props.margin[1]}`};
    height: ${props => `${isMobile ? props.height[0] : props.height[1]}`};
    width: ${props => `${isMobile ? props.width[0] : props.width[1]}`};
    font-size: small;
`;