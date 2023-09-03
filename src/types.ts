import React from "react";

export type ButtonType = {
  text: string
} & React.HTMLProps<HTMLButtonElement>

export type MainBoxType = {
  input: React.ReactNode
}

export type InputType = {
  onSuccess: (val: string) => void
}

export type ThankYouType = {
  button: React.ReactNode
  email: string
}
