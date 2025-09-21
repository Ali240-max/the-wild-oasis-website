"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function signInAction() {
  return signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  return signOut({ redirectTo: "/" });
}

export async function updateGuest(FormData) {
  const session = await auth();
  if (!session) throw new Error("Not signed in");

  const nationalID = FormData.get("nationalID");
  const [nationality, countryFlag] = FormData.get("nationality").split("%");
  const updatedData = {
    nationality,
    nationalID,
    countryFlag,
  };

  const { data, error } = await supabase
    .from("guests")
    .update(updatedData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");
}

export async function createReservation(bookingData, FormData) {
  const session = await auth();
  if (!session) throw new Error("Not signed in");

  const numGuests = Number(FormData.get("numGuests"));
  const observations = FormData.get("observations");

  const newBooking = {
    guestId: session.user.guestId,
    ...bookingData,
    numGuests,
    observations,
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  //   console.log(newBooking);

  const { error } = await supabase.from("bookings").insert([newBooking]);
  console.log(error);

  if (error) throw new Error("Booking could not be created");

  revalidatePath(`/account/cabins/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("Not signed in");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error("You can only delete your own reservations");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted");

  revalidatePath("/account/reservations");
}

export async function updateReservation(FormData) {
  const session = await auth();
  if (!session) throw new Error("Not signed in");

  const reservationId = FormData.get("reservationId");
  const observations = FormData.get("observations");

  const numGuests = FormData.get("numGuests");
  const updatedFields = {
    numGuests,
    observations,
  };

  const { data, error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", reservationId);

  if (error) throw new Error("Booking could not be updated");

  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}
