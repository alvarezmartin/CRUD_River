import {Fragment, useEffect, useState} from 'react'

import CuadroextraArq from '../Cuadroextra/CuadroextraArq';
import TarjetaArq from '../Tarjeta/TarjetaArquero';


export default function Arqueros(){
    const [arqueros,setArqueros]=useState([])
    const [arqueroEliminado,setArqueroEliminado]=useState(false)

    const traerInfo=async()=>{
        let info = await fetch("http://localhost:4000/traerarquero")
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
        {arqueroEliminado === false?
            <section className="filaArqueros d-flex row gap-5 mt-5 ms-4">
            <h3 className='mt-5'>Arqueros</h3>
            {arqueros.map((arque)=>{return <TarjetaArq key={arque._id} data={arque} setArqueroEliminado={setArqueroEliminado}/>})}
            <CuadroextraArq/>
        </section>
        :<div><br/><br/><br/><h3 className='alert alert-success text-black text-center mt-5'>Arquero eliminado</h3></div>
        }
        </Fragment>
    )
}