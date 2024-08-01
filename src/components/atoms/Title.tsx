import React from 'react'

type TitleProps = {
  text: string
}

/**
 * Title component
 * @param text - The text to display as title
 */
export const Title: React.FC<TitleProps> = ({ text }) => (
  <h1 className="text-2xl font-bold mb-4">{text}</h1>
)
