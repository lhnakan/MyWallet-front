import { css } from 'styled-components';

export default css`
    body{
        background: #9258BE;
        color: #FFF;

        font-family: 'Raleway', sans-serif;
    }

    h1 {
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;                
    }
    h2 {
        font-size: 26px;
        font-weight: 700;
    }  

    button {
        background: #A328D6;
        font-weight: 700;
    }
    a {
        font-family: 'Raleway', sans-serif;
        font-size: 15px;
        font-weight: 700;
    }
    form{
        margin: 30px 0px;
        * {
            font-family: inherit;
            width: 100%;
            height: 60px;
            margin: 5px 0px;
            font-size: 20px;
            padding: 15px;
            border-radius: 5px;
        }
    }
`;