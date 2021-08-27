import styles from './Card.module.css'

interface CardProps {
  bgcolor?: string, // opcional
  children?: any // qualquer coisa
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.card} style={{backgroundColor: props.bgcolor ?? "#fff"}}>
      {props.children}
    </div>
  )
}