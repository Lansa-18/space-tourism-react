import { useDestination } from "../context/DestinationContext";

type DestinationListProps = {
  dest: string;
  index: number;
};

export default function DestinationList({ dest, index }: DestinationListProps) {
  const { switchDestination, displayDestination } = useDestination();
  return (
    <li
      onClick={() => switchDestination(index)}
      className={
        index === displayDestination
          ? "active-destination cursor-pointer pb-3"
          : "cursor-pointer pb-3"
      }
    >
      {dest}
    </li>
  );
}
