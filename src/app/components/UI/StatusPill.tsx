import classNames from "classnames";

const StatusPill = ({ value }: any) => {
  const level = value ? value?.toLowerCase() : "unknown";

  return (
    <span
      className={classNames(
        "capitalize leading-wide",

        level.startsWith("accident")
          ? " text-red-800 bg-red-200 px-3 py-1 rounded-lg"
          : null,
        level.startsWith("in-service")
          ? " text-[#3a3b3c] bg-[#e9edf5] px-2 py-1 rounded-lg"
          : null,
        level.startsWith("available")
          ? " text-[#3a9769] border bg-[#c7edda] py-1 px-2 rounded"
          : null,
        level.startsWith("rented")
          ? " text-orange-900 border bg-orange-200 py-1 px-4 rounded-lg"
          : null
      )}
    >
      {level}
    </span>
  );
};

export { StatusPill };
