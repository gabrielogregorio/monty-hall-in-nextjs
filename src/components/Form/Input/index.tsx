import styles from './Input.module.css'
interface InputProps {
  text: string
  value: number
  onChange: (newValue: number) => void
}

export default function Input(props: InputProps) {

  const decrease = () => props.onChange(props.value - 1)
  const increase = () => props.onChange(props.value + 1)
  
  return (
    <div className={styles.input}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={decrease}>-</button>
        <button className={styles.button} onClick={increase}>+</button>
      </div>
    </div>
  )
}