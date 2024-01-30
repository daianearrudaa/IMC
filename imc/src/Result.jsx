import './App';
import styles from './App.module.css';


function Result({ClassificacaoIMC , imc}){
    return(
        <div className={styles.divResul}>
        <h2 className={styles.h2}>Seu IMC é: {imc}</h2>
        <h3 className={styles.h3}>Classificação: {ClassificacaoIMC(imc)}</h3>
        </div>
    )
}

export default Result;