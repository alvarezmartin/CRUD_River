import {useState, useEffect, Fragment} from 'react'

import CuadroextraDef from '../Cuadroextra/CuadroextraDef';
import TarjetaDef from '../Tarjeta/TarjetaDefensor';


export default function Defensores(){
    const [defensores,setDefensores]=useState([])
    const [defensorEliminado,setDefensorEliminado]=useState(false)

    const traerInfo=async()=>{
        let info = await fetch("http://localhost:4000/traerdefensor")
        .then((data)=>{return data.json()})
        .then((resp)=>{setDefensores(resp)})
        .catch((error)=>{console.log(error)})

        return info
    }
    
    useEffect(()=>{
        traerInfo()
    },[])

    return(
        <Fragment>
        {defensorEliminado === false? 
        <section className="filaDefensa row gap-5 mt-5 ms-4">
            <h3>Defensores</h3>
            {defensores.map((defe)=>{return <TarjetaDef key={defe._id} data={defe} setDefensorEliminado={setDefensorEliminado}/>})}
            <CuadroextraDef/>
        </section>
        :<div><br/><br/><br/><h3 className='alert alert-success text-black text-center d-flex justify-content-center mt-5'>Defensor eliminado</h3></div>
        }
        </Fragment>
    )
}