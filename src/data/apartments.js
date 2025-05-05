// src/data/apartments.js
const apartments = [
  {
    id: 1,
    type: 'dúplex',
    level: 'planta baja + sótano',
    publicAreas: {
      salon: ['apt1-salon1.png', 'apt1-salon2.png'],
      bathBasement: ['apt1-bano1.png'],
    },
    rooms: [
      {
        name: 'Habitación 1',
        size: 12,
        images: ['apt1-hab1-1.png', 'apt1-hab1-2.png'],
        description: '',
      },
      {
        name: 'Habitación 2',
        size: 12,
        images: ['apt1-hab2-1.png', 'apt1-hab2-2.png'],
        description: '',
      },
    ],
    pricePerRoom: 1000,
    includes: ['agua', 'luz', 'internet'],
    description: 'Cómodo dúplex con salón y baño en zona salón.',
  },
  {
    id: 2,
    type: 'dúplex',
    level: 'planta baja + sótano',
    publicAreas: {
      salon: ['apt2-salon1.png', 'apt2-salon2.png'],
      bathBasement: ['apt2-bano1.png'],
    },
    rooms: [
      {
        name: 'Habitación 1',
        size: 12,
        images: ['apt2-hab1-1.png', 'apt2-hab1-2.png'],
        description: '',
      },
      {
        name: 'Habitación 2',
        size: 12,
        images: ['apt2-hab2-1.png', 'apt2-hab2-2.png'],
        description: '',
      },
    ],
    pricePerRoom: 1000,
    includes: ['agua', 'luz', 'internet'],
    description: 'Cómodo dúplex con salón y baño en zona salón.',
  },
  {
    id: 3,
    type: 'dúplex',
    level: 'planta baja + sótano',
    publicAreas: {
      salon: ['apt3-salon1.png', 'apt3-salon2.png'],
      bathBasement: ['apt3-bano1.png'],
    },
    rooms: [
      {
        name: 'Habitación 1',
        size: 12,
        images: ['apt3-hab1-1.png', 'apt3-hab1-2.png'],
        description: '',
      },
      {
        name: 'Habitación 2',
        size: 12,
        images: ['apt3-hab2-1.png', 'apt3-hab2-2.png'],
        description: '',
      },
    ],
    pricePerRoom: 1000,
    includes: ['agua', 'luz', 'internet'],
    description: 'Cómodo dúplex con salón y baño en zona salón.',
  },
  {
    id: 4,
    type: 'dúplex',
    level: 'planta baja + sótano',
    publicAreas: {
      salon: ['apt4-salon1.png', 'apt4-salon2.png'],
      bathBasement: ['apt4-bano1.png'],
    },
    rooms: [
      {
        name: 'Habitación 1',
        size: 12,
        images: ['apt4-hab1-1.png', 'apt4-hab1-2.png'],
        description: '',
      },
      {
        name: 'Habitación 2',
        size: 12,
        images: ['apt4-hab2-1.png', 'apt4-hab2-2.png'],
        description: '',
      },
    ],
    pricePerRoom: 1000,
    includes: ['agua', 'luz', 'internet'],
    description: 'Cómodo dúplex con salón y baño en zona salón.',
  },
  {
    id: 5,
    type: 'dúplex',
    level: 'planta baja + sótano',
    publicAreas: {
      salon: ['apt5-salon1.png', 'apt5-salon2.png'],
      bathBasement: ['apt5-bano1.png'],
    },
    rooms: [
      {
        name: 'Habitación 1',
        size: 12,
        images: ['apt5-hab1-1.png', 'apt5-hab1-2.png'],
        description: '',
      },
      {
        name: 'Habitación 2',
        size: 12,
        images: ['apt5-hab2-1.png', 'apt5-hab2-2.png'],
        description: '',
      },
    ],
    pricePerRoom: 1000,
    includes: ['agua', 'luz', 'internet'],
    description: 'Cómodo dúplex con salón y baño en zona salón.',
  },
  {
    id: 6,
    type: 'dúplex',
    level: 'planta baja + sótano',
    publicAreas: {
      salon: ['apt6-salon1.png', 'apt6-salon2.png'],
      bathBasement: ['apt6-bano1.png'],
    },
    rooms: [
      {
        name: 'Habitación 1',
        size: 12,
        images: ['apt6-hab1-1.png', 'apt6-hab1-2.png'],
        description: '',
      },
      {
        name: 'Habitación 2',
        size: 12,
        images: ['apt6-hab2-1.png', 'apt6-hab2-2.png'],
        description: '',
      },
      {
        name: 'Habitación 3',
        size: 12,
        images: ['apt6-hab3-1.png', 'apt6-hab3-2.png'],
        description: '',
      },
    ],
    pricePerRoom: 1000,
    includes: ['agua', 'luz', 'internet'],
    description: 'Dúplex amplio, 3 habitaciones y 3 baños, uno de ellos en la planta inferior.',
  },
  {
    id: 7,
    type: 'estudio',
    level: 'planta baja',
    publicAreas: {
      salon: ['apt7-salon1.png'],
      bathBasement: ['apt7-bano1.png'],
    },
    rooms: [
      {
        name: 'Estudio',
        size: 20,
        images: ['apt7-hab1-1.png'],
        description: '',
      },
    ],
    pricePerRoom: 1000,
    includes: ['agua', 'luz', 'internet'],
    description: 'Estudio ideal para uno.',
  },
];

export default apartments;
