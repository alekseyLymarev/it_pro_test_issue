import {Injectable} from '@angular/core';
import {TreeNode} from '../../models/tree-node';
import {trigger} from '@angular/animations';
import {getById} from '../../utils';

@Injectable()
export class TreeService {

  public nodes: TreeNode[] = [];

  constructor() {
  }

  changeNodeSelectionState(node: TreeNode, checked = null): void {
    if (checked !== null) {
      node.checked = checked;
    }
    this.changeParentSelectionState(node);
    this.selectChildrenNodes(node, node.checked);
  }

  private changeParentSelectionState(node: TreeNode): void {
    const parent = this.getNodeById(node.parentId);
    if (parent) {
      if (this.isAllChildrenSelected(parent)) {
        parent.checked = true;
        parent.indeterminate = false;
      } else {
        parent.checked = false;
        const selectedCount = this.selectedChildrenNodesCount(parent);
        parent.indeterminate = selectedCount > 0 || this.hasIndeterminate(parent);
      }
      this.changeParentSelectionState(parent);
    }
  }

  private getNodeById(id: number): TreeNode {
    return this.nodes.find(n => n.id === id);
  }

  private isAllChildrenSelected(node: TreeNode): boolean {
    const children = this.getChildren(node.id);
    const selected = children.filter(n => n.checked);

    return children.length === selected.length;
  }

  private selectChildrenNodes(node: TreeNode, checked: boolean): void {
    const children = this.getChildren(node.id);
    children.forEach(n => {
      this.changeNodeSelectionState(n, checked);
    });
  }

  private getChildren(id: number): TreeNode[] {
    return this.nodes.filter(n => n.parentId === id);
  }

  setNodes(nodes: TreeNode[]): void {
    for (const node of nodes) {
      // nodes.push(node);
      if (node.parentId) {
        const parent = getById(nodes, node.parentId);
        const parentLevel = parent?.level ?? 0;
        node.level = parentLevel + 1;
      }
    }

    for (let i = 0; i < nodes.length; i++) {
      const children = nodes.filter(x => x.parentId === nodes[i].id);
      children.forEach((x, j) => {
        const index = nodes.indexOf(x);
        nodes.splice(index, 1);
        nodes.splice(i + j + 1, 0, x);
      });
    }
    this.nodes = nodes;
  }

  private selectedChildrenNodesCount(parent: TreeNode): number {
    const children = this.getChildren(parent.id);
    const selected = children.filter(n => n.checked);

    return selected.length;
  }

  private hasIndeterminate(parent): boolean {
    const children = this.getChildren(parent.id);
    const selected = children.filter(n => n.indeterminate);

    return selected.length > 0;
  }
}
