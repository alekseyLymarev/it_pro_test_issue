import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ITreeNode, TreeNode} from '../../models/tree-node';
import {getChildrenByParentId, getById, getSelectedChildrenNodes, getSelectedNodes} from '../../utils';
import {TreeService} from '../../services/tree-service/tree.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  providers: [
    TreeService
  ]
})
export class TreeComponent implements OnInit {

  @Input()
  public get nodes(): TreeNode[] {
    return this.treeService.nodes;
  }

  public set nodes(nodes: TreeNode[]) {
    this.treeService.setNodes(nodes);
  }

  constructor(
    private cdr: ChangeDetectorRef,
    private treeService: TreeService
  ) {
  }

  ngOnInit(): void {
  }

  getStyle(node: TreeNode): string {
    return node?.level * 36 + 'px';
  }

  ChangeNodeState($event: any, node: TreeNode): void {
    this.treeService.changeNodeSelectionState(node);
    this.cdr.detectChanges();
  }
}
