import Spinner from "../_components/Spinner";

function Loading() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Spinner />
      <p className="text-2xl text-primary200 font-semibold">
        Loading cabins data...
      </p>
    </div>
  );
}

export default Loading;
