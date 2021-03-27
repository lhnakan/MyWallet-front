import styled from 'styled-components';
import Colors from '../../config/colors';

const TradesContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #FFF;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    color: #000000;
    flex-grow: 1;
    padding: 10px;

    div {
        display: flex;
        justify-content: space-between;
        width: 100%;

        span{
            color: ${({ status }) => ((status !== 'negative') ? `${Colors.green}` : `${Colors.red}`)}
        }
    }    

    ul {
        width: 100%;
        flex-grow: 1;
    }
`;

export default TradesContainer;
