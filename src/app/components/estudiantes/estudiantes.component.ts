import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  arrayestudiantes:any[] = [
    {
      legajo: 25478,
      nombre: "Victoria",
      apellido: "Cordero",
      notaMat: 9,
      notaLit: 8,
      notaIng: 8.50,
      notaSoc: 9.50,
      notaNat: 8

    },

    {
      legajo: 32596,
      nombre: "Agustina",
      apellido: "Mozzi",
      notaMat: 8,
      notaLit: 8.5,
      notaIng: 7.50,
      notaSoc: 8.50,
      notaNat: 9

    },

    {
      legajo: 29351,
      nombre: "Fernando",
      apellido: "Salguero",
      notaMat: 8,
      notaLit: 7.50,
      notaIng: 7,
      notaSoc: 9,
      notaNat: 8.50

    },

    {
      legajo: 31649,
      nombre: "Jorge",
      apellido: "La Rosa",
      notaMat: 9,
      notaLit: 8,
      notaIng: 8.50,
      notaSoc: 9.5,
      notaNat: 8

    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
