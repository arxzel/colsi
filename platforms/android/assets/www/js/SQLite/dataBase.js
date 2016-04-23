var db=null;

function conexion(){
    db=window.openDatabase("redcolsidb","1.0","redcolsidb",9999999);
}

function updateDB(){
    conexion();
    db.transaction(updateDba,errorUpdateDba,successUpdateDba);
}

    function updateDba(tx){
        $.getJSON('http://encuentrodepartamental2016.colegioguanenta.edu.co/classesphp/JSON.php', function(data){
        //$.getJSON('http://192.168.1.10/Proyecto1/classesphp/JSON.php', function(data){
            db.transaction(function(tz) {                    

                tz.executeSql("DROP TABLE IF EXISTS PONENCIAS");
                tz.executeSql("DROP TABLE IF EXISTS INSTITUCIONES");
                tz.executeSql("DROP TABLE IF EXISTS SUBAREAS");
                tz.executeSql("DROP TABLE IF EXISTS SUBTIPOS");
                tz.executeSql("DROP TABLE IF EXISTS AREAS");
                tz.executeSql("DROP TABLE IF EXISTS TIPOS");
                tz.executeSql("DROP TABLE IF EXISTS LUGARES");
                tz.executeSql("DROP TABLE IF EXISTS CIUDADES");
                tz.executeSql("DROP TABLE IF EXISTS MINICURSOS");

                tz.executeSql("CREATE TABLE IF NOT EXISTS TIPOS         (   id_tipo         int     PRIMARY KEY, tipo_nombre        varchar(40)     NULL)");
                tz.executeSql("CREATE TABLE IF NOT EXISTS AREAS         (   id_area         int     PRIMARY KEY, area_nombre        varchar(40)     NULL)");
                tz.executeSql("CREATE TABLE IF NOT EXISTS LUGARES       (   id_lugar        int     PRIMARY KEY, lugar_nombre       varchar(40)     NULL)");
                tz.executeSql("CREATE TABLE IF NOT EXISTS CIUDADES      (   id_ciudad       int     PRIMARY KEY, ciuda_nombre       varchar(40)     NULL)");
                tz.executeSql("CREATE TABLE IF NOT EXISTS INSTITUCIONES (   id_institucion  int     PRIMARY KEY, insti_nombre       varchar(90)     NULL, id_ciudad     int             NULL)");
                tz.executeSql("CREATE TABLE IF NOT EXISTS SUBAREAS      (   id_subarea      int     PRIMARY KEY, subarea_nombre     varchar(40)     NULL, id_area       int             NULL)");
                tz.executeSql("CREATE TABLE IF NOT EXISTS SUBTIPOS      (   id_subtipo      int     PRIMARY KEY, subti_nombre       varchar(40)     NULL, id_tipo       int             NULL)");
                tz.executeSql("CREATE TABLE IF NOT EXISTS PONENCIAS     (   id_ponencia     int     PRIMARY KEY, ponen_nombre       text            NULL, ponen_hora    time            NULL, ponen_fecha       date            NULL, ponen_registro    int             NULL, id_lugar          int             NULL, id_institucion    int             NULL, id_subarea        int             NULL, id_subtipo    int     NULL)");
                tz.executeSql("CREATE TABLE IF NOT EXISTS MINICURSOS    (   id_minicurso    int     PRIMARY KEY, mini_nombre        text            NULL, mini_hora     varchar(50)     NULL, mini_tematica     varchar(50)     NULL, mini_cupo         varchar(50)     NULL, lugar_nombre      varchar(50)     NULL, insti_nombre      varchar(50)     NULL, publicoobjetivo   varchar(50)     NULL)");

                $(data).each(function(index, data){

                    if(data.tabla=='TIPOS'){
                        tz.executeSql("INSERT INTO TIPOS (id_tipo, tipo_nombre) VALUES ("+data.id_tipo+",'"+data.tipo_nombre+"');");
                    }
                    
                    if(data.tabla=='AREAS'){
                        tz.executeSql("INSERT INTO AREAS (id_area, area_nombre) VALUES ("+data.id_area+",'"+data.area_nombre+"');");
                    }
                    
                    if(data.tabla=='LUGARES'){
                        tz.executeSql("INSERT INTO LUGARES (id_lugar, lugar_nombre) VALUES ("+data.id_lugar+",'"+data.lugar_nombre+"');");
                    }
                    
                    if(data.tabla=='CIUDADES'){
                        tz.executeSql("INSERT INTO CIUDADES (id_ciudad, ciuda_nombre) VALUES ("+data.id_ciudad+",'"+data.ciuda_nombre+"');");
                    }
                    
                    if(data.tabla=='INSTITUCIONES'){
                        tz.executeSql("INSERT INTO INSTITUCIONES (id_institucion, insti_nombre, id_ciudad) VALUES ("+data.id_institucion+",'"+data.insti_nombre+"',"+data.id_ciudad+");");
                    }
                    
                    if(data.tabla=='SUBAREAS'){
                        tz.executeSql("INSERT INTO SUBAREAS (id_subarea, subarea_nombre, id_area) VALUES ("+data.id_subarea+",'"+data.subarea_nombre+"',"+data.id_area+");");
                    }
                    
                    if(data.tabla=='SUBTIPOS'){
                        tz.executeSql("INSERT INTO SUBTIPOS (id_subtipo, subti_nombre, id_tipo) VALUES ("+data.id_subtipo+",'"+data.subti_nombre+"',"+data.id_tipo+");");
                    }
                    
                    if(data.tabla=='PONENCIAS'){
                        tz.executeSql("INSERT INTO PONENCIAS (id_ponencia, ponen_nombre, ponen_hora,  ponen_fecha,  ponen_registro,  id_lugar,  id_institucion,  id_subarea,  id_subtipo) VALUES ("+data.id_ponencia+",'"+data.ponen_nombre+"','"+data.ponen_hora+"','"+data.ponen_fecha+"','"+data.ponen_registro+"',"+data.id_lugar+","+data.id_institucion+","+data.id_subarea+","+data.id_subtipo+");");
                    }

                    if(data.tabla=='MINICURSOS'){
                        tz.executeSql("INSERT INTO MINICURSOS (id_minicurso, mini_nombre, mini_hora,  mini_tematica,  mini_cupo,  lugar_nombre,  insti_nombre,  publicoobjetivo) VALUES ("+data.id_minicurso+",'"+data.mini_nombre+"','"+data.mini_hora+"','"+data.mini_tematica+"','"+data.mini_cupo+"','"+data.lugar_nombre+"','"+data.insti_nombre+"','"+data.publicoobjetivo+"');");
                    }
                });
            }, errorUpdateDba, function() { alert('Actualizacion Exitosa. Completado');$.mobile.loading( "hide" ); });
        });

        }

        function successUpdateDba(){
            //alert("Actualización Exitosa");          
        }

        function errorUpdateDba(err){
            //navigator.notification.alert("Hubo un error al actualizar la base de datos en :"+err,null,"ERROR:"+err,"OK");
            alert("Hubo un error al actualizar la base de datos en :"+err);
        }



        function createDB(tx){
            
        }

        function successCB(){
            alert("Bienvenido!");                
        }

        function errorCB_Universal(err){
            //navigator.notification.alert("Ocurrio un error fatal en la base de datos :"+err,null,"ERROR:"+err,"OK");
            alert("Ocurrio un error fatal en la base de datos :");
        }

            function successSelect_Universal(){
                //navigator.notification.alert("Datos Exitosos :",null,"EXITO:","OK");
                //alert("Datos Exitosos :");
            }

            function resultError_Universal(error){
                //navigator.notification.alert("Ocurrio un error Al intentar acceder a los datos :"+err,null,"ERROR:"+err,"OK");
                alert("Ocurrio un error Al intentar acceder a los datos :");
            }
            