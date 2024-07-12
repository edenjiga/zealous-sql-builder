import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const technologies = await prisma.technology.createMany({
    data: [{ name: 'Node' }, { name: 'React' }, { name: 'Kubernetes' }],
  });

  const users = await prisma.user.createMany({
    data: [
      { name: 'Alice', status: 'available' },
      { name: 'Bob', status: 'unavailable' },
      { name: 'Charlie', status: 'available' },
      { name: 'Dave', status: 'unavailable' },
      { name: 'Eve', status: 'available' },
    ],
  });

  const userTechnologies = await prisma.userTechnology.createMany({
    data: [
      { userId: 1, technologyId: 1 },
      { userId: 1, technologyId: 2 },
      { userId: 2, technologyId: 1 },
      { userId: 3, technologyId: 3 },
      { userId: 4, technologyId: 2 },
      { userId: 5, technologyId: 3 },
      { userId: 5, technologyId: 1 },
    ],
  });

  console.log({ technologies, users, userTechnologies });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
