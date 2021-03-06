//Botones dinamicos
var campos_max = 3; //max de 3 campos
var campo_max = 2; //max de 2 campos
var x = 0;
//Habilidades
$(document).ready(function () {
    $("#add_field").click(function (e) {
        e.preventDefault(); //prevenir novos clicks
        if (x < campos_max) {
            $("#listas").append(
                '<div class="habilidad">\<p>\<input class="contenido-skill" type="text" name="campo[]">\</p>\
                  <div class="nivel">\ <p>\<input class="contenido-nivel" type="text" name="campo[]">\</p>\</div>\
                  \<a href="#" class="remover_campo">X</a>\</div>'
            );
            x++;
        }
    });
    // Remover o div anterior 
    $("#listas").on("click", ".remover_campo", function (e) {
        e.preventDefault();
        $(this).parent("div").remove();
        x--;
    });
});
//Software
var y = 0;
$(document).ready(function () {
    $("#add_field1").click(function (e) {
        e.preventDefault(); //prevenir novos clicks
        if (y < campos_max) {
            $("#lista").append(
                '<div class="skill">\<input class="contenido-skill" type="text" id="software1" name="campo[]">\</p>\
                <div class="nivel">\ <p>\<input class="contenido-nivel" type="text" id="nivel_software1" name="campo[]">\</div>\
                <a href="#" class="remover_campo">X</a>\</div>'
            );
            y++;
        }
    });
    // Remover o div anterior
    $("#lista").on("click", ".remover_campo", function (e) {
        e.preventDefault();
        $(this).parent("div").remove();
        x--;
    });
});

//Formación

var z=0;
$(document).ready(function () {
    $("#add_field2").click(function (e) {
        e.preventDefault(); //prevenir novos clicks
        if (z < campo_max) {
            $("#listas2").append(
               
                '<div class="educacion>\
                 <input class="contenido" type="text" id="institución" placeholder="Institución" name="campo[]">\
                 <input class="contenido" type="text" id="educacion" placeholder="Educación:" name="campo[]">\<br>\
                 <input class="contenido" type="text" id="institución" placeholder="Institución" name="campo[]">\
                 <div class="fecha">\<label for="empresa">Fecha:</label>\<input class="contenido" type="date" id="fecha" name="campo[]">\</div>\
                 <textarea class="descripcion" rows="3" cols="40" placeholder="Descripción" name="campo[]">\</textarea>\
                 <a href="#" class="remover_campo">X</a>\</div>'
            );
            z++;
        }
    });
    // Remover o div anterior
    $("#listas2").on("click", ".remover_campo", function (e) {
        e.preventDefault();
        $(this).parent("div").remove();
        x--;
    });
});
//Educación
var w=0;
$(document).ready(function () {
    $("#add_field3").click(function (e) {
        e.preventDefault(); //prevenir novos clicks
        if (w < campo_max) {
            $("#listas3").append(
               
                '<div class="exp">\<p>\
                 <input class="contenido" type="text" id="cargo" placeholder="Cargo:"><br>\
                 <input class="contenido" type="text" id="empresa" placeholder="Empresa:">\
                 <div class="fecha">\
                    <label for="desde">\Desde:\</label>\
                    <input class="contenido" type="date" id="desde">\
                    <label for="hasta">\Hasta: </label>\
                    <input class="contenido" type="date" id="hasta">\</div>\</p>\
                 <textarea class="descripcion" rows="3" cols="40" placeholder="Descripción"></textarea>\
                 <a href="#" class="remover_campo">X</a>\</div>'
            );
            w++;
        }
    });
    // Remover o div anterior
    $("#listas3").on("click", ".remover_campo", function (e) {
        e.preventDefault();
        $(this).parent("div").remove();
        x--;
    });
});