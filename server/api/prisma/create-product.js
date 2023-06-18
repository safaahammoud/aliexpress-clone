import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default defineEventHandler(async (body) => {
  const {
    userId,
    stripeId,
    name,
    address,
    zipcode,
    city,
    country,
  } = await readBody(body);

  const order = await prisma.orders.create({
    data: {
      userId,
      stripeId,
      name,
      address,
      zipcode,
      city,
      country,
     },
  });

  body.products.forEach(async prod => {
    await prisma.orderItem.create({
      data: {
        orderId: order.id,
        productId: Number(prod.id),
      }
    });
  });

  return order;
});

