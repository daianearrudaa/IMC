
import { useState } from 'react';
import styles from "./App.module.css";
import Result from './Result';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura) / 100; // Convertendo altura de cm para m
    if (!isNaN(pesoFloat) && !isNaN(alturaFloat) && alturaFloat > 0) {
      const novoImc = pesoFloat / (alturaFloat * alturaFloat);
      setImc(novoImc.toFixed(2));
    } else {
      setImc(null);
    }
  };

  return (
    <div className="container">
    <div className={styles.div}>
      <h1 className={styles.h1}>Calculadora de IMC</h1>
      <div>
        <label>Peso: </label>
        <input className={styles.input} type="number" value={peso} onChange={(e) => setPeso(e.target.value)} /> kg
      </div>
      <div>
        <label>Altura: </label>
        <input className={styles.input} type="number" value={altura} onChange={(e) => setAltura(e.target.value)} /> kg
      </div>
      <button className={styles.button} onClick={calcularIMC}>Calcular IMC</button>
      {imc !== null && (
      <>
      <Result ClassificacaoIMC={ClassificacaoIMC} imc={imc}/>
      </>
    )}
    </div>
    </div>
    
    
  );
}

function ClassificacaoIMC(imc) {
  if (imc < 18.5) return 'Abaixo do peso';
  else if (imc < 24.9) return 'Peso normal';
  else if (imc < 29.9) return 'Sobrepeso';
  else if (imc < 34.9) return 'Obesidade grau I';
  else if (imc < 39.9) return 'Obesidade grau II';
  else return 'Obesidade grau III';
}

export default App;
