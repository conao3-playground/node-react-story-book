interface CardProps {
  children: React.ReactNode
}

export function Card(props: CardProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}
