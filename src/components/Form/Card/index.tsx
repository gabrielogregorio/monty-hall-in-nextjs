import styles from './Card.module.css'

interface CardProps {
  bgcolor?: string, // opcional
  children?: any // qualquer coisa
}

export default function Card(props: CardProps) {
  return (
    <div style={{backgroundColor: props.bgcolor ?? "#fff"}} className={styles.card} >
      {props.children}
    </div>
  )
}