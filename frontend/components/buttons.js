import Link from 'next/link'

const LinkedButton = (props) => {
  const { href = '#', fullWidth, icon, text, disabled } = props
  return (
    <Link href={href}>
      <button
        className={`button is-dark ${fullWidth ? 'is-fullwidth' : ''}`}
        disabled={disabled}
      >
        {icon}
        {icon && text && <span>&nbsp;</span>}
        {text}
        <style jsx>{`
          text-transform: capitalize;
        `}</style>
      </button>
    </Link>
  )
}

export { LinkedButton }
