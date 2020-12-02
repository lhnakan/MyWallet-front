import styled from 'styled-components';

const BalanceContainer = styled.div`
    height: 100vh;
    padding: 0 20px;
    display: flex;
    flex-direction: column;

    * {
        border-radius: 5px;
    }

    header, footer {
        display: flex;
        align-itens: center;
        justify-content: space-between;
        margin: 20px 0px;
    }

    & > div {
        display: flex;
        align-items: center;
        text-align: center;
        background: #FFF;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        color: #000000;
        flex-grow: 1;
        padding: 30px;
    }

    button {
        font-weigth: bold;
        width: 47%;
        height: 30vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
    }

    span {
        color: rgb(125, 125, 125)
    }
`;

export default BalanceContainer;