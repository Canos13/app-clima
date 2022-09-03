import { useEffect, useState } from "react"
import ClimaForm from "./ClimaForm";
import MainInfo from "./MainInfo";
import styles from './ClimaApp.module.css'
import Loading from "./Loading";

export default function ClimaApp() {

    const [clima, setClima] = useState(null);

    useEffect(() => {
      loadInfo()
    }, [])

    useEffect(() => {
        document.title = `${clima?.location.name ?? 'Clima'}`
    }, [clima])

    const loadInfo = async (ciudad = 'London') => {
        const response = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_API}&q=${ciudad}`);
        const data = await response.json();
        setClima(data);
        console.log(data)
    }

    const handleChangeCiudad = (ciudad) =>{
        setClima(null);
        loadInfo(ciudad);
    }

    return (
        <div className={styles.climaContainer}>
            
            <ClimaForm onChangeCiudad={handleChangeCiudad} />
            
            {
                clima ? (
                    <MainInfo clima={clima} />
                ) : (
                    <Loading />
                )
            }
        </div>
    )
}
