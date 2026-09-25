// admin/controllers/carrer_controllers.js

export function home(req, res) {
  let carrers = [
    {
      "id": 1,
      "name": "Ingeniería de Sistemas"
    },
    {
      "id": 2,
      "name": "Ingeniería Civil"
    },
    {
      "id": 3,
      "name": "Ingeniería Industrial"
    },
    {
      "id": 4,
      "name": "Ingeniería Mecánica"
    },
    {
      "id": 5,
      "name": "Ingeniería Electrónica"
    },
    {
      "id": 6,
      "name": "Arquitectura"
    },
    {
      "id": 7,
      "name": "Medicina Humana"
    },
    {
      "id": 8,
      "name": "Enfermería"
    },
    {
      "id": 9,
      "name": "Psicología"
    },
    {
      "id": 10,
      "name": "Derecho"
    },
    {
      "id": 11,
      "name": "Administración"
    },
    {
      "id": 12,
      "name": "Contabilidad"
    },
    {
      "id": 13,
      "name": "Economía"
    },
    {
      "id": 14,
      "name": "Marketing"
    },
    {
      "id": 15,
      "name": "Comunicación"
    },
    {
      "id": 16,
      "name": "Educación Inicial"
    },
    {
      "id": 17,
      "name": "Educación Primaria"
    },
    {
      "id": 18,
      "name": "Biología"
    },
    {
      "id": 19,
      "name": "Química"
    },
    {
      "id": 20,
      "name": "Diseño Gráfico"
    }
  ];

  return res.render('admin/carrers', {
    title: 'Admin Site)',
    carrers: carrers,
    currentPage: 'home',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}

export function students(req, res) {
  let students = [
    {
      id: 1,
      nombre: "Juan",
      apellido: "Pérez",
      carrera: "Ingeniería de Sistemas",
      edad: 20
    },
    {
      id: 2,
      nombre: "María",
      apellido: "García",
      carrera: "Ingeniería Civil",
      edad: 21
    },
    {
      id: 3,
      nombre: "Carlos",
      apellido: "Rodríguez",
      carrera: "Ingeniería Industrial",
      edad: 22
    },
    {
      id: 4,
      nombre: "Ana",
      apellido: "López",
      carrera: "Arquitectura",
      edad: 19
    },
    {
      id: 5,
      nombre: "Luis",
      apellido: "Martínez",
      carrera: "Medicina Humana",
      edad: 23
    }
  ];

  return res.render('admin/students', {
    title: 'Admin Site)',
    students: students,
    currentPage: 'home',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}


