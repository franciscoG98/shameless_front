const mockData = {
  paquetes: [
    {
      "tipo": "pack_basico",
      "precio": 1500,
      "incluye": [
        {
          "hotel": {
            "ubication": "Miami Beach",
            "numbOfRooms": 200,
            "productCode": "HB123",
            "name": "Sunrise Hotel",
            "descript": "Hotel de lujo frente al mar",
            "startDate": "2024-05-15",
            "price": 200,
            "status": "available"
          }
        },
        {
          "ticket": {
            "ticketType": "AVION",
            "productCode": "TCK001",
            "name": "Vuelo Miami - Cancún",
            "descript": "Vuelo de ida y vuelta con aerolínea X",
            "startDate": "2024-05-15",
            "price": 300,
            "status": "available",
            "origin": "Miami",
            "destination": "Cancún"
          }
        }
      ]
    },
    {
      "tipo": "pack_full",
      "precio": 2500,
      "incluye": [
        {
          "hotel": {
            "ubication": "Las Vegas Strip",
            "numbOfRooms": 500,
            "productCode": "HB456",
            "name": "Grand Casino Hotel",
            "descript": "Hotel y casino en el corazón de Las Vegas",
            "startDate": "2024-06-01",
            "price": 300,
            "status": "available"
          }
        },
        {
          "ticket": {
            "ticketType": "AVION",
            "productCode": "TCK002",
            "name": "Vuelo Las Vegas - Nueva York",
            "descript": "Vuelo de ida y vuelta con aerolínea Y",
            "startDate": "2024-06-01",
            "price": 400,
            "status": "available",
            "origin": "Las Vegas",
            "destination": "Nueva York"
          }
        },
        {
          "excursion": {
            "productCode": "EXC001",
            "name": "Tour por el Gran Cañón",
            "descript": "Excursión de un día al Gran Cañón con guía",
            "startDate": "2024-05-20",
            "price": 150,
            "status": "available",
            "destination": "Gran Cañón",
            "duration": "1 día"
          }
        },
        {
          "evento": {
            "productCode": "EVT001",
            "name": "Concierto de Coldplay",
            "descript": "Concierto en vivo de la banda Coldplay",
            "startDate": "2024-05-25",
            "price": 80,
            "status": "available",
            "ubication": "Estadio Wembley",
            "duration": "3 horas"
          }
        }
      ]
    },
    {
      "tipo": "pack_movilidad",
      "precio": 2000,
      "incluye": [
        {
          "hotel": {
            "ubication": "Los Angeles Downtown",
            "numbOfRooms": 300,
            "productCode": "HB789",
            "name": "Downtown Hotel",
            "descript": "Hotel en el centro de Los Angeles",
            "startDate": "2024-05-20",
            "price": 250,
            "status": "available"
          }
        },
        {
          "ticket": {
            "ticketType": "TREN",
            "productCode": "TCK003",
            "name": "Pase de tren LA - San Francisco",
            "descript": "Pase de tren para múltiples viajes entre LA y SF",
            "startDate": "2024-05-20",
            "price": 200,
            "status": "available",
            "origin": "Los Angeles",
            "destination": "San Francisco"
          }
        },
        {
          "auto": {
            "carType": "SUV",
            "deadlineDate": "2024-06-05",
            "productCode": "CAR003",
            "name": "Ford Explorer",
            "descript": "Vehículo utilitario deportivo",
            "price": 80,
            "startDate": "2024-05-30",
            "status": "available"
          }
        }
      ]
    }
  ],
  hoteles: [
    {
      "ubication": "Miami Beach",
      "numbOfRooms": 200,
      "productCode": "HB123",
      "name": "Sunrise Hotel",
      "descript": "Hotel de lujo frente al mar",
      "startDate": "2024-05-15",
      "price": 200,
      "status": "available",
      "image": "https://plus.unsplash.com/premium_photo-1678240508014-d1ab7345bfe6?q=80&w=1342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "imageAlt": "Hotel en Miami"
    },
    {
      "ubication": "Las Vegas Strip",
      "numbOfRooms": 500,
      "productCode": "HB456",
      "name": "Grand Casino Hotel",
      "descript": "Hotel y casino en el corazón de Las Vegas",
      "startDate": "2024-06-01",
      "price": 300,
      "status": "available",
      "image": "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "imageAlt": "Hotel en Las Vegas"
    },
    {
      "ubication": "Los Angeles Downtown",
      "numbOfRooms": 300,
      "productCode": "HB789",
      "name": "Downtown Hotel",
      "descript": "Hotel en el centro de Los Angeles",
      "startDate": "2024-05-20",
      "price": 250,
      "status": "available",
      "image": "https://images.unsplash.com/photo-1519602985774-5ca448b50061?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "imageAlt": ""
    }
  ],
  autos: [
    {
      "carType": "Sedan",
      "deadlineDate": "2024-05-20",
      "productCode": "CAR001",
      "name": "Toyota Camry",
      "descript": "Automóvil sedán de 4 puertas",
      "price": 50,
      "startDate": "2024-05-15",
      "status": "available"
    },
    {
      "carType": "SUV",
      "deadlineDate": "2024-06-05",
      "productCode": "CAR002",
      "name": "Ford Explorer",
      "descript": "Vehículo utilitario deportivo",
      "price": 80,
      "startDate": "2024-05-30",
      "status": "available"
    },
    {
      "carType": "SUV",
      "deadlineDate": "2024-06-05",
      "productCode": "CAR003",
      "name": "Ford Explorer",
      "descript": "Vehículo utilitario deportivo",
      "price": 80,
      "startDate": "2024-05-30",
      "status": "available"
    }
  ],
  tickets: [
    {
      "ticketType": "AVION",
      "productCode": "TCK001",
      "name": "Vuelo Miami - Cancún",
      "descript": "Vuelo de ida y vuelta con aerolínea X",
      "startDate": "2024-05-15",
      "price": 300,
      "status": "available",
      "origin": "Miami",
      "destination": "Cancún"
    },
    {
      "ticketType": "TREN",
      "productCode": "TCK002",
      "name": "Tren Madrid - Barcelona",
      "descript": "Billete de tren de alta velocidad",
      "startDate": "2024-06-01",
      "price": 100,
      "status": "available",
      "origin": "Madrid",
      "destination": "Barcelona"
    },
    {
      "ticketType": "COLECTIVO",
      "productCode": "TCK003",
      "name": "Colectivo Suipacha - Las Toninas",
      "descript": "Boleto de colectivo",
      "startDate": "2024-03-16",
      "price": 150,
      "status": "available",
      "origin": "Suipacha",
      "destination": "Las Toninas"
    }
  ],
  excursiones: [
    {
      "productCode": "EXC001",
      "name": "Tour por el Gran Cañón",
      "descript": "Excursión de un día al Gran Cañón con guía",
      "startDate": "2024-05-20",
      "price": 150,
      "status": "available",
      "destination": "Gran Cañón",
      "duration": "1 día"
    },
    {
      "productCode": "EXC002",
      "name": "Excursión a Machu Picchu",
      "descript": "Tour de varios días a Machu Picchu con alojamiento y comidas incluidas",
      "startDate": "2024-06-10",
      "price": 1000,
      "status": "available",
      "destination": "Machu Picchu",
      "duration": "5 días"
    }
  ],
  eventos: [
    {
      "productCode": "EVT001",
      "name": "Concierto de Coldplay",
      "descript": "Concierto en vivo de la banda Coldplay",
      "startDate": "2024-05-25",
      "price": 80,
      "status": "available",
      "ubication": "Estadio Wembley",
      "duration": "3 horas"
    },
    {
      "productCode": "EVT002",
      "name": "Festival de Cannes",
      "descript": "Festival de cine anual en Cannes",
      "startDate": "2024-06-15",
      "price": 200,
      "status": "available",
      "ubication": "Cannes, Francia",
      "duration": "1 semana"
    }
  ]
}

export default mockData;
