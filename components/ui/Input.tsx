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
        bg-paper border border-paper-100
        text-ink placeholder:text-paper-100
        focus:outline-none focus:border-accent focus:bg-paper
        transition-all duration-200
        disabled:opacity-50
        ${className}
      `}
    />
  )
}
