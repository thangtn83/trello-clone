// @flow
import * as React from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "../styles";
import { useState } from "react";
import { useFocus } from "../hooks/useFocus";

type Props = {
  onAdd: (text: string) => void;
};
export const NewItemForm = ({ onAdd }: Props) => {
  const [value, setValue] = useState("");
  const ref = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput onChange={(e) => setValue(e.target.value)} ref={ref} />
      <NewItemButton onClick={() => onAdd(value)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
