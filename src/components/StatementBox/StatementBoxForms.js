import styled from 'styled-components';

export const TradesContainer = styled.main`
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
    }    

    ul {
        width: 100%;
        flex-grow: 1;
    }
    
    
`;

export const Trade = styled.li`    
    display: flex;
    margin: 10px 0;

    div {
        flex-grow: 1;
        margin-left: 5px;

        span {
            color: ${({ type }) => (type === "entrada" ? 'green' : 'red' )}
        }
    }

    
`;