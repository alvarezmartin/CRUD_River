import './Tarjeta.css'
import { useState } from 'react';

export default function TarjetaDt({data,setDtEliminado}){

    const eliminarDt=async()=>{
        if(window.confirm(`¿Desea eliminar a ${data.nombre} ${data.apellido}?`)){
            let id=data._id
            let respuesta = await fetch("http://localhost:4000/eliminardt",{
                method:'delete',
                headers:{
                    'Content-type':"application/json"
                },
                body:JSON.stringify({id:id})
            })
            .then((data)=>{return data.json()})
            .then(()=>{setDtEliminado(true); setTimeout(()=>{setDtEliminado(false)},2000)})
            .then((setTimeout(()=>{window.location.reload()},2000)))
            .catch((err)=>console.log(err))
        } else{}
    }

    const editarDt=async(e)=>{
        let id=data._id
        const formInfo = new FormData(e.target)

        formInfo.append("imagen",e.target[2].value)

        let resultado = await fetch(`http://localhost:4000/editardt/${id}`,{
            method:"put",
            //headers:{"Content-Type":'application/json'},
            body:formInfo
        })
        .then((resp)=>{return resp.json})
        .then((data)=>console.log(data))
        .catch((err)=>{console.log(err)})
    }

    const [modal,setModal] = useState(false);
    const toggleModal = ()=>{
        setModal(!modal)
    }

    return(
        <>
        <div className="cuadro card d-flex justify-content-evenly">
            <a type='button'><i className="fa-solid fa-user-pen" title="Editar jugador" onClick={()=>toggleModal(data._id,data.nombre,data.apellido)}></i></a>
            <a type='button'><i className="fa-solid fa-trash" title="Eliminar jugador" onClick={eliminarDt}></i></a>
            <img className="imgCard" alt="" src={data.imagen}/>
            <h4 className='text-center mt-2'>{data.nombre} {data.apellido}</h4>
        </div>

        {modal && (
            <div className='overlay'>
                <div className="modal2" id="editarDt">
                    <h2>Editar a {data.nombre} {data.apellido}</h2>
                    <form onSubmit={editarDt}>
                        <label className='mt-4 me-3'>Nombre</label>
                        <input type="text" placeholder={data.nombre} name="nombre"/><br/>

                        <label className='mt-4 me-3'>Apellido</label>
                        <input type="text" placeholder={data.apellido} name="apellido"/><br/>

                        <label className='mt-4 me-3' for="formFile">Subir imagen</label>
                        <input type="file" name='imagen'/><br/>
                        <input className="btn btn-success mt-4 me-4" type="submit"  value={"Editar"}/>
                        <button className='mt-4 btn btn-danger' id="btnCanelar" onClick={toggleModal}>Cancelar</button>
                    </form>
                </div>
            </div>
        )}
        </>
    )}