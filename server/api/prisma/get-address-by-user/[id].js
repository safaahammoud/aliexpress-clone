import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const userAddress = await prisma.addresses.findFirst({
    where: { userId: Number(event.context.params.userId) },
    include: {
      orderItem: {
          include: {
            product: true,
          }
      }
    }
  });

  return userAddress;
});
