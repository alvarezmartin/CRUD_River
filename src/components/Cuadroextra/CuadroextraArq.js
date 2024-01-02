import './Cuadroextra.css'
import { useState } from 'react'

export default function CuadroextraArq(){

    const [modal,setModal] = useState(false);
    const toggleModal = ()=>{
        setModal(!modal)
    }

    const crearArquero =async(e)=>{
        const formInfo= new FormData(e.target)

        formInfo.append("imagen",e.target[2].value)

        let resultado = await fetch("http://localhost:4000/creararquero",{
            method:"post",
            body:formInfo
        })
        .then((resp)=>{return resp.json})
        .then((data)=>console.log(data))
        .then(window.location.reload())
        .catch((err)=>{console.log(err)})
    }

    return(
        <>
        <div className="cuadro extra">
                <a id="btnArquero" href='#agregarArquero' onClick={toggleModal} title="Agregar jugador" ><i className="fa-solid fa-circle-plus"></i></a>
        </div>
        
        {modal && (
            <dialog className="modal overlay1 modal-content" id="agregarArquero">
                <h2>Agregar un arquero a la plantilla</h2>
                <form onSubmit={crearArquero}>
                    <label className='mt-4 me-3'>Nombre</label>
                    <input type="text" placeholder="Nombre del arquero" name="nombre"/><br/>

                    <label className='mt-4 me-3'>Apellido</label>
                    <input type="text" placeholder="Apellido del arquero" name="apellido"/><br/>

                    <label className='mt-4 me-3' htmlFor="formFile">Subir imagen</label>
                    <input type="file" name='imagen'/><br/>
                    <button className="btn btn-success mt-4 me-4" type="submit">Cargar</button>
                    <button className='mt-4 btn btn-danger' id="btnCanelar" onClick={toggleModal}>Cancelar</button>
                </form>
            </dialog>
        )}
        </>
    )
}