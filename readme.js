const fs = require("fs");
const path = require("path");

const directorio = __dirname;

// Función recursiva para obtener archivos y carpetas
function obtenerEstructura(dir, prefijo = "") {
  let resultado = "";
  const elementos = fs.readdirSync(dir);

  elementos.forEach((elemento) => {
    const ruta = path.join(dir, elemento);
    const relativo = path.relative(directorio, ruta);

    // Ignorar carpetas no deseadas
    if (
      elemento === "node_modules" ||
      elemento === ".git" ||
      elemento === ".next"
    )
      return;

    if (fs.statSync(ruta).isDirectory()) {
      resultado += `${prefijo}- 📁 ${elemento}\n`;
      resultado += obtenerEstructura(ruta, prefijo + "  ");
    } else {
      resultado += `${prefijo}- 📄 ${elemento}\n`;
    }
  });

  return resultado;
}

// Construir contenido del README
const estructura = obtenerEstructura(directorio);
const contenidoReadme = `# 🧾 Estructura del Proyecto

Este archivo fue generado automáticamente con \`readme.js\`.

## 📂 Contenido

${estructura}
`;

// Escribir archivo README.md
fs.writeFileSync(path.join(directorio, "README.md"), contenidoReadme, "utf8");

console.log("✅ README.md generado exitosamente");
