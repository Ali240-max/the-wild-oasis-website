import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 max-sm:px-2 px-5 hover:bg-primary900 hover:text-primary100 transition-colors flex items-center gap-4 font-semibold text-primary200 w-full cursor-pointer">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary600" />
        <span className="max-[370px]:hidden">Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
