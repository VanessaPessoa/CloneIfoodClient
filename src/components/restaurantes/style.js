import styled from 'styled-components'


export const Box = styled.div`
    display: grid;
    margin: 2% 5%;
    width: 90%;
    grid-template-columns:33% 33% 33%;
    grid-column-gap: 0.33%;
    /* grid-template-rows: o;    */
`

export const Card = styled.a`
    margin: auto 2% 5%;
    display: flex;
    border: 1px solid #dcdcdc;
    padding: 3%;
    border-radius: 2px;
   
    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .img-restaurante{
        width: 30%;
       
    }

    .img{
        width: 100%;
        height: 60px;
        border-radius: 8px;
    }

    div{
        position: relative;
        margin-left: 3%;
        height: 60px;
        border-left: 1px solid #dcdcdc;
        padding-left: 3%;
    }

`

export const Title = styled.h1`
    margin-left: 5%;
    margin-top: 3%;
    color: brown;
    font-family: 'Open Sans', sans-serif;
`