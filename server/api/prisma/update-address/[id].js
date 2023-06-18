import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default defineEventHandler(async (body) => {
  const {
    name,
    address,
    zipCode,
    city,
    country,
    context
  } = await readBody(body);

  const res = await prisma.addresses.update({
    where: {
      id: Number(context.params.id)
    },
    data: {
      name,
      address,
      zipCode,
      city,
      country,
    }
  });

  return res;
});
