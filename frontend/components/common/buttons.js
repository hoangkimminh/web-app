import Link from 'next/link'

export const LinkedButton = (props) => {
  const { className, href = '#', as, children, style, disabled } = props
  return (
    <Link href={href} as={as}>
      <button className={className} style={style} disabled={disabled}>
        {children}
      </button>
    </Link>
  )
}
