export default function ButtonPrimary({text, type}) {
  return (
    <button className="button button-primary" type={type}>
      {text}
    </button>
  )
}