import styled from 'styled-components'


export const ImageCard = styled.div`
    border-radius: 4px;
    color: #666;
    overflow: hidden;
    transition: 0.3s;

    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
`

export const CardBody = styled.div`
    padding: 15px;

`

export const CardTitle = styled.h3`
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        font-weight: normal;
        text-align: center;
        margin-top: 5px;
`
export const Image = styled.img`
    width: 100%;
    height: 100px;
    object-fit: cover;
`