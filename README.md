# PSYTEN

Experiencia web psicodélica de una sola página — pieza de demostración del portfolio de
[Ruiz & Davies](https://ruizdavies.com). El dominio psyten.es pertenece a una marca que ya
no opera; esta web es un experimento de diseño.

## Tecnología

HTML, CSS y JavaScript **puros**, sin build ni dependencias. Se sirve tal cual.

```
index.html
assets/
├─ css/styles.css     # toda la estética (aurora animada, blobs "goo", gradientes)
├─ js/psy.js          # blob que sigue al cursor, reveal al scroll, "trip mode"
└─ img/favicon.svg
CNAME                 # psyten.es
```

## Desarrollo local

No necesita nada. Abrir `index.html` en el navegador, o servir la carpeta:

```bash
python3 -m http.server 8080
```

## Deploy (GitHub Pages)

Al ser estático puro, se publica **directo desde la rama**:
Settings → Pages → Build and deployment → Source: **Deploy from a branch** → `main` / `root`.

Se sirve en `https://quitiweb.github.io/psyten/` (rutas relativas, funciona bajo subcarpeta).
Para usar el dominio `psyten.es` en el futuro: añadir un archivo `CNAME` con `psyten.es`
y apuntar los registros A del dominio a las IPs de GitHub Pages
(185.199.108–111.153).

## Notas de diseño

Estilo deliberadamente **opuesto** al resto del portfolio (p. ej. el retro de ruizdavies.com):
gradientes vibrantes, tipografía *groovy* (Shrikhand / Monoton), blobs líquidos con filtro SVG
`goo` y un modo psicodélico interactivo. `prefers-reduced-motion` desactiva las animaciones.
