"use client";
import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

function ReservationProvidor({ children }) {
  const [range, setRange] = useState({ from: null, to: null });
  const resetRange = () => setRange({ from: null, to: null });

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvidor");
  }
  return context;
}

export { ReservationProvidor, useReservation };
