import {useState} from 'react'
import {Nav, FormCadastro, Info, Box} from'./style'
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'
import Logomarca from '../../assets/img/logo.png'
import Back from '../../assets/img/back.png'
import { useHistory } from 'react-router-dom'
import Upload from '../../components/Upload'
import FileList from '../../components/FileList'

import api from '../../services/api'
import especialidade from '../../services/especialidade'
import estado from '../../services/estados'

function ContinuaCadastro() {
    const [file, setFile] = useState();
    const [preview, setPreview] = useState(null);

    const dados = useSelector(state => state.restaurante.restaurante);
    const { register, handleSubmit, watch, errors} = useForm();
    let history = useHistory();

    function onSubmit(data){
        var formdata = new FormData();

        console.log(data);
        formdata.append("nome", data.nome);
        formdata.append("nomeRestaurante", data.nomeRestaurante);
        formdata.append("email", data.email);
        formdata.append("senha", data.senha);
        formdata.append("hora_fechamento", data.hora_fechamento);
        formdata.append("hora_abertura", data.hora_abertura);
        formdata.append("telefone", data.telefone);
        formdata.append("rua", data.rua);
        formdata.append("estado", data.estado);
        formdata.append("cidade", data.cidade);
        formdata.append("descricao", data.descricao);
        formdata.append("dias_funcionamento","S/T");
        formdata.append('especialidade', data.especialidade);
        formdata.append('imagem', file);

        var config = {
            method: 'post',
            url: 'api/restaurante/create',
            headers: { 
                'Content-Type': 'application/json', 
            },
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

    function submitFile(files){
        setFile(files[0]);
        setPreview(URL.createObjectURL(files[0]));
    }
    return (
        <div className="form-group">
            <Nav>
                <button onClick={() => {history.push('/restaurante')}}>
                    <img src = {Back} />
                </button>
                <a> <img src = {Logomarca} /> </a>
            </Nav>
        
            <Box>
                <Info>
                    <h3>Informações da loja</h3>
                    <p>Preencha abaixo as informações sobre a sua futura loja no iFood com os dados do seu negócio</p>
                </Info>

                <FormCadastro onSubmit={handleSubmit(onSubmit)}>
                     <div className="form-group">
                        <label className="label"> Nome </label>
                        <input 
                            className="input-cadastro"
                            name="nome"
                            ref = { register({required: true})} />
                    </div>
                    <div className="form-group">
                        <label className="label"> Nome da loja </label>
                        <input 
                            className="input-cadastro"
                            name="nomeRestaurante"
                            ref = { register({required: true})} />
                    </div>
                    <div className="form-group">
                        <label className="label"> Descrição </label>
                        <textarea
                            rows = "5" 
                            className="input-cadastro-textarea"
                            name="descricao"
                            ref = { register({required: true})}  />
                    </div>
                    <div className="form-group-meio">
                        <label className="label"> Hora de abertura </label>
                        <input  
                            mask= "99:99"
                            className="input-cadastro"
                            name="hora_abertura"
                            ref = { register({required: true})}  />
                    </div>
                    <div className="form-group-meio">
                        <label className="label"> Hora do fechamento </label>
                    <input
                        mask= "99:99" 
                        className="input-cadastro"
                        name="hora_fechamento"
                        ref = { register({required: true})} />
                    </div>
                    <div className="form-group-meio">
                        <label className="label"> Telefone </label>
                        <input
                            mask= "9999-9999" 
                            className="input-cadastro"
                            name="telefone"
                            ref = { register({required: true})} />
                    </div>
                    <div className="form-group-rua">
                        <label className="label">Rua</label>
                        <input 
                            className="input-cadastro"
                            name="rua"
                            ref = { register({required: true})} />
                    </div>
                    <div className="form-group-numero">
                        <label className="label">Número</label>
                        <input 
                            className="input-cadastro"
                            name="numero"
                            ref = { register({required: true})} />
                    </div>
                    <div className="form-group">
                        <label className="label"> Complemento </label>
                        <input 
                            className="input-cadastro"
                            name="complemento"
                            ref = { register} />
                    </div>
                    <div className="form-group">
                        <label className="label"> Ponto de Referência </label>
                        <input
                            className="input-cadastro"
                            name="ponto_referencia"
                            ref = { register } />
                    </div>
                    <div className="form-group-rua">
                        <label className="label"> Cidade </label>
                        <input 
                            className="input-cadastro"
                            name="cidade"
                            ref = { register({required: true})} />
                    </div>
                    <div className="form-group-numero">
                        <label className="label"> Estado </label>
                        <select 
                            className="input-cadastro"
                            name="estado"
                            ref= {register ({required: true})}
                            defaultValue=" ">

                            <option value=" " selected disabled>Estado</option>
                            {estado && estado.map((e, i) =>{
                                return <option value={e.value} key={i}> {e.value}  </option>
                            })}
                            {/* <option value="audi">Audi</option> */}
                        </select>  
                    </div>
                    <div className="form-group">
                        <label >Especialidade </label>
                        <select 
                            className="input-cadastro"
                            name="especialidade"
                            ref= {register ({required: true})}
                            defaultValue=""
                             >
                            <option value="" selected disabled>Especialidade </option>
                            {especialidade && especialidade.map((e, i) =>{
                                     return <option value={e.label} key={i}> {e.label}  </option>
                            })}
                        </select>  
                    </div>        
                
                    <div className="form-group">
                        <label className="label"> Foto do seu Restaurante</label>
                        <Upload  onUpload={submitFile} />
                        { file && <FileList files={file} preview={preview} /> }
                    </div>
                    <div className="form-group">
                        <label className="label">Email </label>
                        <input 
                            type="email"
                            className="input-cadastro"
                            name="email"
                            ref = { register({required: true})} />
                    </div>
                    <div className="form-group">
                        <label className="label">Senha </label>
                        <input 
                            type="password"
                            className="input-cadastro"
                            name="senha"
                            ref = { register({required: true})} />
                    </div>
                    <div className="form-group">
                        <label className="label">Confirmar Senha </label>
                        <input 
                            type='password'
                            className="input-cadastro"
                            name="confirmar"
                            ref={register({ required: true, 
                                validate: (value) => {
                                    return value === watch('senha');
                                }
                              })} 
                              />
                              {errors.confirmar && errors.confirmar.type === "validate" && <span className="error">As senhas não correspondem</span> }
                    </div>
                    
                   
                    <button type="submit"> Enviar </button>
                </FormCadastro>
            </Box>
        </div>
    );
}

export default ContinuaCadastro;
