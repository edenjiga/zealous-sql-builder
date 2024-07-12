import prisma from '../prismaClient';

export const getAllTechnologies = async () => {
  return prisma.technology.findMany();
};
