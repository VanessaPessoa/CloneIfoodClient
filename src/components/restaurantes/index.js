import React, {Component, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Title, Card, Box} from './style'

import api from '../../services/api'

import Foto from '../../assets/img/especialidade/arabe.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/slide.css"

function ListEspecialidade() {
    const [restaurante, setRestaurante] = useState([]);
    const [carregando , setCarregando] = useState(true);
    const config = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };

  
      async function Restaurante(){
        var config = {
            method: 'get',
            url: `api/restaurante`
          };
          
          api(config)
          .then(function (response) {
            setRestaurante(response.data.data);
            setCarregando(false);
          })
          .catch(function (error) {
            console.log(error);
          });
    } 

    useEffect(() => {
      // Atualiza o titulo do documento usando a API do browser
     if(carregando){
       Restaurante();
     }
    }, []);
  
    return (
      <div>
        {!carregando && (
          <div>
            <Title> Restaurantes </Title>
            <Box>
                {restaurante.map((x, i) => {
                    return <Card key={i}>
                          <picture className="img-restaurante">
                            <source className="img" srcset={x.imagem} />
                            <img className="img" src={Foto} alt="..." />
                          </picture>
                            <div>
                                <h3> {x.nomeRestaurante} </h3>
                                <p> {x.especialidade} </p>
                                <p>{x.hora_abertura} às {x.hora_fechamento}</p>
                            </div>
                        </Card>
                    })} 
            </Box>
          </div>
        )}
      </div>
    );
  
}

export default ListEspecialidade;
