import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Agregar un cliente de ejemplo
  await prisma.customer.create({
    data: {
      name: 'Diego Suarez',
      email: 'diego@correo.com',
      lastname: 'diegosuarez',
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
