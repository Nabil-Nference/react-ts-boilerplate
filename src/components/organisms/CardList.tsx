import React from "react";
import { Card, CardProps } from "../molecules/Card";

type CardListProps = {
  /**
   * The list of cards to display
   */
  cards: CardProps[];
};

/**
 * CardList component
 * @param cards - The list of cards to display
 */
export const CardList: React.FC<CardListProps> = ({ cards }) => (
  <div className="space-y-4">
    {cards.map((card, index) => (
      <Card key={index} title={card.title} content={card.content} />
    ))}
  </div>
);
