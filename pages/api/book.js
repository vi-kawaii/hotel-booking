import prisma from "../../lib/prisma";
import areIntervalsOverlapping from "date-fns/areIntervalsOverlapping";

export default async function handler(req, res) {
  const { room_id, from, to, is_vip } = JSON.parse(req.body);

  const bookings = await prisma.booking.findMany();

  let isNumberBusy = false;

  bookings.some((b) => {
    if (
      areIntervalsOverlapping(
        { start: from, end: to },
        { start: b.from, end: b.from }
      )
    ) {
      isNumberBusy = true;
    }
  });

  if (isNumberBusy) {
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
