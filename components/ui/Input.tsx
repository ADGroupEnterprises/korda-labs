interface InputProps {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  name?: string
  required?: boolean
  disabled?: boolean
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  name,
  required,
  disabled,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={`
        w-full px-4 py-3 rounded-lg
        bg-ink border border-mahogany
        text-paper placeholder-white/30
        focus:outline-none focus:border-accent focus:bg-ink
        transition-all duration-300
        disabled:opacity-50
        ${className}
      `}
    />
  )
}
