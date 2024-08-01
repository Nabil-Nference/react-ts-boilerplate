import React from 'react'

type ButtonProps = {
  label: string
  onClick: () => void
}

/**
 * Button component
 * @param label - The label of the button
 * @param onClick - Function to call on button click
 */
export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={onClick}
  >
    {label}
  </button>
)
