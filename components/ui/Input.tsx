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
        bg-paper-100 border border-ink/15
        text-ink placeholder-ink/30
        focus:outline-none focus:border-accent/50 focus:bg-paper
        transition-all duration-200
        disabled:opacity-50
        ${className}
      `}
    />
  )
}
