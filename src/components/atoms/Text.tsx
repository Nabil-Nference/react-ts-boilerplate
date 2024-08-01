import React from 'react'

type TextProps = {
  content: string
}

/**
 * Text component
 * @param content - The text content to display
 */
export const Text: React.FC<TextProps> = ({ content }) => (
  <p className="text-base mb-2">{content}</p>
)
