# Proyecto: Flask Games 🎮

Este repositorio contiene el desarrollo del **Proyecto 1** de la asignatura **Programación (G02)**, en el que se implementan varios juegos clásicos de Python como una aplicación web utilizando **Flask**. El proyecto fue desarrollado para la **Facultad de Ingeniería y Ciencias Básicas** dentro del **Programa Académico de Ingeniería de Datos e Inteligencia Artificial**.

## 📌 Objetivos
- Familiarizarse con las fases de desarrollo de software: **análisis, pseudocódigo, codificación, pruebas, depuración y documentación**.
- Aplicar el uso de **funciones, estructuras de decisión y repetitivas** en Python.
- Integrar lógicas de juego clásicas en un entorno web mediante **Flask**.

## 📋 Metodología
- El proyecto fue desarrollado en **grupos de 3 a 4 personas**.
- Para cada juego, se entregaron:
  1. **Análisis del problema**.
  2. **Algoritmo en pseudocódigo**.
  3. **Implementación funcional en Python** integrada a una aplicación Flask.
  4. **Evidencias de ejecución** (capturas de pantalla).

## 🕹️ Juegos Integrados

### **Batalla Naval** 🚢
- Tablero de **5x5**, cada jugador dispone de **3 barcos**.
- La máquina posiciona sus barcos y ataca de forma aleatoria.
- El jugador ingresa sus coordenadas de forma manual.
- Se muestra en pantalla si el ataque fue **acierto o fallo**.
- Gana quien **hunde los 3 barcos del oponente**.

### **Triqui (Tic-Tac-Toe) y Juego de Memoria** ❌⭕🃏
- **Triqui:** 
  - Tablero de 3x3.
  - Empiezan de forma aleatoria el jugador y la máquina.
  - Se declara ganador tras completar una fila, columna o diagonal.
- **Juego de Memoria:**
  - Tablero de **6x5** con **15 pares de figuras**.
  - Se destapan y se comparan cartas hasta formar coincidencias.
  - Gana quien encuentre más parejas.

### **Sudoku** 🔢
- Se selecciona uno entre **5 tableros de nivel fácil** de Sudoku (9x9).
- El usuario ingresa números en las casillas vacías.
- Se validan las jugadas para evitar repeticiones en filas y columnas.
- Gana si completa correctamente el tablero.

### **Black Jack** 🃏
- Se juega con un mazo estándar de 52 cartas.
- Objetivo: alcanzar **21 puntos** o lo más cercano sin pasarse.
- Cada jugador parte con **50 créditos** y puede apostar hasta **10 créditos** por ronda.
- Gana quien logre **100 créditos** primero.

### **Rummy** 🃏
- Se utiliza un mazo de 52 cartas.
- Cada jugador recibe **3 cartas** al inicio.
- Se forman tríos de cartas del mismo valor.
- En cada turno se puede robar o descartar cartas.
- Gana el que consigue el trío primero.

## 🚀 Cómo Ejecutar la Aplicación

1. **Instalación de dependencias:**  
   Asegúrate de tener [Python 3.x](https://www.python.org/downloads/) instalado y luego instala Flask ejecutando:
   ```bash
   pip install Flask
   ```

2. **Estructura del Proyecto:**
   ```plaintext
   / 
   │── README.md           # Documentación del proyecto
   │── app.py              # Archivo principal de la aplicación Flask
   │── templates/          # Plantillas HTML para la interfaz web
   │   ├── index.html      # Página principal
   │   ├── batalla_naval.html
   │   ├── triqui.html
   │   ├── memoria.html
   │   ├── sudoku.html
   │   ├── blackjack.html
   │   └── rummy.html
   │── static/             # Archivos estáticos (CSS, JS, imágenes)
   │── juegos/             # Lógica de cada juego en Python
       ├── batalla_naval.py
       ├── triqui.py
       ├── memoria.py
       ├── sudoku.py
       ├── blackjack.py
       └── rummy.py
   ```

## 🛠 Requisitos
- Python 3.x
- No se requiere instalación de librerías adicionales

## 📜 Licencia
Este proyecto está bajo la licencia MIT - Puedes usarlo libremente. 😊

---
¡Esperamos que disfrutes estos juegos en Python! 🚀

## Autor
📌 **By:** Deyton Riascos Ortiz