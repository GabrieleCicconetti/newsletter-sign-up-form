import React, {ComponentProps} from "react";

type IButton = {
  text: string
} & React.HTMLProps<HTMLButtonElement>

export default function Button(props: IButton) {
  const {text, ...buttonProps} = props

  return <button
      {...buttonProps}
      type="button">
    <span>{props.text}</span>
  </button>
}
