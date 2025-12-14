async function generarPDF() {
  
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  let y = 40;
  let alt = 7;
  let x = 20;
  let der = 15;
  // --- Funciones auxiliares ---
  function getValue(id) {
    const el = document.getElementById(id);
    return el ? el.value || "" : "";
  }

  function check(id) {
    const el = document.getElementById(id);
    return el && el.checked ? "Sí" : "No";
  }

  function addText(text) {
    doc.text(text, x, y);
    doc.rect(der, 35, 60, alt, 'S');      
    
    x +=60;
    der +=60;
    if (x > 179) {     
      x = 20;
      y += 7;
      der = 15;
      alt += 7;
    }
    
  }
  let y1 = 100;
  let alt1 = 7;
  let x1 = 20;
  let der1 = 15;
  function addText1(text) { 
    doc.text(text, x1, y1);
    doc.rect(der1, 95, 60, alt1, 'S');      
    
    x1 +=60;
    der1 +=60;
    if (x1 > 179) {     
      x1 = 20;
      y1 += 7;
      der1 = 15;
      alt1 += 7;
    }
  }

  let y2 = 130;
  let alt2 = 7;
  let x2 = 20;
  let der2 = 15;
  function addText2(text) { 
    doc.text(text, x2, y2);
    doc.rect(der2, 125, 60, alt2, 'S');      
    
    x2 +=60;
    der2 +=60;
    if (x2 > 179) {     
      x2 = 20;
      y2 += 7;
      der2 = 15;
      alt2 += 7;
    }
  }
  let y3 = 146;
  let alt3 = 7;
  let x3 = 20;
  let der3 = 15;
  function addText3(text) { 
    doc.text(text, x3, y3);
    doc.rect(der3, 142, 36, alt3, 'S');      
    
    x3 +=36;
    der3 +=36;
    if (x3 > 179) {     
      x3 = 20;
      y3 += 7;
      der3 = 15;
      alt3 += 7;
    }
  }
  let y4 = 200;
  let alt4 = 7;
  let x4 = 20;
  let der4 = 15;
  function addText4(text) { 
    doc.text(text, x4, y4);
    doc.rect(der4, 195, 45, alt4, 'S');      
    
    x4 +=45;
    der4 +=45;
    if (x4 > 179) {     
      x4 = 20;
      y4 += 7;
      der4 = 15;
      alt4 += 7;
    }
  }
  let y5 = 223;
  let alt5 = 7;
  let x5 = 20;
  let der5 = 15;
  function addText5(text) { 
    doc.text(text, x5, y5);
    doc.rect(der5, 218, 90, alt5, 'S');      
    
    x5 +=90;
    der5 +=90;
    if (x5 > 179) {     
      x5 = 20;
      y5 += 7;
      der5 = 15;
      alt5 += 7;
    }
  }
  let y6 = 253;
  let alt6 = 7;
  let x6 = 20;
  let der6 = 15;
  function addText6(text) { 
    doc.text(text, x6, y6);
    doc.rect(der6, 248, 90, alt6, 'S');      
    
    x6 +=90;
    der6 +=90;
    if (x6 > 179) {     
      x6 = 20;
      y6 += 7;
      der6 = 15;
      alt6 += 7;
    }
  }
  async function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function addImages(fileInputs, title) {
    const allFiles = [];

    // Permite pasar un array de IDs
    for (const input of fileInputs) {
      const el = document.getElementById(input);
      if (el && el.files.length > 0) {
        allFiles.push(...el.files);
      }
    }

    if (allFiles.length === 0) return;

    addText(title);

    for (const file of allFiles) {
      const imgData = await toBase64(file);
      doc.addImage(imgData, "JPEG", 20, y, 80, 60);
      y += 65;
      if (y > 260) {
        doc.addPage();
        encabezado();
        y = 30;
      }
    }
  }

  
  function encabezado() {
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 255);
    doc.rect(10, 10, 190, 270, 'S');
    doc.text("Hoja de Vida Fuente", 60, 20,);
    doc.setFontSize(8);
    doc.setTextColor(0, 0, 0);
  }

  // --- Contenido del PDF ---
  encabezado();

  // Nodo
  doc.setFillColor(212, 206, 205);
  doc.rect(15, 25, 180, 8, 'F');
   
  addText(`Fecha: ${getValue("fecha")}`);
  addText(`Ciudad: ${getValue("ciudad")}`);
  addText(`Nodo: ${getValue("nodo")}`);
  addText(`Movil: ${getValue("movil")}`);
  addText(`Placa: ${getValue("placa")}`);
  addText(`Fuente: ${getValue("fuente")}`);
  addText(`Direccion: ${getValue("dir")}`);
  addText(`Orden de trabajo: ${getValue("ot")}`);
  addText(`Ultimo Mantenimiento: ${getValue("fecha_ult")}`);
  addText(`Contador: ${check("contador")}`);
  addText(`Lectura contador: ${getValue("lec_cont")}`);
  addText(`Lectura contador: ${getValue("lec_cont")}`);
  addText(`Ubicacion: ${getValue("ubicacion")}`);
  addText(`Tipo Fuente: ${getValue("tipo_fuente")}`);
  addText(`Tipo SPT: ${getValue("spt")}`);
  addText(`TARJETA LAP: ${getValue("t_lap")}`);
  addText(`TIPO GABINETE: ${getValue("gabinete")}`);
  addText(`Red Electrica: ${getValue("electrica")}`);
  
  doc.setFillColor(212, 206, 205);
  doc.rect(15, 85, 180, 8, 'F');
  doc.setFontSize(10);
  doc.text("Datos Fuente", 15, 91);
  doc.setFontSize(8);
  addText1(`Serial Fuente: ${getValue("serial_f")}`);
  addText1(`Vol AC entrada: ${getValue("v_ac_in")}`);
  addText1(`Vol N-T Entrada: ${getValue("v_nt")}`);
  addText1(`Amp Entrada: ${getValue("amp")}`);
  addText1(`Vol AC Salida: ${getValue("v_ac_out")}`);
  addText1(`Amp salida: ${getValue("amp_out")}`);
  addText1(`RESISTENCIA SPT: ${getValue("resistencia")}`);

  doc.setFillColor(212, 206, 205);
  doc.rect(15, 117, 180, 8, 'F');
  doc.setFontSize(10);
  doc.text("Banco Principal", 15, 123);
  doc.setFontSize(8);
  doc.rect(15, 134, 36, 8, 'S');
  doc.rect(51, 134, 36, 8, 'S');
  doc.rect(87, 134, 36, 8, 'S');
  doc.rect(123, 134, 36, 8, 'S');
  doc.rect(159, 134, 36, 8, 'S');  
  doc.text("Bateria LFP", 58, 140);
  doc.text("Bateria 1", 98, 140);
  doc.text("Bateria 2", 135, 140);
  doc.text("Bateria 3", 169, 140);
  addText2(`Vol de Carga: ${getValue("c_banco")}`);
  addText2(`Ventilador Externo: ${getValue("ventilador")}`);
  addText2(`Compensador de Bateria: ${getValue("compensador")}`);

  addText3(`VOL EN VACIO:`);
  addText3(`  ${getValue("vacio_lfp")}`);
  addText3(`  ${getValue("vacio_1")}`);
  addText3(`  ${getValue("vacio_2")}`);
  addText3(`  ${getValue("vacio_3")}`);
  addText3(`VOL CON CARGA:`);
  addText3(`  ${getValue("carga_lfp")}`);
  addText3(`  ${getValue("carga_1")}`);
  addText3(`  ${getValue("carga_2")}`);
  addText3(`  ${getValue("carga_3")}`);
  addText3(`CONDUCTANCIA:`);
  addText3(`  ${getValue("cond_lfp")}`);
  addText3(`  ${getValue("cond_1")}`);
  addText3(`  ${getValue("cond_2")}`);
  addText3(`  ${getValue("cond_3")}`);
  addText3(`FECHA FABRICACION:`);
  addText3(`  ${getValue("f_fab_lfp")}`);
  addText3(`  ${getValue("f_fab_1")}`);
  addText3(`  ${getValue("f_fab_2")}`);
  addText3(`  ${getValue("f_fab_3")}`);
  addText3(`MARCA:`);
  addText3(`  ${getValue("marca_lfp")}`);
  addText3(`  ${getValue("marca_1")}`);
  addText3(`  ${getValue("marca_2")}`);
  addText3(`  ${getValue("marca_3")}`);
  addText3(`SERIAL:`);
  addText3(`  ${getValue("serial_lfp")}`);
  addText3(`  ${getValue("serial_1")}`);
  addText3(`  ${getValue("serial_1")}`);
  addText3(`  ${getValue("serial_3")}`);

  doc.setFillColor(212, 206, 205);
  doc.rect(15, 187, 180, 8, 'F');
  doc.setFontSize(10);
  doc.text("Niveles de Operacion", 15, 193);
  addText4(`CH30:  ${getValue("ch30")}`);
  addText4(`CH70:  ${getValue("ch70")}`);
  addText4(`CH93:  ${getValue("ch93")}`);
  addText4(`CH124:  ${getValue("ch124")}`);
  addText4(`TX:  ${getValue("tx")}`);
  addText4(`RX:  ${getValue("rx")}`);
  addText4(`SRN UP:  ${getValue("snr_up")}`);
  addText4(`SRN DW:  ${getValue("snr_dw")}`);

  doc.setFillColor(212, 206, 205);
  doc.rect(15, 210, 90, 8, 'F');
  doc.setFontSize(10);
  doc.text("Sistema de proteccion Electrico", 15, 215);

  doc.setFillColor(212, 206, 205);
  doc.rect(105, 210, 90, 8, 'F');
  doc.setFontSize(10);
  doc.text("Material de Calibracion", 105, 215);
  addText5(`Breaker HD:  ${check("brk")}`);
  addText5(`FAM:  ${getValue("fam")}`);
  addText5(`Descargador:  ${check("desc")}`);
  addText5(`FPA:  ${getValue("fpa")}`);
  addText5(`Sugender:  ${check("sugender")}`);

  doc.setFillColor(212, 206, 205);
  doc.rect(15, 240, 180, 8, 'F');
  doc.setFontSize(10);
  doc.text("Material de Aseguramiento", 15, 245);
  addText6(`CANDADO MUL-T-LOCK:   ${check("lock")}`);
  addText6(`CANDADO SEGUREX:    ${check("segurex")}`);
  addText6(`BARRA DE SEGURIDAD:   ${check("barra")}`);
  addText6(`TAMPER SWITCH:    ${check("tamper")}`);
  /*
  addText(`Obs: ${getValue("obsNodo")}`);
  await addImages(["fotoTelemetria"], "Foto Telemetría");
  await addImages(["fotoKou1", "fotoKou2", "fotoKou3"], "Foto KOU");
  await addImages(["fotoQoe"], "Foto QoE");
  await addImages(["fotoNodo"], "Foto Nodo");

  /* Fuente
  doc.addPage(); y = 30; encabezado();
  addText("Fuente");
  addText(`Gabinete: ${check("gabineteFuente")} | Candado: ${check("candadoFuente")}`);
  addText(`Obs: ${getValue("obsFuente")}`);
  await addImages(["fotoFuente"], "Foto Fuente");

  // Activos
  for (let i = 1; i <= 3; i++) {
    doc.addPage(); y = 30; encabezado();
    addText(`Activo ${i}: ${getValue("nombreActivo" + i)}`);
    addText(`Herraje: ${check("herrajeA" + i)} | Gualla: ${check("guallaA" + i)} | Tierra: ${check("tierraA" + i)}`);
    addText(`Obs: ${getValue("obsA" + i)}`);
    await addImages(["fotoActivo" + i], "Fotos Activo " + i);
  }

  // Recorrido
  doc.addPage(); y = 30; encabezado();
  addText("Recorrido del nodo");
  addText(`Obs: ${getValue("obsRecorrido")}`);
  await addImages(["fotoRecorrido1", "fotoRecorrido2", "fotoRecorrido3"], "Fotos Recorrido");
  
  // Infraestructura
  doc.addPage(); y = 30; encabezado();
  addText("Infraestructura del nodo");
  addText(`Obs: ${getValue("obsInfraestructura")}`);
  await addImages(["fotoInfraestructura"], "Fotos Infraestructura");

  
  // Guardar PDF*/
  doc.save(`${getValue("nodo")}${getValue("fuente")}`);
}
