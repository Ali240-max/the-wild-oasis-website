"use client";
import { useFormStatus } from "react-dom";
import { updateReservation } from "../_lib/actions";

function EditReservationForm({
  maxCapacity,
  reservationId,
  numGuests,
  observations,
}) {
  return (
    <form
      className="bg-primary900 py-8 px-12 text-lg flex gap-6 flex-col"
      action={updateReservation}
    >
      <div className="space-y-2">
        <label htmlFor="numGuests">How many guests?</label>
        <select
          name="numGuests"
          id="numGuests"
          className="px-5 py-3 bg-primary-200 text-primary800 w-full shadow-sm rounded-sm"
          required
          defaultValue={numGuests}
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
        <input type="hidden" name="reservationId" value={reservationId} />
      </div>

      <div className="space-y-2">
        <label htmlFor="observations">
          Anything we should know about your stay?
        </label>
        <textarea
          name="observations"
          className="px-5 py-3 bg-primary200 text-primary800 w-full shadow-sm rounded-sm"
          defaultValue={observations}
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <Button />
      </div>
    </form>
  );
}

export default EditReservationForm;

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-accent500 px-8 py-4 text-primary800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 cursor-pointer"
      disabled={pending}
    >
      {pending ? "Updating..." : "Update reservation"}
    </button>
  );
}
