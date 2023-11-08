import React from 'react'

interface IProps {
  troggle: boolean
  set_troggle: React.Dispatch<React.SetStateAction<boolean>>
}

const BasicTroggle = ({ troggle, set_troggle }: IProps) => {
  return (
    <div onClick={() => set_troggle(!troggle)}
    className={`h-[30px] min-w-[60px] flex items-center rounded-full cursor-pointer ${!troggle ? 'bg-rose-500' : 'bg-green-500'}`}
    >
    <span
      className={`bg-gray-300 h-[26px] w-[26px] block rounded-full transform ${!troggle ? 'translate-x-[2px]' : 'translate-x-[32px]'} transition-transform duration-200`}
      />
  </div>
  )
}

export default BasicTroggle
