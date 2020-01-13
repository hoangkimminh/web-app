import Link from 'next/link'

const LinkedButton = (props) => {
  const { className, href = '#', icon, text, disabled } = props
  return (
    <Link href={href}>
      <button className={className} disabled={disabled}>
        {icon}
        {icon && text && <span>&nbsp;</span>}
        {text}
      </button>
    </Link>
  )
}

export { LinkedButton }
