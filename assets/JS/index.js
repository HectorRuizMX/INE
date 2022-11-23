   const ine = {
        pNombre:'HECTOR',
        sNombre:'OMAR',
        apellidoP:'RUIZ',
        apellidoM:'CAUICH',
        fechaN:'21/07-2000',
        calle:'C 97',
        manzana:'M 11',
        lote:'L 18',
        supermanzana:'SUPMZA 220',
        codigoP:'77517',
        municipio:'BENITO JUAREZ',
        estado:'Q.ROO',
        claveE: 'RZCCHC00072123H000',
        curp:'RUCH000721HQRZCCA9',
        anoRegis:'2018 00',
        municipioN:'001',
        seccion:'0558',
        vigencia:'2018 - 2028',
        };

   
        let nombre = `${ine["pNombre"]} ${ine["sNombre"]}`;
        let dom1 = `${ine["calle"]} ${ine["manzana"]} ${ine["lote"]}`;
        let dom2 = `${ine["supermanzana"]} ${ine["codigoP"]}`;
        let dom3 = `${ine["municipio"]}, ${ine["estado"]}`;
        
        let ape1 = ine["apellidoP"];
        let ape2 = ine["apellidoM"];
        let fechaN = ine["fechaN"];
        let clave = ine["claveE"];
        let curp = ine["curp"];
        let anoRegis = ine["anoRegis"];
        let estadoN = ine["estadoN"];
        let municipioN = ine["municipioN"];
        let seccion = ine["seccion"];
        let localidad = ine["localidad"];
        let emision = ine["emision"];
        let vigencia = ine["vigencia"];


document.getElementById("apellidoP").innerHTML = ape1;
document.getElementById("apellidoM").innerHTML = ape2;
document.getElementById("nombre").innerHTML = nombre;
document.getElementById("dom1").innerHTML = dom1;
document.getElementById("dom2").innerHTML = dom2;
document.getElementById("dom3").innerHTML = dom3;
document.getElementById("claveE").innerHTML = clave;
document.getElementById("curp").innerHTML = curp;
document.getElementById("anio").innerHTML = anoRegis;
document.getElementById("numS").innerHTML = seccion;  
document.getElementById("vigencia").innerHTML = vigencia;
document.getElementById("fechaN").innerHTML = fechaN;
