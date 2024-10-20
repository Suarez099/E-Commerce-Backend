import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Agregar un cliente de ejemplo
  await prisma.user.create({
    data: {
      id: 1,
      name: "Diego Suarez",
      email: "diego@test.com",
      username: "DiegoSuarez",
      password: "Diego123*",
      role: "ADMIN",
      profileImage: {
        create: {
          image_url: "https://i.pravatar.cc/300",
          public_id: "prueba",
        },
      },
      dataExtra: {
        create: {
          phone: "123456789",
          address: "Calle falsa 123",
          city: "Ciudad ficticia",
          country: "País ficticio",
          postalCode: "123456",
        },
      },
    },
  });

  // Puedes agregar más datos aquí para otras tablas
  console.log("Datos iniciales insertados correctamente.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
