import { useState } from "react"
import styles from './ClimaForm.module.css'

export default function ClimaForm({onChangeCiudad}) {

    const [ciudad, setCiudad] = useState('');

    const handleInput = (e) =>{
        if(e.target.value !== ''){ 
            setCiudad(e.target.value);
            console.log(e.target.value)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        onChangeCiudad(ciudad);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.container} >
            <input 
                placeholder="Busca una ciudad" 
                type='text' 
                onChange={handleInput}
                className={styles.input} />
        </form>
    )
}
