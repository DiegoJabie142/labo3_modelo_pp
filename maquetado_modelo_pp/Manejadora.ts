namespace ModeloParcial {
    export class Manejadora {
      constructor() {
        // Constructor vacío
      }
        AgregarUsuarioJSON(){
            let url = "http://localhost:10001/usuarios";
            let nombre = $("#nombre").val();
            let correo = $("#correo").val();
            let clave = $("#clave").val();
        
            let form:FormData = new FormData();
        
            form.append("obj", JSON.stringify({"nombre":nombre, "correo": correo, "clave": clave}));
        
            $.ajax({
                type:"post",
                url: url,
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: form
            })
        
            .done(rta=>{
                alert(rta);
            })
        
            .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        }

        MostrarUsuariosJSON(){
            let url = "http://localhost:10001/usuarios";

            $.ajax({
                type:"get",
                url: url,
                dataType: "JSON"
            })
        
            .done((objJSON:any)=>{
                    //MUESTRO EL RESULTADO DE LA PETICION
                    console.log(objJSON);

                    let tabla = `<table>
                                <tr>
                                    <th>NOMBRE</th><th>CORREO</th><th>CLAVE</th>
                                </tr>`;

                    objJSON.forEach((elemento:any) => {
                        console.log(elemento);
                        if(elemento !== "")
                        {
                            let obj = JSON.parse(elemento);
                            tabla += `<tr><td>${obj.nombre}</td><td>${obj.correo}</td><td>${obj.clave}</td></tr>`;
                        }
                    });

                    tabla += `</table>`;

                    $("#divTabla").html(tabla);
        
                })
            .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
                    alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        }

        VerificarUsuarioJSON(){
            let url = "http://localhost:10001/usuario_verificar";
            let correo = $("#correo").val();
            let clave = $("#clave").val();
        
            let form:FormData = new FormData();
        
            form.append("obj", JSON.stringify({"correo": correo, "clave": clave}));
        
            $.ajax({
                type:"post",
                url: url,
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: form
            })
        
            .done(rta=>{
                alert(rta);
            })
        
            .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        }

        AgregarUsuario(){
            let url = "http://localhost:10001/usuarios_db";

            let nombre = $("#nombre").val();
            let correo = $("#correo").val();
            let clave = $("#clave").val();
            let id_perfil = $("#cboPerfiles").val();
        
            let form:FormData = new FormData();
        
            form.append("obj", JSON.stringify({"nombre":nombre, "correo": correo, "clave": clave, "id_perfil":id_perfil}));
        
            $.ajax({
                type:"post",
                url: url,
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: form
            })
        
            .done(rta=>{
                alert(rta);
            })
        
            .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        }

        MostrarUsuarios(){
            let url = "http://localhost:10001/usuarios_db";

            $.ajax({
                type:"get",
                url: url,
                dataType: "text"
            })
        
            .done((obj:any)=>{
                    //MUESTRO EL RESULTADO DE LA PETICION
                    console.log(obj);

                    $("#divTabla").html(obj);
        
                })
            .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
                    alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        }
        
        ModificarUsuario(){
            let url = "http://localhost:10001/usuarios_db";

            let id = $("#id").val();

            let form:FormData = new FormData();
        
            form.append("obj", JSON.stringify({"id":id}));
        
            $.ajax({
                type:"put",
                url: url,
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: form
            })
        
            .done(rta=>{
                alert(rta);
                this.MostrarUsuarios();
            })
        
            .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        }

        EliminarUsuario(){
            let url = "http://localhost:10001/usuarios_db";

            const id = $("#id").val();
            const datos = {
                id: id,
            };
        
            $.ajax({
                type: "DELETE",
                url: url,
                data: JSON.stringify(datos),
                contentType: "application/json",
                dataType: "text",
            })
        
            .done(rta=>{
                alert(rta);
                this.MostrarEmpleados();
            })
        
            .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        }

        AgregarEmpleado(){
            let url = "http://localhost:10001/empleados_db";

            let nombre = $("#nombre").val();
            let correo = $("#correo").val();
            let clave = $("#clave").val();
            let id_perfil = $("#cboPerfiles").val();
            let sueldo = $("#sueldo").val();
            let foto:any = $("#foto")[0];

            let form:FormData = new FormData();
            form.append("foto",foto.files[0]);
        
            form.append("obj", JSON.stringify({"nombre":nombre, "correo": correo, "clave": clave, "id_perfil":id_perfil,"sueldo":sueldo}));
        
            $.ajax({
                type:"post",
                url: url,
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: form
            })
        
            .done(rta=>{
                alert(rta);
            })
        
            .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        }

        ModificarEmpleado(){
            let url = "http://localhost:10001/empleados_db";

            let id = $("#id").val();
            let nombre = $("#nombre").val();
            let correo = $("#correo").val();
            let clave = $("#clave").val();
            let id_perfil = $("#cboPerfiles").val();
            let sueldo = $("#sueldo").val();
            let foto:any = $("#foto")[0];

            let form:FormData = new FormData();
            form.append("foto",foto.files[0]);
        
            form.append("obj", JSON.stringify({"id":id,"nombre":nombre, "correo": correo, "clave": clave, "id_perfil":id_perfil,"sueldo":sueldo}));
        
            $.ajax({
                type:"put",
                url: url,
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: form
            })
        
            .done(rta=>{
                alert(rta);
            })
        
            .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        }

        MostrarEmpleados(){
            let url = "http://localhost:10001/empleados_db";

            $.ajax({
                type:"get",
                url: url,
                dataType: "text"
            })
        
            .done((obj:any)=>{
                    //MUESTRO EL RESULTADO DE LA PETICION
                    console.log(obj);

                    $("#divTablaEmpleados").html(obj);
        
                })
            .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
                    alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        }

        EliminarEmpleado(){
            let url = "http://localhost:10001/empleados_db";

            const id = $("#id").val();
            const datos = {
                id: id,
            };
        
            $.ajax({
                type: "DELETE",
                url: url,
                data: JSON.stringify(datos),
                contentType: "application/json",
                dataType: "text",
            })
        
            .done(rta=>{
                alert(rta);
                this.MostrarEmpleados();
            })
        
            .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        }
    }
  }