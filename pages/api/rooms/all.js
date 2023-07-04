import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const result = await prisma.room.findMany();

  res.json(result);
}
