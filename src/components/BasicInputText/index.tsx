import React from 'react'

interface IProps {
  inputText: string
  set_inputText: React.Dispatch<React.SetStateAction<string>>
  placeholderText?: string
}

const BasicInputText = ({ inputText, set_inputText, placeholderText = '' }:IProps) => {
  return (
    <input
      className="text-gray-700 font-light border border-teal-500 w-full rounded-md text-sm h-6 p-1 px-2 bg-gray-200 transition-all duration-300 focus:rounded-xl focus:border-gray-700"
      value={inputText}
      onChange={(event) =>  set_inputText(event.target.value)}
      placeholder={placeholderText}
    />
  )
}

export default BasicInputText


