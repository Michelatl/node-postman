import express, { response } from "express";
import { futimes } from "fs";
import { request } from "http";

const app = express();
const PORT = 3000;
app.use(express.json());
//Administrativos
interface administrator {
  cc: string;
  nameteacher: string;
  cel: string;
  email: string;
}
let administrator: administrator[] = [
  {
    cc: "10223345",
    nameteacher: "camilo jimenez",
    cel: "345787654",
    email: "Pcamiloj@ubb.co",
  },
  {
    cc: "9223345",
    nameteacher: "Andre lara",
    cel: "313490832",
    email: "Pandreal@ubb.co",
  },
  {
    cc: "8239345",
    nameteacher: "carlos perez",
    cel: "313400982",
    email: "Pcrlosp@ubb.co",
  },
];
app.post("/administrator", function (resquest, response) {
  const body = resquest.body;
  administrator.push(body);
  response.send("El profesro fue creado correctamente");
});

app.get("/administrator", function (resquest, response) {
  response.json(administrator);
});

app.get("/administrator/:cc", function (resquest, response) {
  const cc = resquest.params.cc;
  const result = administrator.filter((item) => item.cc === cc);
  response.json(result);
});

app.get("/administrator1/:cc", function (request, response) {
  const cc = request.params.cc;
  const result = administrator.find((item) => item.cc === cc);
  if (result) {
    response.json({ cc: result.cc });
  }
});

app.put("/administrator", function (request, response) {
  const body = request.body;
  administrator.push(body);
  response.send("los profesores fueron actualizados correctamente");
});

app.put("/administrator/:cc", function (request, response) {
  const cc = request.params.cc;
  const body = request.body;
  const administratorIndex = administrator.findIndex((item) => item.cc !== cc);
  administrator[administratorIndex] = body;
  response.send("El profesor  fue actualizado correctamente");
});

app.put("/administrator1/:cc", function (request, response) {
  const cc = request.params.cc;
  const body = request.body;
  const administratorIndex = administrator.findIndex((item) => item.cc === cc);
  if (administratorIndex !== -1) {
    administrator[administratorIndex].cc = body.cc;
    response.send("El profesor fue actualizado correctamente");
  }
});

app.delete("/administrator/:cc", function (request, response) {
  const cc = request.params.cc;
  const result = administrator.filter((item) => item.cc !== cc);
  administrator = result;
  response.json("El profesor se elimino correctamente");
});

app.delete("/administrator/", function (resquest, response) {
  administrator = [];
  response.json("Se elimino la base de profesores correctamente");
});

app.delete("/administrator1/:cc", function (request, response) {
  const cc = request.params.cc;
  const administratorIndex = administrator.findIndex((item) => item.cc === cc);

  if (administratorIndex !== -1) {
    administrator[administratorIndex].cc = "";
    response.json({ cc: cc });
  }
  console.log("Se eliminó el dato del profesor correctamente");
});

//estudiantes
interface student {
  cc: string;
  namestudent: string;
  email: string;
  cel: string;
}
let student1: student[] = [
  {
    cc: "103377782",
    namestudent: "Juan camilo ramirez",
    email: "juanr@ubb.co",
    cel: "3134980678",
  },

  {
    cc: "104479782",
    namestudent: "Daniela jimenez",
    email: "Danij@ubb.co",
    cel: "3134989876",
  },

  {
    cc: "119875782",
    namestudent: "Diana Marcela Peña",
    email: "Dianap@ubb.co",
    cel: "3134980678",
  },
];

app.post("/student1", function (request, response) {
  const body = request.body;
  student1.push(body);
  response.send(`El estudiante fue creado exitosamente`);
});

app.get("/student1", function (request, response) {
  response.json(student1);
});

app.get("/student1/:cc", function (request, response) {
  const cc = request.params.cc;
  const result = student1.filter((item) => item.cc === cc);
  student1 = result;
});

app.get("/student11/:cc", function (request, response) {
  const cc = request.params.cc;
  const result = student1.find((item) => item.cc === cc);
  if (result) {
    response.json({ cc: result.cc });
  }
});

app.put("/student1", function (request, response) {
  const body = request.body;
  student1.push(body);
  response.send("El estudiante fue actualizado correctamente");
});

app.put("/student1/:cc", function (request, response) {
  const cc = request.params.cc;
  const body = request.body;
  const studentIndex = student1.findIndex((item) => item.cc !== cc);
  student1[studentIndex] = body;
  response.send("El estudiante fue actualizado correctamente");
});

app.put("/student11/:cc", function (request, response) {
  const cc = request.params.cc;
  const body = request.body;
  const studentIndex = student1.findIndex((item) => item.cc !== cc);
  if (studentIndex !== -1) {
    student1[studentIndex].cc = body.cc;
    response.send("El profesor fue actualizado correctamente");
  }
});

app.delete("/student1/:cc", function (resquest, response) {
  const cc = resquest.params.cc;
  const result = student1.filter((item) => item.cc !== cc);
  student1 = result;
  response.json("El estudiante fue eliminado correctamente");
});

app.delete("/student1", function (resquest, response) {
  student1 = [];
  response.json("se elimino la base de estudiantes correctamente");
});

app.delete("/student11/:cc", function (request, response) {
  const cc = request.params.cc;
  const studentIndex = student1.findIndex((item) => item.cc !== cc);
  if (studentIndex !== -1) {
    student1[studentIndex].cc = "";
    response.json({ cc: cc });
  }
  console.log("Se eliminó el dato del estudiante correctamente");
});

app.listen(PORT, function () {
  console.log("La aplicación es está ejecutando en: https//localhost:" + PORT);
});
