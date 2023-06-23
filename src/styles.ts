import styled from "styled-components";

interface DragPreviewContainerProps {
  isHidden?: boolean;
  isPreview?: boolean;
}
type DragPreviewWrapperProps = {
  position: {
    x: number;
    y: number;
  };
};

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
  ({ position: { x, y } }) => ({
    style: {
      transform: `translate(${x}px, ${y}px)`,
    },
  })
)<DragPreviewWrapperProps>``;

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  transform: ${(props) => (props.isPreview ? "rotate(5deg)" : undefined)};
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
`;

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 30px;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export const ColumnContainer = styled(DragPreviewContainer)`
  width: 360px;
  min-height: 40px;
  background-color: transparent;
  margin-right: 30px;
`;

export const ColumnTitle = styled.div`
  border-radius: 10px;
  background-color: #f4f4f4;
  width: 100%;
  max-height: 50px;
  padding: 14px 20px 12px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardContainer = styled(DragPreviewContainer)`
  border-radius: 10px;
  background-color: #f4f4f4;
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  max-width: 320px;
`;

export const AddNewItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 20px;
  max-height: 160px;
`;

export const NewItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0 1px 0 0;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;
