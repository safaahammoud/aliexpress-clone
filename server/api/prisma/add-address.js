import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default defineEventHandler(async (body) => {
  const {
    userId,
    name,
    address,
    zipcode,
    city,
    country,
  } = await readBody(body);

  const orderAddress = await prisma.addresses.create({
    data: {
      userId,
      name,
      address,
      zipcode,
      city,
      country,
     }
  });

  return orderAddress;
});

