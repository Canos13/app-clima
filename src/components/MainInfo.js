import styles from './MainInfo.module.css'

export default function MainInfo({clima}) {
    return (
        (!clima)?(<h1 className={styles.load}>Cargando...</h1>):(
            <div className={styles.mainInfo} >
                <div className={styles.ciudad}>{ clima.location.name }</div>
                <div className={styles.pais}>{ clima.location.country }</div>
                <div>
                    <div className={styles.center}>
                        <img src={`http:${clima.current.condition.icon}`} width='128' alt={clima.current.condition.text} />
                    </div>
                    <div>
                        <div className={styles.center}>
                            <div>{clima.location.localtime} hrs</div>
                            <div>{clima.current.condition.text}</div>
                            <div>{clima.current.temp_c}°</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
