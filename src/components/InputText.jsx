export default function InputText({label, placeholder, value, onChange}) {
  return (
    <div className="input-container">
      <label htmlFor={label} className="input-label">
        {label}
      </label>
      <input 
        className="input"
        type='text'
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div> 
  )
}