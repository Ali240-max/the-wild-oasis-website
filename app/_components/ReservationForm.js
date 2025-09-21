"use client";
import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createReservation } from "../_lib/actions";

function ReservationForm({ cabin, user }) {
  const { range } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;
  const startDate = range.from;
  const endDate = range.to;
  const numNights = differenceInDays(range.to, range.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  const createBookingWithData = createReservation.bind(null, bookingData);

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary800 text-primary300 px-16 py-2 flex justify-between items-center max-sm:text-sm ">
        <p>Logged in as</p>

        <div className="flex gap-4  items-center">
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        className="bg-primary900 py-10 px-16 text-lg flex gap-5 flex-col"
        action={createBookingWithData}
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary200 text-primary800 w-full shadow-sm rounded-sm max-sm:text-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary200 text-primary800 w-full shadow-sm rounded-sm max-sm:text-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          {!startDate && !endDate ? (
            <p className="text-primary-300 text-base whitespace-nowrap">
              Start by selecting dates
            </p>
          ) : (
            <button className="bg-accent500 px-4 py-2 whitespace-nowrap text-primary800 font-semibold hover:bg-accent600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 cursor-pointer">
              Reserve now
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
