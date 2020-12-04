import styled from 'styled-components';

const Trade = styled.li`    
    display: flex;
    margin: 10px 0;

    div {
        flex-grow: 1;
        margin-left: 5px;

        span {
            color: ${({ type }) => (type === "input" ? 'green' : 'red' )}
        }
    }
`;

export default Trade;