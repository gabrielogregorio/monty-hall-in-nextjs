import styles from './Porta.module.css'
import portaModel from '../../model/porta'
import PortaModel from '../../model/porta'
import Presente from '../../components/Presente/Presente'


interface PortaProps {
  value: portaModel,
  atualizarPorta: (novaPorta: PortaModel) => void
}


export default function Porta(props: PortaProps) {
  const porta = props.value
  let selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

  const alterarSelecao = e => props.atualizarPorta(porta.alterarSelecao())
  const abrir = e => {
    e.stopPropagation()
    props.atualizarPorta(porta.abrir())
  }
  
  function renderPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div className={styles.macaneta} onClick={abrir}></div>
      </div>
    )
  }

  return (
    <div className={styles.area} onClick={alterarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {porta.fechada ? renderPorta() :
          porta.temPresente ? <Presente /> : false}
      </div>
      
      <div className={styles.chao}></div>
    </div>
  )
}