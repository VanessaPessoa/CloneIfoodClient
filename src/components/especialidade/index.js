import React, {Component} from 'react'
import Slider from "react-slick";

import {Image, ImageCard, CardBody, CardTitle} from './style'


import Acai from '../../assets/img/especialidade/acai.jpg'
import Salgado from '../../assets/img/especialidade/lanche.jpg'
import Brasileira from '../../assets/img/especialidade/brasileira.jpg'
import Doce from '../../assets/img/especialidade/bolo.jpg'
import Africana from '../../assets/img/especialidade/africana.jpg'
import Arabe from '../../assets/img/especialidade/arabe.jpg'
import Alema from '../../assets/img/especialidade/alema.jpg'
import Argentina from '../../assets/img/especialidade/argentina.jpg'
import Bebida from '../../assets/img/especialidade/bebida.jpg'
import Cafeteria from '../../assets/img/especialidade/cafeteria.jpg'
import Carnes from '../../assets/img/especialidade/churrascaria.jpg'
import Chinesa from '../../assets/img/especialidade/chinesa.jpg'
import Congelados from '../../assets/img/especialidade/churrascaria.jpg'
import Colombiana from '../../assets/img/especialidade/colombiana.jpg'
import Coreana from '../../assets/img/especialidade/coreana.jpg'
import Francesa from '../../assets/img/especialidade/francesa.jpg'
import Espanhola from '../../assets/img/especialidade/espanhola.jpg'
import FrutosMar from '../../assets/img/especialidade/frutos-mar.jpg'
import Marmita from '../../assets/img/especialidade/marmita.jpg'
import Mexicana from '../../assets/img/especialidade/mexicana.jpg'
import Lanche from '../../assets/img/especialidade/lanche1.jpg'
import Sucos from '../../assets/img/especialidade/sucos.jpg'
import Sorvete from '../../assets/img/especialidade/sorvete.jpg'
import Saudavel from '../../assets/img/especialidade/saudavel.jpg'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/slide.css"

class ListEspecialidade extends Component {
  render() {

    const config = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };

    const products = [
        {
          img: Acai,
          title: 'Açai',
        },
        {
          img:  Africana,
          title: 'Africana',
        },
        {
          img:  Arabe,
          title: 'Arabe',
        },
        {
          img: Alema,
          title: 'Alemã',
        },
        {
          img:  Argentina,
          title: 'Argentina',
        },
        {
          img:  Bebida,
          title: 'Bebidas',
        },
        {
          img: Brasileira,
          title: 'Brasileira',
        },
        {
          img:  Cafeteria,
          title: 'Cafeteria',
        },
        {
          img:  Carnes,
          title: 'Carnes',
        },
        {
          img: Chinesa,
          title: 'Chinesa',
        },
        {
          img:  Congelados,
          title: 'Congelados',
        },
        {
          img:  Colombiana,
          title: 'Colombiana',
        },
        {
          img:  Coreana,
          title: 'Coreana',
        },
        {
          img:  Doce,
          title: 'Doces e bolos',
        },
        {
          img:  Espanhola,
          title: 'Espanhola',
        },
        {
          img:  Francesa,
          title: 'Francesa',
        },
        {
          img:  FrutosMar,
          title: 'Frutos do mar',
        },
        {
          img:  Marmita,
          title: 'Marmita',
        },
        {
          img:  Mexicana,
          title: 'Mexicana',
        },
        {
          img:  Salgado,
          title: 'Salgados',
        },
        {
          img:  Saudavel,
          title: 'Saudavel',
        },
        {
          img:  Sorvete,
          title: 'Sorvete',
        },
        {
          img:  Lanche,
          title: 'Lanche',
        },
        {
          img:  Sucos,
          title: 'Sucos',
        }
       
    ]

    return (
        <Slider {...config}>
            {products.map((x, i) => {
                return <ImageCard key={i}>
                            <CardBody>
                                <Image src={x.img} ></Image>
                                <CardTitle>{x.title}</CardTitle>
                            </CardBody>
                    </ImageCard>
                })} 
        </Slider>
    );
  }
}

export default ListEspecialidade;
