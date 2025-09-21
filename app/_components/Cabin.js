import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import TextExpander from "./TextExpander";

function Cabin({ cabin }) {
  const { name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="flex max-sm:flex-col gap-8 border border-primary-800 py-3 px-6 mb-16 max-sm:mb-10 max-sm:px-2">
      {/* Image */}
      <div className="relative h-64 max-sm:h-48 flex-[3] max-sm:flex-none">
        <Image
          fill
          className="object-cover rounded-lg"
          src={image}
          alt={`Cabin ${name}`}
        />
      </div>

      {/* Content */}
      <div className="flex-[4] max-sm:flex-none">
        <h3 className="text-accent100 font-black text-5xl max-sm:text-2xl mb-5 bg-primary950 p-4 pb-2 max-sm:w-full">
          Cabin {name}
        </h3>

        <p className="text-lg text-primary300 mb-6 max-sm:text-base">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-3 mb-5">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg max-sm:text-base">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg max-sm:text-base">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg max-sm:text-base">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
