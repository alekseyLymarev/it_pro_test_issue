export interface ITreeNode {
  id: number;
  parentId: number;
  name: string;
  checked?: boolean;
}

export class TreeNode implements ITreeNode {
  checked: boolean;
  id: number;
  name: string;
  parentId: number;

  level = 0;
  indeterminate = false;
}
