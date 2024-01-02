import './Cuadroextra.css'
import { useState } from 'react'

export default function CuadroextraDef(){

    const [modal,setModal] = useState(false);
    const toggleModal = ()=>{
        setModal(!modal)
    }

    const crearDefensor =async(e)=>{
        const formInfo= new FormData(e.target)

        formInfo.append("imagen",e.target[2].value)

        let resultado = await fetch("http://localhost:4000/creardefensor",{
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
                <a id="btnDefensor" href='#agregarDefensor' onClick={toggleModal} title="Agregar jugador" ><i className="fa-solid fa-circle-plus"></i></a>
        </div>
        
        {modal && (
            <dialog className="modal overlay1 modal-content" id="agregardefensor">
                <h2>Agregar un defensor a la plantilla</h2>
                <form onSubmit={crearDefensor}>
                    <label className='mt-4 me-3'>Nombre</label>
                    <input type="text" placeholder="Nombre del defensor" name="nombre"/><br/>

                    <label className='mt-4 me-3'>Apellido</label>
                    <input type="text" placeholder="Apellido del defensor" name="apellido"/><br/>

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