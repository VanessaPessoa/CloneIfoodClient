import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #F2F2F2;

    p{
        position: absolute;
        left: 10%;
        width: 30%;
        font-size: 26px;
        top: 60%;
        font-family: 'Roboto', sans-serif;
        color: #747474;
    }

    .ilustre{
        position: absolute;
        right: 10%;
        width: 40%;
        top: 25%;
    }
`

export const Title = styled.h1`
    position: absolute;
    left: 10%;
    width: 30%;
    font-size: 52px;
    top: 25%;
    font-family: 'Roboto', sans-serif;
    color: #414143;
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
    position: absolute;
    bottom: 15%;
    width: 30%;
    margin: 4% 10% 0;
    background: brown;
    height: 50px;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2);

    &:hover{
        cursor: pointer;
    }
`
export const Box = styled.div`
    width: 50%;
    margin: 5% auto;
`


export const Nav = styled.nav`
    width: 100%;
    height: 80px;
    border-bottom: 8px solid #E0E0E0;
    display: flex;
    align-items: center;    
    a{
        width: 15%;
        height: 90%;
        margin: auto;
    }

    img{
        position: relative;
        height:100%;
    }

    button{
        border: none;
        background: transparent;
        margin-left: 5%;
        height: 50%;
    }
    button:hover{
        cursor: pointer;
    }


`

export const Info = styled.div`
    h3{
        font-family: 'Open Sans', sans-serif;
        font-size: 42px;
        color: #232323;
    }
    p{
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        color: #737373;
    }
`

export const FormCadastro = styled.form`
    width: 100%;
    margin: 2% 0 0;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .input-cadastro,
    .input-cadastro-textarea{
        width: 100%;
        border: 1px solid #dcdcdc;
        border-radius: 8px;
        padding-left: 3%;
        font-family: 'Roboto', sans-serif;
        margin-top: 2%;
    }
    .input-cadastro{
        height: 40px;
    }
    .form-group{
        width: 100%;
    }
    .form-group,
    .form-group-meio,
    .form-group-rua,
    .form-group-numero{
        margin: 15px 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .form-group-meio{
        width: 31%;
    }
    .form-group-rua{
        width: 80%;
    }
    .form-group-numero{
        width: 18%;
    }

    label{
        margin-bottom: 5px;
    }

    .check label{
        margin-left: 5px;
    }

    button{
        width: 20%;
        height: 50px;
        background: rgb(220, 220, 220);
        border:none;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: bolder;
    }
    button:hover{
        cursor:pointer;
    }
`
export const Check = styled.div`
    margin: 3% 10%;
    position: relative;
   
    label{
        margin-left: 2.5%;
        font-family: 'Roboto', sans-serif;
        color: #414143;
    }
`


