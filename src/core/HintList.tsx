import { LoadIndicatorIcon } from "./LoadIndicatorIcon";

interface IHintProps {
  data: any,
  isLoad: boolean,
  searchText: string
}
export function HintList({
  data,
  isLoad,
  searchText
}: IHintProps) {
  return (
    <div className='hintContainer'>
      {
        !isLoad ?
          <LoadIndicatorIcon />
        :
          null
      }
    </div>
  )
}