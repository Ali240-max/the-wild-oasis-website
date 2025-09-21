import EditReservationForm from "@/app/_components/EditReservationForm";
import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const resolvedParams = await params;
  const reservationId = resolvedParams.reservationId;
  const { cabinId, numGuests, observations } = await getBooking(reservationId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <EditReservationForm
        maxCapacity={maxCapacity}
        reservationId={reservationId}
        numGuests={numGuests}
        observations={observations}
      />
    </div>
  );
}
