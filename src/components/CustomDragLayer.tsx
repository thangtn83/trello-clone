// @flow
import * as React from "react";
import { useDragLayer } from "react-dnd";
import { useAppState } from "../hooks/useAppState";
import { CustomDragLayerContainer, DragPreviewWrapper } from "../styles";
import { Column } from "../Column";

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        <Column title={draggedItem.text} id={draggedItem.id} isPreview={true} />
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};
