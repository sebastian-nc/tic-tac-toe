# Tic Tac Toe (React + Vite)

Pequeño proyecto de Tic Tac Toe creado con React + Vite. Interfaz mínima para jugar entre dos jugadores en local.

Características
- Implementación sencilla en [React] con el componente principal [`App`](src/App.jsx).
- Estado del juego manejado con React hooks: [`turn`](src/App.jsx), [`squares`](src/App.jsx), [`playerWin`](src/App.jsx).
- Lógica de juego en [`selectChart`](src/App.jsx) y reseteo con [`resetGame`](src/App.jsx).
- Configuración de arranque y build mediante [Vite](vite.config.js) y scripts en [package.json](package.json).

Archivos importantes
- [src/App.jsx](src/App.jsx) — Componente principal y reglas del juego (`App`).
- [src/main.jsx](src/main.jsx) — Punto de entrada de la app.
- [index.html](index.html) — HTML base.
- [vite.config.js](vite.config.js) — Configuración de Vite.
- [package.json](package.json) — Scripts y dependencias.

Instalación y ejecución
1. Instalar dependencias:
```sh
npm install
```
