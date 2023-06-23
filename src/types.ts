export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type ColumnDragItem = {
  id: string;
  text: string;
  type: "COLUMN";
};

export type DragItem = ColumnDragItem;
