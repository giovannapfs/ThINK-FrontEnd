import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import Menu from '../../../components/admin/menuDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faL } from '@fortawesome/free-solid-svg-icons';
import { BallTriangle } from "react-loader-spinner";

import '../../../styleGlobal.css';
import './index.css'

import Admin1 from "../../../assets/crudAdmin/admin1.png";
import Admin2 from "../../../assets/crudAdmin/admin2.png";
import Admin3 from "../../../assets/crudAdmin/admin3.png";

export default function CrudAdmin() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
   
    const navigate = useNavigate();

    const openModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
          setSelectedImage(file);
        }
      };
    
    return (
        <div>
            <Menu/>
            <section>
                <div className="tituloDashboard">
                    <h1>Administrado<span className="span-color-dashboard">res</span></h1>
                </div>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    id="modal-admin"
                    contentLabel="Adicionar administrador"
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                        },
                        content: {
                            top: '50%', 
                            left: '50%', 
                            transform: 'translate(-50%, -50%)', 
                            border: "none",
                            backgroundColor: "transparent",
                            height: '100%',
                            padding: '0'
                        },
                    }}
                >
                    <form className="form modal-admin">
                        <h4>Adicionar administrador</h4>
                        <div className="container-admin-modal-group">
                            <div className="form-group">
                                <label>Nome:</label>
                                <input
                                    className="input inputAdmin"
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    placeholder="Nome"
                                />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    className="input inputAdmin"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="example@email.com"
                                />
                            </div>
                            <div className="file" >
                                <div>
                                    <div className="fileLabel">
                                        <label>Foto:</label>
                                        <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageSelect}
                                        style={{ display: 'none' }}
                                        id="imageInput"
                                        />

                                        <label htmlFor="imageInput" className="iconFile">
                                            <FontAwesomeIcon className='icon-file' icon={faDownload} color="white" size="50px" />
                                        </label>
                                    </div>
                                    {selectedImage && (
                                        <p className='txt-white photo'>{selectedImage.name}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    
                        <div className="flex" id="btns">
                            <button type="submit" className="btn btn-adicionarADM" onClick={closeModal}>Adicionar</button>
                            <button className="btn btn-cancelarAdmin" onClick={closeModal}>Cancelar</button>
                        </div>
                    </form>
                </Modal>
                <div className="perfis">
                <div className="perfil">
                    <div className="perfilAdmin">
                        <img src={Admin1} className="iconeAdmin" alt="ícone de administrador"></img>
                        <h2>Skye</h2>
                        <p>Tatuadora</p>
                    </div>
                    <div className="perfilAdmin">
                        <img src={Admin2} className="iconeAdmin" alt="ícone de administrador"></img>
                        <h2>Dom</h2>
                        <p>Tatuador</p>
                    </div> 
                    <div className="perfilAdmin">
                        <img src={Admin3} className="iconeAdmin" alt="ícone de administrador"></img>
                        <h2>Mia</h2>
                        <p>Tatuadora</p>
                    </div> 
                </div>
            </div>
            </section>
            <div className="btnAdicionar admin">
                <button onClick={(e) => openModal(e)} className="btnCrud">Adicionar</button>
            </div>

            
        </div>
    );
}
