import React from 'react'
import { Title } from '../atoms/Title'

type HeaderProps = {
  title: string
}

/**
 * Header component
 * @param title - The title to display in the header
 */
export const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className="bg-gray-800 text-white p-4 mb-4 rounded">
    <Title text={title} />
  </header>
)
