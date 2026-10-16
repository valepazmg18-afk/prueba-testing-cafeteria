# Prueba Testing - Cafetería Nanacao

## Descripción

Proyecto de pruebas automatizadas para una API REST de cafetería, utilizando **Jest** y **Supertest**.

El objetivo es verificar el correcto funcionamiento de las rutas de la API mediante pruebas que validan los códigos de respuesta y el comportamiento esperado.

## Tecnologías utilizadas

- Node.js
- Express
- Jest
- Supertest

## Pruebas realizadas

Se implementaron cuatro pruebas automatizadas:

1. **GET `/cafes`:** verifica que la ruta responda con código `200` y devuelva un arreglo con al menos un objeto.
2. **DELETE `/cafes/:id`:** comprueba que se obtenga código `404` al intentar eliminar un café inexistente.
3. **POST `/cafes`:** verifica que se agregue un nuevo café y que la respuesta tenga código `201`.
4. **PUT `/cafes/:id`:** comprueba que la ruta responda con código `400` cuando el ID de la URL es diferente al ID enviado en el cuerpo de la petición.

## Instalación y ejecución

Clonar el repositorio e instalar las dependencias:

```bash
npm install
```

Ejecutar las pruebas automatizadas:

```bash
npm test
```

## Resultado

Las cuatro pruebas automatizadas se ejecutaron correctamente utilizando Jest y Supertest.

---

### Autora

**Valentina Muñoz**

Desarrollado como parte de la evaluación de Testing de una API REST con Jest y Supertest.

*“Cada proyecto es una oportunidad para aprender algo nuevo y seguir creciendo como desarrolladora.”*

