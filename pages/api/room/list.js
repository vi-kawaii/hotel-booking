import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const body = req.body;

  console.log(body);

  const result = await prisma.room.findMany();

  await prisma.room.create({
    data: {
      isFree: true,
    },
  });

  res.json(result);
}
