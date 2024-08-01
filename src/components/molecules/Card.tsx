import React from "react";
import { Title } from "../atoms/Title";
import { Text } from "../atoms/Text";

export type CardProps = {
  /**
   * The title of the card
   */
  title: string;
  /**
   * The content of the card
   */
  content: string;
};

/**
 * Card component
 * @param title - The title of the card
 * @param content - The content of the card
 */
export const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="border p-4 rounded shadow-lg mb-4 bg-white">
    <Title text={title} />
    <Text content={content} />
  </div>
);
