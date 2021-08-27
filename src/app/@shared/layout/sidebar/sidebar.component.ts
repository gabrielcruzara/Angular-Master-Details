import { Component, OnInit } from '@angular/core';

export interface IMenu {
  id: number;
  nome: string;
  url: string;
  mostrar: boolean;
  icone: string;
  submenus?: IMenu[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  menus = [
    {
      id: 0,
      nome: 'Inicio',
      url: '#',
      mostrar: true,
      icone: 'nav-icon fas fa-users',
      submenus: [],
    },
    {
      id: 1,
      nome: 'Cadastro de Serviço',
      url: '#',
      mostrar: true,
      icone: 'nav-icon fas fa-calendar-alt',
      submenus: [],
    },
    {
      id: 2,
      nome: 'Gerenciamento financeiro',
      url: '#',
      mostrar: false,
      icone: 'nav-icon fas fa-clinic-medical',
      submenus: [],
    },
  ]

  constructor() { }

  ngOnInit(): void {
    for (var i = 0; i < this.menus.length; i++) {
      if (this.menus[i].submenus.length > 0) {
        for (let s = 0; s < this.menus[i].submenus.length; s++) {
              this.menus[i].mostrar = true;
              this.menus[i].submenus[s].mostrar = true;
        };
      }
    }
  }
}

