import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default defineEventHandler(async (body) => {
  const {
    userId,
    name,
    address,
    zipCode,
    city,
    country,
  } = await readBody(body);

  const orderAddress = await prisma.addresses.create({
    data: {
      userId,
      name,
      address,
      zipCode,
      city,
      country,
     },
  });

  return orderAddress;
});

