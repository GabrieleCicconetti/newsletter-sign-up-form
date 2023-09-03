import React, {ComponentProps} from "react";
import {ButtonType} from "@/types";


export default function Button(props: ButtonType) {
  const {text, ...buttonProps} = props

  return <button
      {...buttonProps}
      type="button">
    <span>{props.text}</span>
  </button>
}
