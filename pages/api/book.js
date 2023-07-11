import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const { room_id, from, to, is_vip } = JSON.parse(req.body);

  const bookings = await prisma.booking.findMany({
    where: {
      AND: [
        {
          from: {
            gte: new Date(to)
          }
        },
        {
          to: {
            lte: new Date(from)
          }
        }
      ]
    }
  });

  if (bookings.length === 0) {
    res.end();
    return;
  }

  await prisma.booking.create({
    data: {
      room_id,
      from: new Date(from),
      to: new Date(to),
      is_vip,
    },
  });

  res.end();
}
