var ModeloParcial;
(function (ModeloParcial) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
            // Constructor vacío
        }
        Manejadora.prototype.AgregarUsuarioJSON = function () {
            var url = "http://localhost:10001/usuarios";
            var nombre = $("#nombre").val();
            var correo = $("#correo").val();
            var clave = $("#clave").val();
            var form = new FormData();
            form.append("obj", JSON.stringify({ "nombre": nombre, "correo": correo, "clave": clave }));
            $.ajax({
                type: "post",
                url: url,
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: form
            })
                .done(function (rta) {
                alert(rta);
            })
                .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        };
        Manejadora.prototype.MostrarUsuariosJSON = function () {
            var url = "http://localhost:10001/usuarios";
            $.ajax({
                type: "get",
                url: url,
                dataType: "JSON"
            })
                .done(function (objJSON) {
                //MUESTRO EL RESULTADO DE LA PETICION
                console.log(objJSON);
                var tabla = "<table>\n                                <tr>\n                                    <th>NOMBRE</th><th>CORREO</th><th>CLAVE</th>\n                                </tr>";
                objJSON.forEach(function (elemento) {
                    console.log(elemento);
                    if (elemento !== "") {
                        var obj = JSON.parse(elemento);
                        tabla += "<tr><td>".concat(obj.nombre, "</td><td>").concat(obj.correo, "</td><td>").concat(obj.clave, "</td></tr>");
                    }
                });
                tabla += "</table>";
                $("#divTabla").html(tabla);
            })
                .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        };
        Manejadora.prototype.VerificarUsuarioJSON = function () {
            var url = "http://localhost:10001/usuario_verificar";
            var correo = $("#correo").val();
            var clave = $("#clave").val();
            var form = new FormData();
            form.append("obj", JSON.stringify({ "correo": correo, "clave": clave }));
            $.ajax({
                type: "post",
                url: url,
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: form
            })
                .done(function (rta) {
                alert(rta);
            })
                .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        };
        Manejadora.prototype.AgregarUsuario = function () {
            var url = "http://localhost:10001/usuarios_db";
            var nombre = $("#nombre").val();
            var correo = $("#correo").val();
            var clave = $("#clave").val();
            var id_perfil = $("#cboPerfiles").val();
            var form = new FormData();
            form.append("obj", JSON.stringify({ "nombre": nombre, "correo": correo, "clave": clave, "id_perfil": id_perfil }));
            $.ajax({
                type: "post",
                url: url,
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: form
            })
                .done(function (rta) {
                alert(rta);
            })
                .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        };
        Manejadora.prototype.MostrarUsuarios = function () {
            var url = "http://localhost:10001/usuarios_db";
            $.ajax({
                type: "get",
                url: url,
                dataType: "text"
            })
                .done(function (obj) {
                //MUESTRO EL RESULTADO DE LA PETICION
                console.log(obj);
                $("#divTabla").html(obj);
            })
                .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        };
        Manejadora.prototype.ModificarUsuario = function () {
            var _this = this;
            var url = "http://localhost:10001/usuarios_db";
            var id = $("#id").val();
            var form = new FormData();
            form.append("obj", JSON.stringify({ "id": id }));
            $.ajax({
                type: "put",
                url: url,
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: form
            })
                .done(function (rta) {
                alert(rta);
                _this.MostrarUsuarios();
            })
                .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        };
        Manejadora.prototype.EliminarUsuario = function () {
            var _this = this;
            var url = "http://localhost:10001/usuarios_db";
            var id = $("#id").val();
            var datos = {
                id: id,
            };
            $.ajax({
                type: "DELETE",
                url: url,
                data: JSON.stringify(datos),
                contentType: "application/json",
                dataType: "text",
            })
                .done(function (rta) {
                alert(rta);
                _this.MostrarEmpleados();
            })
                .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        };
        Manejadora.prototype.AgregarEmpleado = function () {
            var url = "http://localhost:10001/empleados_db";
            var nombre = $("#nombre").val();
            var correo = $("#correo").val();
            var clave = $("#clave").val();
            var id_perfil = $("#cboPerfiles").val();
            var sueldo = $("#sueldo").val();
            var foto = $("#foto")[0];
            var form = new FormData();
            form.append("foto", foto.files[0]);
            form.append("obj", JSON.stringify({ "nombre": nombre, "correo": correo, "clave": clave, "id_perfil": id_perfil, "sueldo": sueldo }));
            $.ajax({
                type: "post",
                url: url,
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: form
            })
                .done(function (rta) {
                alert(rta);
            })
                .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        };
        Manejadora.prototype.ModificarEmpleado = function () {
            var url = "http://localhost:10001/empleados_db";
            var id = $("#id").val();
            var nombre = $("#nombre").val();
            var correo = $("#correo").val();
            var clave = $("#clave").val();
            var id_perfil = $("#cboPerfiles").val();
            var sueldo = $("#sueldo").val();
            var foto = $("#foto")[0];
            var form = new FormData();
            form.append("foto", foto.files[0]);
            form.append("obj", JSON.stringify({ "id": id, "nombre": nombre, "correo": correo, "clave": clave, "id_perfil": id_perfil, "sueldo": sueldo }));
            $.ajax({
                type: "put",
                url: url,
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: form
            })
                .done(function (rta) {
                alert(rta);
            })
                .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        };
        Manejadora.prototype.MostrarEmpleados = function () {
            var url = "http://localhost:10001/empleados_db";
            $.ajax({
                type: "get",
                url: url,
                dataType: "text"
            })
                .done(function (obj) {
                //MUESTRO EL RESULTADO DE LA PETICION
                console.log(obj);
                $("#divTablaEmpleados").html(obj);
            })
                .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        };
        Manejadora.prototype.EliminarEmpleado = function () {
            var _this = this;
            var url = "http://localhost:10001/empleados_db";
            var id = $("#id").val();
            var datos = {
                id: id,
            };
            $.ajax({
                type: "DELETE",
                url: url,
                data: JSON.stringify(datos),
                contentType: "application/json",
                dataType: "text",
            })
                .done(function (rta) {
                alert(rta);
                _this.MostrarEmpleados();
            })
                .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        };
        return Manejadora;
    }());
    ModeloParcial.Manejadora = Manejadora;
})(ModeloParcial || (ModeloParcial = {}));
