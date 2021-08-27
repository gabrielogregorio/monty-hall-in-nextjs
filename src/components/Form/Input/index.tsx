import styles from './Input.module.css'
interface InputProps {
  text: string
  value: number
  onChange: (newValue: number) => void
}

export default function Input(props: InputProps) {
  return (
    <div className={styles.input}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
    </div>
  )
}