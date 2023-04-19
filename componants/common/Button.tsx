import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text, ...props }: ButtonProps) {
  return <button {...props}>{text}</button>;
}
