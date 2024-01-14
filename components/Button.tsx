import { HTMLAttributes } from "react"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
  label: string;
}

export const Button = ({
  label,
  ...props
}: ButtonProps) => {

  return (
    <button type="button" onClick={() => {}} {...props}>
      {label}
    </button>
  )
}