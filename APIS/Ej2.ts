/*
Tests de las Request GET

1. Obtener todos los post:

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("La respuesta es un array", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.be.an('array');
});

2. Obtener un post específico:

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("El post tiene las propiedades correctas", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.all.keys('id', 'title', 'body', 'userId');
});

3. Obtener comentarios de un post:

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Cada comentario tiene los campos requeridos", function () {
    var jsonData = pm.response.json();
    jsonData.forEach(function(comment) {
        pm.expect(comment).to.have.all.keys('id', 'name', 'email', 'body', 'postId');
    });
});


Test de Request POST

pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Se generó un ID para el post", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.id).to.exist;
});


Tests Básicos

pm.test("Status code is 200 o 201", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201]);
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

*/
