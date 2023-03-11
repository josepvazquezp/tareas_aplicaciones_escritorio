const port = process.env.PORT || 3000;

module.exports = {
    swaggerDefinition: {
        swagger: "2.0",
        info: {
            "title": "API de tareas",
            "description": "esta es una api de la tarea 5",
            "version": "1.0.0",
            "servers": ["http://localhost:" + port]
        }
    },
    apis: ["src/rutas/*.js"]
}