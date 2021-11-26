import React from 'react'
import { TitleProps } from 'src/interfaces/title.interface'
import './styles.scss'

export const Title = ({children}: TitleProps) => {
  return (
    <label className="title">{children}</label>

  )
}