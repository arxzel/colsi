var parametro = null;

function getRecords_Instituciones(){
    conexion();
    db.transaction(selectData_Instituciones,errorCB_Universal,successSelect_Universal);                
}
            
    function selectData_Instituciones(tx){
        tx.executeSql("SELECT INSTITUCIONES.id_institucion, INSTITUCIONES.insti_nombre FROM INSTITUCIONES ORDER BY insti_nombre ASC",[],resultSuccess_Instituciones,resultError_Universal);
    }

        function resultSuccess_Instituciones(tx, response){

            var div=document.getElementById("divBusqueda");

            var temp="<div class='ui-controlgroup-controls'>";

            for(var i=0; i<response.rows.length; i++){
                if(i==0){
                    temp +="<a role='button' class='ui-link ui-btn ui-shadow ui-corner-all ui-first-child' href='consultaProyectosInstituciones.html?id_institucion="+response.rows.item(i).id_institucion+"' data-role='button' rel='external'>"+response.rows.item(i).insti_nombre+"</a>";
                }else if(i ==response.rows.length-1){
                   temp +=" <a role='button' class='ui-link ui-btn ui-shadow ui-corner-all ui-last-child' href='consultaProyectosInstituciones.html?id_institucion="+response.rows.item(i).id_institucion+"' data-role='button' rel='external'>"+response.rows.item(i).insti_nombre+"</a>";
                }
                else{
                    temp +="<a role='button' class='ui-link ui-btn ui-shadow ui-corner-all' href='consultaProyectosInstituciones.html?id_institucion="+response.rows.item(i).id_institucion+"' data-role='button' rel='external'>"+response.rows.item(i).insti_nombre+"</a>";
                }
                
            }
            temp+="</div>";
            div.innerHTML= temp;
        }






function getProyectosInstituciones(clave){
    parametro = clave;
    conexion();
    db.transaction(selectData_ProyectosInstituciones,errorCB_Universal,successSelect_Universal);                
}
            
    function selectData_ProyectosInstituciones(tx){
        tx.executeSql("SELECT PONENCIAS.id_ponencia, PONENCIAS.ponen_nombre FROM PONENCIAS, INSTITUCIONES WHERE INSTITUCIONES.id_institucion = PONENCIAS.id_institucion AND INSTITUCIONES.id_institucion="+parametro+";",[],resultSuccess_getProyectosInstituciones,resultError_Universal);
    }

        function resultSuccess_getProyectosInstituciones(tx, response){

            var div=document.getElementById("divBusqueda");

            var temp="<div class='ui-controlgroup-controls'>";

            for(var i=0; i<response.rows.length; i++){
                if(i==0){
                    temp +="<a role='button' class='ui-link ui-btn ui-shadow ui-corner-all ui-first-child' href='infoPonenciaInstitucion.html?id_ponencia="+response.rows.item(i).id_ponencia+"' data-role='button' rel='external'>"+response.rows.item(i).ponen_nombre+"</a>";
                }else if(i ==response.rows.length-1){
                   temp +=" <a role='button' class='ui-link ui-btn ui-shadow ui-corner-all ui-last-child' href='infoPonenciaInstitucion.html?id_ponencia="+response.rows.item(i).id_ponencia+"' data-role='button' rel='external'>"+response.rows.item(i).ponen_nombre+"</a>";
                }
                else{
                    temp +="<a role='button' class='ui-link ui-btn ui-shadow ui-corner-all' href='infoPonenciaInstitucion.html?id_ponencia="+response.rows.item(i).id_ponencia+"' data-role='button' rel='external'>"+response.rows.item(i).ponen_nombre+"</a>";
                }
                
            }
            temp+="</div>";
            div.innerHTML= temp;
        }












/*
**************************************MANEJO DE LA BASE DE DATOS POR EL LADO DE LAS AREAS*****************************
*/







function getRecords_Areas(){
    conexion();
    db.transaction(selectData_Areas,errorCB_Universal,successSelect_Universal);                
}
            
    function selectData_Areas(tx){
        tx.executeSql("SELECT AREAS.id_area, AREAS.area_nombre FROM AREAS ORDER BY area_nombre ASC",[],resultSuccess_Areas,resultError_Universal);
    }

        function resultSuccess_Areas(tx, response){

            var div=document.getElementById("divBusqueda");

            var temp="<div class='ui-controlgroup-controls'>";

            for(var i=0; i<response.rows.length; i++){
                if(i==0){
                    temp +="<a role='button' class='ui-link ui-btn ui-shadow ui-corner-all ui-first-child' href='consultaSubAreas.html?id_area="+response.rows.item(i).id_area+"' data-role='button' rel='external'>"+response.rows.item(i).area_nombre+"</a>";
                }else if(i ==response.rows.length-1){
                   temp +=" <a role='button' class='ui-link ui-btn ui-shadow ui-corner-all ui-last-child' href='consultaSubAreas.html?id_area="+response.rows.item(i).id_area+"' data-role='button' rel='external'>"+response.rows.item(i).area_nombre+"</a>";
                }
                else{
                    temp +="<a role='button' class='ui-link ui-btn ui-shadow ui-corner-all' href='consultaSubAreas.html?id_area="+response.rows.item(i).id_area+"' data-role='button' rel='external'>"+response.rows.item(i).area_nombre+"</a>";
                }
                
            }
            temp+="</div>";
            div.innerHTML= temp;
        }




function getSubAreas(clave){
    parametro = clave;
    conexion();
    db.transaction(selectData_getSubAreas,errorCB_Universal,successSelect_Universal);                
}
            
    function selectData_getSubAreas(tx){
        tx.executeSql("SELECT SUBAREAS.id_subarea, SUBAREAS.subarea_nombre FROM SUBAREAS, AREAS WHERE AREAS.id_area = SUBAREAS.id_area and AREAS.id_area ="+parametro+";",[],resultSuccess_getSubAreas,resultError_Universal);
    }

        function resultSuccess_getSubAreas(tx, response){

            var div=document.getElementById("divBusqueda");

            var temp="<div class='ui-controlgroup-controls'>";

            for(var i=0; i<response.rows.length; i++){
                if(i==0){
                    temp +="<a role='button' class='ui-link ui-btn ui-shadow ui-corner-all ui-first-child' href='consultaProyectosSubAreas.html?id_subarea="+response.rows.item(i).id_subarea+"' data-role='button' rel='external'>"+response.rows.item(i).subarea_nombre+"</a>";
                }else if(i ==response.rows.length-1){
                   temp +=" <a role='button' class='ui-link ui-btn ui-shadow ui-corner-all ui-last-child' href='consultaProyectosSubAreas.html?id_subarea="+response.rows.item(i).id_subarea+"' data-role='button' rel='external'>"+response.rows.item(i).subarea_nombre+"</a>";
                }
                else{
                    temp +="<a role='button' class='ui-link ui-btn ui-shadow ui-corner-all' href='consultaProyectosSubAreas.html?id_subarea="+response.rows.item(i).id_subarea+"' data-role='button' rel='external'>"+response.rows.item(i).subarea_nombre+"</a>";
                }
                
            }
            temp+="</div>";
            div.innerHTML= temp;
        }





function getProyectosSubAreas(clave){
    parametro = clave;
    conexion();
    db.transaction(selectData_getProyectosSubAreas,errorCB_Universal,successSelect_Universal);                
}
            
    function selectData_getProyectosSubAreas(tx){
        tx.executeSql("SELECT PONENCIAS.id_ponencia, PONENCIAS.ponen_nombre FROM SUBAREAS, PONENCIAS WHERE PONENCIAS.id_subarea = SUBAREAS.id_subarea and SUBAREAS.id_subarea ="+parametro+";",[],resultSuccess_getProyectosSubAreas,resultError_Universal);
    }

        function resultSuccess_getProyectosSubAreas(tx, response){

            var div=document.getElementById("divBusqueda");

            var temp="<div class='ui-controlgroup-controls'>";

            for(var i=0; i<response.rows.length; i++){
                if(i==0){
                    temp +="<a role='button' class='ui-link ui-btn ui-shadow ui-corner-all ui-first-child' href='infoPonenciaSubArea.html?id_ponencia="+response.rows.item(i).id_ponencia+"' data-role='button' rel='external'>"+response.rows.item(i).ponen_nombre+"</a>";
                }else if(i ==response.rows.length-1){
                   temp +=" <a role='button' class='ui-link ui-btn ui-shadow ui-corner-all ui-last-child' href='infoPonenciaSubArea.html?id_ponencia="+response.rows.item(i).id_ponencia+"' data-role='button' rel='external'>"+response.rows.item(i).ponen_nombre+"</a>";
                }
                else{
                    temp +="<a role='button' class='ui-link ui-btn ui-shadow ui-corner-all' href='infoPonenciaSubArea.html?id_ponencia="+response.rows.item(i).id_ponencia+"' data-role='button' rel='external'>"+response.rows.item(i).ponen_nombre+"</a>";
                }
                
            }
            temp+="</div>";
            div.innerHTML= temp;
        }


























function getPonencia(clave){
    parametro = clave;
    conexion();
    db.transaction(selectData_getPonencias,errorCB_Universal,successSelect_Universal);                
}
            
    function selectData_getPonencias(tx){
        tx.executeSql("SELECT SUBTERMINADA.ponen_nombre AS NOMBRE, SUBTERMINADA.ponen_hora AS HORA, SUBTERMINADA.ponen_fecha AS FECHA, SUBTERMINADA.ponen_registro AS REGISTRO, SUBTERMINADA.lugar_nombre AS LUGAR, SUBTERMINADA.insti_nombre AS INSTITUCION, SUBTERMINADA.subarea_nombre AS SUBAREA, AREAS.area_nombre AS AREA, TIPOS.tipo_nombre AS TIPO, SUBTERMINADA.subti_nombre AS SUBTIPO FROM  (SELECT PONENCIA.ponen_nombre, PONENCIA.ponen_hora, PONENCIA.ponen_fecha, PONENCIA.ponen_registro, LUGARES.lugar_nombre, INSTITUCIONES.insti_nombre, SUBAREAS.subarea_nombre, SUBAREAS.id_area, SUBTIPOS.id_tipo, SUBTIPOS.subti_nombre        FROM (SELECT * FROM PONENCIAS WHERE id_ponencia = "+parametro+") AS PONENCIA, SUBAREAS, INSTITUCIONES, SUBTIPOS, LUGARES      WHERE LUGARES.id_lugar = PONENCIA.id_lugar and INSTITUCIONES.id_institucion = PONENCIA.id_institucion and SUBAREAS.id_subarea = PONENCIA.id_subarea and SUBTIPOS.id_subtipo = PONENCIA.id_subtipo) AS SUBTERMINADA, AREAS, TIPOS WHERE AREAS.id_area = SUBTERMINADA.id_area and TIPOS.id_tipo = SUBTERMINADA.id_tipo;",[],resultSuccess_getPonencias,resultError_Universal);
    }

        function resultSuccess_getPonencias(tx, response){

            var div=document.getElementById("divBusqueda");

            var temp="<div>";

                        for(var i=0; i<response.rows.length; i++){
                    
                temp += "<center><h2>"+response.rows.item(i).NOMBRE+"</h2></center>";
                        temp += "<br><br>";
                        temp += "<b>Hora: </b>"+response.rows.item(i).HORA;
                        temp += "<br><br>";
                        temp += "<b>Fecha: </b>"+response.rows.item(i).FECHA;
                        temp += "<br><br>";
                        temp += "<b>N° Registro: </b>"+response.rows.item(i).REGISTRO;
                        temp += "<br><br>";
                        temp += "<b>Lugar: </b>"+response.rows.item(i).LUGAR;
                        temp += "<br><br>";
                        temp += "<b>Institucion: </b>"+response.rows.item(i).INSTITUCION;
                        temp += "<br><br>";
                        temp += "<b>Area: </b>"+response.rows.item(i).SUBAREA;
                        temp += "<br><br>";
                        temp += "<b>Sub Area: </b>"+response.rows.item(i).AREA;
                        temp += "<br><br>";
                        temp += "<b>TIPO: </b>"+response.rows.item(i).TIPO;
                        temp += "<br><br>";
                        temp += "<b>Sub Tipo: </b>"+response.rows.item(i).SUBTIPO;
                        temp += "<br><br>";
                                
            }
            temp+="</div>";
            div.innerHTML= temp;
        }


















function getMinicursos(){
    conexion();
    db.transaction(selectData_getMinicursos,errorCB_Universal,successSelect_Universal);                
}
            
    function selectData_getMinicursos(tx){
        tx.executeSql("SELECT * FROM MINICURSOS;",[],resultSuccess_getMinicursos,resultError_Universal);
    }

        function resultSuccess_getMinicursos(tx, response){

            var div=document.getElementById("divBusqueda");

            var temp="<tr>";
               temp += " <th colspan=2><center><h1>Mini-Cursos</h1></center></th>";
            temp += "</tr>";

            for(var i=0; i<response.rows.length; i++){

                temp += "<tr>";
                    temp += "<th colspan=2><center>"+response.rows.item(i).mini_nombre+"</center></th>";
                temp += "</tr>";

                temp += "<tr>";
                    temp += "<th>Cupo</th>";
                    temp += "<td>"+response.rows.item(i).mini_hora+"</td>";
                temp += "</tr>";
                temp += "<tr>";
                    temp += "<th>Hora</th>";
                    temp += "<td>"+response.rows.item(i).mini_tematica+"</td>";
                temp += "</tr>";
                temp += "<tr>";
                    temp += "<th>Temática</th>";
                    temp += "<td>"+response.rows.item(i).mini_cupo+"</td>";
                temp += "</tr>";
                temp += "<tr>";
                    temp += "<th>Lugar</th>";
                    temp += "<td>"+response.rows.item(i).lugar_nombre+"</td>";
                temp += "</tr>";
                temp += "<tr>";
                    temp += "<th>Institución</th>";
                    temp += "<td>"+response.rows.item(i).insti_nombre+"</td>";
                temp += "</tr>";
                temp += "<tr>";
                    temp += "<th>Publico Objeto</th>";
                    temp += "<td>"+response.rows.item(i).publicoobjetivo+"</td>";
                temp += "</tr>";
                temp += "<tr>";
                    temp += "<th colspan=2 bgcolor=#000></th>";
                temp += "</tr>";                                
            }
            div.innerHTML= temp;
        }













