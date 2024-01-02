import './Cuadroextra.css'
import { useState } from 'react'

export default function CuadroextraCt(){

    const [modal,setModal] = useState(false);
    const toggleModal = ()=>{
        setModal(!modal)
    }

    const crearDt =async(e)=>{
        const formInfo= new FormData(e.target)

        formInfo.append("imagen",e.target[2].value)

        let resultado = await fetch("http://localhost:4000/creardt",{
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
                <a id="btnCT" href='#agregarCT' onClick={toggleModal} title="Agregar jugador" ><i className="fa-solid fa-circle-plus"></i></a>
        </div>

        {modal && (
            <dialog className="modal overlay1 modal-content" id="agregarCT">
                <h2>Agregar un miembro del cuerpo técnico a la plantilla</h2>
                <form onSubmit={crearDt}>
                    <label className='mt-4 me-3'>Nombre</label>
                    <input type="text" placeholder="Nombre del miembro" name="nombre"/><br/>

                    <label className='mt-4 me-3'>Apellido</label>
                    <input type="text" placeholder="Apellido del miembro" name="apellido"/><br/>

                    <label className='mt-4 me-3' htmlFor="formFile">Subir imagen</label>
                    <input type="file" name='imagen'/><br/>
                    <input className="btn btn-success mt-4 me-4" type="submit"  value={"Cargar"}/>
                    <button className='mt-4 btn btn-danger' id="btnCanelar" onClick={toggleModal}>Cancelar</button>
                </form>
            </dialog>
        )}
        </>
    )
}