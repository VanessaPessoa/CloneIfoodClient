import styled from 'styled-components'

export const Nav = styled.nav`
    position: relative;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E0E0E0;

    .box{
        display: flex;
        align-items: center;
    }

    h1{
        font-size: 20px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
        color: #666666;
    }

    img{
        position: relative;
        width: 50px;
        margin-left: 20px;
        margin-right: 20px;
        height: 50px;
    }

    .funcionamento{
        background-color: #7F92A4;
        color: #fff;
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
    }
`

export const Sidebar = styled.div`
    width: 80px;
    background-color: #7F92A4;
    position: fixed;
    height: calc( 100vh - 70px);
    button{
        width: 100%;
        background-color: transparent;
        border: none;
        color: #fff;
        margin-top: 2rem;
    }

    button img{
        width: 40%;
    }

    li.bottom{
        position: absolute;
        bottom: 1%;
    }   

    
    li.bottom img{
        width: 80%;
        margin-left: 10%;
    }   
`
export const Container = styled.div`
    position: absolute;
    left: 150px;
    top: 100px;
    width: 85%;

    .relative{
        position: relative;
    }
`


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

    &:hover{
        cursor: pointer;
    }
`
