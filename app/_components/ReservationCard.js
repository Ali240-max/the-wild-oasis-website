import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex border max-sm:flex-col border-primary800">
      <div className="relative h-32 aspect-square">
        <img
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover border-r border-primary800 max-sm:h-32 max-sm:w-full"
        />
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="text-lg text-primary300">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex  gap-5 mt-auto items-baseline">
          <p className="text-xl font-semibold text-accent400">${totalPrice}</p>
          <p className="text-primary300">&bull;</p>
          <p className="text-lg text-primary300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="ml-auto text-sm text-primary400">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div
        className="flex flex-col max-sm:flex-row max-sm:items-center max-sm:justify-evenly border-l border-primary800 w-[100px] max-sm:flex-1 max-sm:w-full max-sm:mt-4 max-sm:px-2 max-sm:py-4 max-sm:border-l-0 max-sm:border-t max-sm:gap-3
  "
      >
        {!isPast(startDate) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 max-sm:flex-1 uppercase text-xs font-bold text-primary300 border-b max-sm:border-none border-primary800 flex-grow  px-3 hover:bg-accent600 transition-colors hover:text-primary900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary600 group-hover:text-primary800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
