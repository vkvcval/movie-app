import React, { MouseEventHandler } from "react";

export default function PrimaryButton({
  text,
  onClick,
}: {
  text: String;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return <button onClick={onClick}>{text}</button>;
}
