// @flow
import * as React from "react";
import { useDragLayer } from "react-dnd";
import { useAppState } from "../hooks/useAppState";
import { CustomDragLayerContainer, DragPreviewWrapper } from "../styles";
import { Column } from "./Column";
import { Card } from "./Card";

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        {draggedItem.type === "COLUMN" ? (
          <Column
            title={draggedItem.text}
            id={draggedItem.id}
            isPreview={true}
          />
        ) : (
          <Card
            title={draggedItem.text}
            columnId={draggedItem.columnId}
            id={draggedItem.id}
          />
        )}
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};
