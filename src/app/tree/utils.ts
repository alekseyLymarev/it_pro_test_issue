import {TreeNode} from './models/tree-node';

export const getById = (nodes: TreeNode[], id: number) => nodes.find(node => node.id === id);
export const getChildrenByParentId = (nodes: TreeNode[], id: number) => nodes.filter(node => node.parentId === id);

export const getSelectedNodes = (nodes: TreeNode[]) => nodes.filter(node => node.checked);
export const getSelectedChildrenNodes =
  (nodes: TreeNode[], parentId: number) => nodes.filter(node => node.checked && node.parentId === parentId);

export const allNodesSelected = (nodes: TreeNode[]) => {
  const selectedNodes = getSelectedNodes(nodes);
  return selectedNodes.length === nodes.length;
};
