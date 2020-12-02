import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: radial-gradient(circle at 0%,#fff,#fdedee 0%,#fdedee 70%,#fff 0%);

    button:hover{ cursor: pointer; }
`

export const Ilustracao = styled.img`
    position: absolute;
    left: 5%;
    bottom: 20%;
    height: 60%;
`

export const Logo = styled.img`
    position: absolute;
    left: 5%;
    top: 10%;
    height: 70px;
`

export const Form = styled.form`
    position: absolute;
    right: 5%;
    top: 10%;
    background: #fff;
    width: 40%;
    padding: 5%;
    border-radius: 16px;

    h2{
        text-align: center;
        font-family: 'Roboto', sans-serif;
        color: #414143;
        font-size: 32px;
        margin-bottom: 5%;
    }

`
export const Input = styled.input`
    width: 80%;
    margin: 2% 10% 0;
    height: 40px;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    padding-left: 3%;
    font-family: 'Roboto', sans-serif;

`
export const Button = styled.button`
    width: 80%;
    margin: 2% 10% 0;
    background: transparent;
    height: 40px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #414143;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2);

    &:hover{
        background: brown;
        color: white;
        cursor: pointer;
    }
`


