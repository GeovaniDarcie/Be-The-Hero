import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import LogoImg from "../../assets/logo.svg";

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory(); 

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

                    <Link to="/profile" className="back-Link">
                        <FiArrowLeft size={16} color="#E02041" />
                            Voltar para home
                    </Link>
                </section>    
                    <form onSubmit={handleNewIncident}> 
                        <input
                            placeholder="Título do caso"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        >    
                        </input>
                        <textarea type="email" 
                            placeholder="Descrição"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        >
                        </textarea>
                        <input 
                            placeholder="Valor em reais"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        >   
                        </input>

                        <button className="button" type="submit">Cadastrar</button>
                    </form>
            </div>
        </div>
    );
}