import styled from 'styled-components';
import Colors from '../../../config/colors';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    text-align: center;

    span {
        font-weight: bold;
        color: ${Colors.black};
    }
`;

export default Container;
