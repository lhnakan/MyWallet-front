import styled from 'styled-components';



const LoginBox = styled.div`
    text-align: center;
    form{
        margin: 30px 0px;
        * {
            width: 100%;
            height: 60px;
            margin: 5px 0px;
            font-family: 'Raleway', sans-serif;
            font-size: 20px;
            padding: 15px;
            border-radius: 5px;
        }

        button{
            color: #FFF;
            background: #A328D6;
            font-weight: 700;
        }
    }

    a {
        font-family: 'Raleway', sans-serif;
        font-size: 15px;
        font-weight: 700;
    }
`;



export default LoginBox;