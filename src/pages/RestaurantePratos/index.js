import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import {useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Upload from '../../components/Upload'
import FileList from '../../components/FileList'

import More from '../../assets/img/more.png'
import Edit from '../../assets/img/edit.png'

import api from '../../services/api'

import { Button, FormCadastro, Box, Title, ItemPrato} from './style'

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 800,
      backgroundColor: theme.palette.background.paper,
      borderRadius: 8,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    }));

    
  
  
function Home() {
    const id = useSelector(state => state.auth.user.data[0].id); 

    const classes = useStyles();
    const { register, handleSubmit, watch, errors} = useForm();
    const[file, setFile] = useState();
    const[preview, setPreview] = useState();
    const[prato, setPrato] = useState([]);
    const[loading, setLoading] = useState(true);

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function submitFile(files){
        setFile(files[0]);
        setPreview(URL.createObjectURL(files[0]));
    }

    function onSubmit(data){
        var formdata = new FormData();
    
        formdata.append("nome", data.nome);
        formdata.append('fk_restaurante_id', id);
        formdata.append('valor', data.valor);
        formdata.append('descricao', data.descricao);
        formdata.append('imagem', file);
    
        var config = {
            method: 'post',
            url: 'api/restaurante/prato',
            data : formdata
          };
          
          api(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    async function Pratos(){
        var config = {
            method: 'get',
            url: `api/restaurante/pratos/${id}`,
            headers: { }
          };
          
          api(config)
          .then(function (response) {
            setPrato(response.data.data);
            setLoading(false);
          })
          .catch(function (error) {
            console.log(error);
          });
    } 

    useEffect(() => {
        if(!loading){ 
            Pratos()
        }
    });

    return (
        <div>
            <div  className="relative">                
                <Button onClick={handleOpen}>
                    <img src={More} alt ="..." />
                    <span> Adicionar prato</span>
                </Button>
                <Modal
                    open={open}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={modalStyle} className={classes.paper}>
                        <h2> Adicionar novo prato </h2>
                        <FormCadastro onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group-meio">
                                <label>Nome: </label>
                                <input
                                    name="nome"
                                    className="input-cadastro"
                                    ref = { register({required: true})}
                                />
                            </div>
                            <div className="form-group-meio">
                                <label>Valor: </label>
                                <input
                                    className="input-cadastro"
                                    name="valor"
                                    ref = { register({required: true})}
                                />
                            </div>
                            <div className="form-group">
                                <label>Descrição: </label>
                                <input
                                    className="input-cadastro"
                                    name="descricao"
                                    ref = { register({required: true})}
                                />
                            </div>
                            <div className="form-group">
                                <label className="label"> Foto do seu Restaurante</label>
                                <Upload  onUpload={submitFile} />
                                { file && <FileList files={file} preview={preview} /> }
                            </div>

                            <div>
                                <button onClick={handleClose}> Cancelar </button>
                                <button type="submit" className="success"> Salvar </button>
                            </div>
                        </FormCadastro>
                    </div>
                </Modal>
            </div>
            <Title> Seu Cardápio: </Title>
            <Box className="relative">
                <ul>
                    {prato && prato.map((p, i) =>{
                        return <ItemPrato key={i}> 
                            <img src={p.imagem} alt="..." />
                            <div className="infos">
                                <h3> {p.nome} </h3>
                                <p> <span>  Descrição: </span> {p.descricao} </p>
                                <p> <span> Valor: </span> R${p.valor} </p>
                            </div>
                            <button className="btn-editar"> <img src={Edit} /> </button>
                        </ItemPrato>
                    })}
                </ul>
            </Box>
        </div>
    );
}

export default Home;
