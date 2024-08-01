import React from 'react'
import { Card } from '../molecules/Card'

type CardListProps = {
  cards: { title: string; content: string }[]
}

/**
 * CardList component
 * @param cards - The list of cards to display
 */
export const CardList: React.FC<CardListProps> = ({ cards }) => (
  <div className="space-y-x-4">
    {cards.map((card, index) => (
      <Card key={index} title={card.title} content={card.content} />
    ))}
  </div>
)
