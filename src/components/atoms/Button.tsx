import React from "react";

type ButtonProps = {
  /**
   * The label of the button
   */
  label: string;
  /**
   * Function to call on button click
   */
  onClick: () => void;
};

/**
 * Button component
 * @param label - The label of the button
 * @param onClick - Function to call on button click
 */
export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 mb-4 rounded"
    onClick={onClick}
  >
    {label}
  </button>
);
