import { Component } from '@angular/core';

@Component({
  selector: 'app-medecin-list',
  templateUrl: './medecin-list.component.html',
  styleUrls: ['./medecin-list.component.scss']
})
export class MedecinListComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'actions'];
  dataSource = [{'position': '1','name':  'CHU','weight':  '13','actions':  'adae'}];
}
