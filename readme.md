# Alexa Skill - Práctica 03 Kalid

## Descripción
Esta skill responde a 4 preguntas personalizadas por comandos de voz usando el modelo de interacción de Alexa:

- ¿Quién creó la aplicación?
- ¿Qué carrera estudia?
- ¿Cuál es su color favorito?
- ¿Cuál es su artista favorito?

## Intents
Se agregó un solo Intent llamado `PreguntaIntent` que utiliza un slot personalizado `TIPO_PREGUNTA` con las siguientes opciones:

- color favorito
- artista
- carrera
- creador

## Respuestas programadas
Las respuestas están codificadas de forma estática en el archivo `index.js`.

## Pruebas realizadas
Se probó correctamente la skill en el simulador de Alexa:

- ✔️ ¿Cuál es tu color favorito?
- ✔️ ¿Quién es tu creador?
- ✔️ ¿Cuál es tu artista favorito?
- ✔️ ¿Qué carrera estudiaste?
- ❌ Preguntas fuera de esas generan un mensaje de error controlado.

## Tecnologías
- Node.js
- Alexa Skills Kit SDK v2
- Alexa Developer Console

## Autor
Kalid
