// import SideNavigation from "@/app/_components/SideNavigation";

// export default function Layout({ children }) {
//   return (
//     <div
//       className="
//       grid
//       grid-cols-[16rem_1fr]
//       max-sm:grid-cols-1
//       max-sm:grid-rows-[30px_1fr]
//       h-full
//       gap-12"
//     >
//       <SideNavigation />
//       <div className="py-1">{children}</div>
//     </div>
//   );
// }

import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div
      className="
      grid
      grid-cols-[16rem_1fr]
      max-sm:grid-cols-1
      max-sm:grid-rows-[auto_1fr]
      h-full
      gap-12
      max-sm:gap-6
    "
    >
      <SideNavigation />

      <div className="py-1 max-sm:px-4">{children}</div>
    </div>
  );
}
