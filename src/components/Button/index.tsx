import * as React from 'react'
import classNames from 'classnames/bind'
import css from './styles.module.scss'

type Props = {
  text: string
}

const Button = ({ text }: Props) => <button>{text}</button>

export default Button
