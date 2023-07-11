import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { from, to } = JSON.parse(req.body);

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
    },
    select: {
      id: true
    }
  });

  const rooms = await prisma.room.findMany({
    where: {
      id: {
        in: bookings.map(b => b.id)
      }
    }
  });

  res.json(rooms);
}
