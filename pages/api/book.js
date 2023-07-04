import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const { roomId, from, to, is_vip } = req.body;

  await prisma.booking.create({
    data: {
      roomId,
      from,
      to,
      is_vip,
    },
  });

  res.end();
}
