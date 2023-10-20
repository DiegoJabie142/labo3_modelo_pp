namespace Entidades {
    // Clase base Persona
    export class Persona {
      nombre: string;
      correo: string;
      clave: string;
  
      constructor(nombre: string, correo: string) {
        this.nombre = nombre;
        this.correo = correo;
        this.clave = "";
      }
  
      ToString(): string {
        return JSON.stringify(this);
      }
  
      ToJSON(): JSON {
        return JSON.parse(this.ToString());
      }
    }
  
    // Clase Usuario que hereda de Persona
    export class Usuario extends Persona {
      id: number;
      id_perfil: number;
      perfil: string;
  
      constructor(nombre: string, correo: string, id: number, id_perfil: number, perfil: string) {
        super(nombre, correo);
        this.id = id;
        this.id_perfil = id_perfil;
        this.perfil = perfil;
      }
  
      ToJSON(): JSON {
        return JSON.parse(super.ToString());
      }
    }
  
    // Clase Empleado que hereda de Usuario
    export class Empleado extends Usuario {
      sueldo: number;
      foto: string;
  
      constructor(nombre: string, correo: string, id: number, id_perfil: number, perfil: string, sueldo: number, foto: string) {
        super(nombre, correo, id, id_perfil, perfil);
        this.sueldo = sueldo;
        this.foto = foto;
      }
    }
}