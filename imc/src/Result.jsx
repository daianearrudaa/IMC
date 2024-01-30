import './App';


function Result({ClassificacaoIMC , imc}){
    return(
        <div>
        <h2>Seu IMC é: {imc}</h2>
        <h3>Classificação: {ClassificacaoIMC(imc)}</h3>
        </div>
    )
}

export default Result;