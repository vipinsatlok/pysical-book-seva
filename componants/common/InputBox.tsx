import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

export default function InputBox({ type, ...props }: InputProps) {
  return <input type={type} {...props} />;
}
