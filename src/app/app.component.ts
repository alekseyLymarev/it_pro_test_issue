import {Component} from '@angular/core';
import {ITreeNode} from './tree/models/tree-node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProIt';

  public checkbox1 = true;
  public checkbox2 = false;
  public checkbox3 = false;

  public nodes: ITreeNode[] = [
    {
      id: 1,
      name: 'Node 1',
      checked: false,
      parentId: null
    },
    {
      id: 2,
      name: 'Node 1.1',
      checked: false,
      parentId: 1
    },
    {
      id: 3,
      name: 'Node 1.1.1',
      checked: false,
      parentId: 2
    },
    {
      id: 4,
      name: 'Node 1.1.2',
      checked: false,
      parentId: 2
    },
    {
      id: 5,
      name: 'Node 1.1.3',
      checked: false,
      parentId: 2
    },
    {
      id: 6,
      name: 'Node 1.2',
      checked: false,
      parentId: 1
    },
    {
      id: 7,
      name: 'Node 1.2.1',
      checked: false,
      parentId: 6
    },
    {
      id: 8,
      name: 'Node 1.2.2',
      checked: false,
      parentId: 6
    },
    {
      id: 9,
      name: 'Node 4',
      checked: false,
      parentId: null
    },
    {
      id: 10,
      name: 'Node 1.1.1.1',
      checked: false,
      parentId: 3
    },
    {
      id: 11,
      name: 'Node 1.1.1.2',
      checked: false,
      parentId: 3
    },
    {
      id: 12,
      name: 'Node 1.1.1.3',
      checked: false,
      parentId: 3
    },
  ];
}
