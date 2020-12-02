import styled from 'styled-components'

export const Button = styled.button`
    position: relative;
    background-color: transparent;
    border-color: transparent;
    float: right;
    right: 5%;
    margin-top: 3%;
    padding: 0 1.5rem;
    border-radius: 50%;
    font-weight: bold;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    

    color: #666666;
    &:hover{
        cursor: pointer;
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
    .form-group-meio{
        margin: 15px 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .form-group-meio{
        width: 49%;
    }

    label{
        margin-bottom: 5px;
    }

    .check label{
        margin-left: 5px;
    }

    button{
        float: right;
        right:0;
        height: 50px;
        background: rgb(220, 220, 220);
        padding: 0 1.5rem;
        border:none;
        border-radius: 8px;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: bolder;
        margin-right: 15px;
    }
    button.success{
        background-color: green;
        color: #fff;
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

export const Box = styled.div`
    width: 100%;
    top: 80px;
   
   ul{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
   }
`

export const Title = styled.h3`
    position: relative;
    width: 100%;
    top: 100px;
    font-size: 24px;
    color: #666666;
    font-family: 'Roboto', sans-serif;

`

export const ItemPrato = styled.li`
    position: relative;
    list-style-type: none;
    width: 48%;
    margin: 5px 1%;
    border: 1px solid #E0E0E0;
    padding: 1rem;
    display: flex;

    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    img{
        width: 100px;
        height: 80px;
        border-radius: 8px;
    }

    .infos{
        margin-left: 15px;
        font-family: 'Roboto', sans-serif;
    }

    .infos h3{
        font-size: 18px;
        margin-bottom: 10px;
    }

    .infos p{
        font-size: 14px;
    }

    .infos p span{ font-weight: bold}

    .btn-editar{
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 20px;
        height: 20px;
        background-color: transparent;
        border: none;
    }

    .btn-editar:hover{ cursor:pointer;}

    .btn-editar img{
        width: 100%;
        height: 100%;
    }
`