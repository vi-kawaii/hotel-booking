import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const bookings = await prisma.booking.findMany();
  const rooms = await prisma.room.findMany();

  const bookingsRooms = bookings.map((b) => b.room_id);

  const result = rooms.filter((r) => !bookingsRooms.includes(r.id));

  res.json(result);
}
