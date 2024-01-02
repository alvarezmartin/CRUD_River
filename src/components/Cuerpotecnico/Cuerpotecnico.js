import {useState, useEffect, Fragment} from 'react'

import CuadroextraCt from '../Cuadroextra/CuadroextraCt';
import TarjetaDt from '../Tarjeta/TarjetaDt';


export default function Cuerpotecnico(){
    const [ct,setCt]=useState([])
    const [dtEliminado,setDtEliminado]=useState(false)

    const traerInfo=async()=>{
        let info = await fetch("http://localhost:4000/traerdt")
        .then((data)=>{return data.json()})
        .then((resp)=>{setCt(resp)})
        .catch((error)=>{console.log(error)})

        return info
    }
    
    useEffect(()=>{
        traerInfo()
    },[])

    return(
        <Fragment>
        {dtEliminado === false? 
        <section className="filaDefensa row gap-5 mt-5 ms-4">
            <h3>Cuerpo técnico</h3>
            {ct.map((ct)=>{return <TarjetaDt key={ct._id} data={ct} setDtEliminado={setDtEliminado}/>})}
            <CuadroextraCt/>
        </section>
        :<div><br/><br/><br/><h3 className='alert alert-success text-black text-center d-flex justify-content-center mt-5'>Miembro eliminado</h3></div>
        }
        </Fragment>
    )
}