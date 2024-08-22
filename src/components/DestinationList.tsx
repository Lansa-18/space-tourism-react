type DestinationListProps = {
    dest: string,
    dispatchDestinationSwitch: (destinationIndex: number) => void,
    index: number
}


export default function DestinationList({dest, dispatchDestinationSwitch, index}: DestinationListProps) {
  return (
    <li onClick={() => dispatchDestinationSwitch(index)} className="cursor-pointer">
        {dest}
    </li>
  )
}
