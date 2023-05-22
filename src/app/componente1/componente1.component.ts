import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  titulo: string = "";
  titulo_actualizado: string = "";
  subtitulo: string = "";
  subtitulo_actualizado: string = "";
  cuerpo: string = "";
  cuerpo_actualizado: string = "";
  activar_creacion: boolean = false;
  crear_posteo: string = "";
  crear_posteo_actualizado: string = "";
  numero_editar: number = 0;
  editar_titulo: string = "";

  activarCrear() {
    this.activar_creacion = !this.activar_creacion;
    this.numero_editar = 0;
    this.crear_posteo_actualizado = "";
    this.editar_titulo = "";
  }

  crearPosteo() {
    this.crear_posteo_actualizado = this.crear_posteo;
    this.numero_editar = 1;
  }

  guardarTitulo() {
    this.crear_posteo_actualizado = this.editar_titulo;
    this.numero_editar = 1;
  }

  guardarSubtitulo() {
    this.subtitulo_actualizado = this.subtitulo;
  }
  
  guardarCuerpo() {
    this.cuerpo_actualizado = this.cuerpo;
  }
  cancelarEdicion() {
    this.numero_editar = 0;
    this.editar_titulo = "";
  }
}
