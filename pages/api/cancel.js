import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const { id } = req.body;

  await prisma.booking.delete({
    where: {
      id,
    },
  });

  res.end();
}
