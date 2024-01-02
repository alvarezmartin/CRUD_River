import {useState,useEffect, Fragment} from 'react'

import CuadroextraDel from '../Cuadroextra/CuadroextraDel';
import TarjetaDel from '../Tarjeta/TarjetaDelantero';


export default function Delanteros(){
    const [delanteros,setDelanteros]=useState([])
    const [delanteroEliminado,setDelanteroEliminado]=useState(false)

    const traerInfo=async()=>{
        let info = await fetch("http://localhost:4000/traerdelantero")
        .then((data)=>{return data.json()})
        .then((resp)=>{setDelanteros(resp)})
        .catch((error)=>{console.log(error)})

        return info
    }
    
    useEffect(()=>{
        traerInfo()
    },[])

    return(
        <Fragment>
        {delanteroEliminado === false?
        <section className="filaDefensa row gap-5 mt-5 ms-4">
            <h3>Delanteros</h3>
            {delanteros.map((dela)=>{return <TarjetaDel key={dela._id} data={dela} setDelanteroEliminado={setDelanteroEliminado}/>})}
            <CuadroextraDel/>
        </section>
        :<div><br/><br/><br/><h3 className='alert alert-success text-black text-center d-flex justify-content-center mt-5'>Delantero eliminado</h3></div>
        }
        </Fragment>
    )
}