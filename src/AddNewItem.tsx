// @flow
import * as React from "react";
import { AddNewItemContainer } from "./styles";
import { useState } from "react";
import { NewItemForm } from "./components/NewItemForm";

type Props = {
  onAdd: (title: string) => void;
  textToggleButton: string;
};
export const AddNewItem = ({ onAdd, textToggleButton }: Props) => {
  const [openForm, setOpenForm] = useState(false);

  function onClickHandle() {
    setOpenForm(true);
  }

  if (openForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setOpenForm(false);
        }}
      />
    );
  }

  return (
    <AddNewItemContainer onClick={onClickHandle}>
      {textToggleButton}
    </AddNewItemContainer>
  );
};
