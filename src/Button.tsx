import {ButtonProp} from "./types"
import classNames from "classnames"
import { twMerge } from 'tailwind-merge'
import {FC} from "react";

const Button: FC<ButtonProp> = (props: ButtonProp) => {

  const {
    children,
    outline,
    primary,
    rounded,
    danger,
    success,
    warning,
    secondary,
    ...rest
  } = props

  const variationSum = Number(!!primary) + Number(!!secondary) + Number(!!warning) + Number(!!success) + Number(!!danger)

  if (variationSum > 1) {
    throw new Error('Only one of should be true')
  }

  const classes = twMerge(
    classNames(rest.className, 'flex item-center px-3 py-1.5 border', {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-500 bg-yellow-500 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger
    })
  )

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  )
}

export default Button
