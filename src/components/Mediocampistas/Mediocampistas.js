import {useState,useEffect, Fragment} from 'react'

import CuadroextraMed from '../Cuadroextra/CuadroextraMed';
import TarjetaMed from '../Tarjeta/TarjetaMediocampista';


export default function Mediocampistas(){
    const [mediocampistas,setArqueros]=useState([])
    const [mediocampistaEliminado,setMediocampistaEliminado]=useState(false)

    const traerInfo=async()=>{
        let info = await fetch("http://localhost:4000/traermediocampista")
        .then((data)=>{return data.json()})
        .then((resp)=>{setArqueros(resp)})
        .catch((error)=>{console.log(error)})

        return info
    }
    
    useEffect(()=>{
        traerInfo()
    },[])

    return(
        <Fragment>
        {mediocampistaEliminado === false?
        <section className="filaDefensa row gap-5 mt-5 ms-4">
            <h3>Mediocampistas</h3>
            {mediocampistas.map((med)=>{return <TarjetaMed key={med._id} data={med} setMediocampistaEliminado={setMediocampistaEliminado}/>})}
            <CuadroextraMed/>
        </section>
        :<div><br/><br/><br/><h3 className='alert alert-success text-black text-center d-flex justify-content-center mt-5'>Mediocampista eliminado</h3></div>
        }
        </Fragment>
    )
}