'use client'

import BasicInputText from "@/components/BasicInputText"
import BasicTroggle from "@/components/BasicTroggle"
import { useState } from "react"

import { IoMdCopy as IconCopy, IoIosRefresh as IconReset, IoMdCheckmark as IconCheck } from "react-icons/io"

export default function Home() {
  const [troggledLink, set_troggledLink] = useState<boolean>(false)

  const [topbarText, set_topbarText] = useState<string>('')
  const [topbarLink, set_topbarLink] = useState<string>('')

  const [topbarCode, set_topbarCode] = useState<string>('')

  const [hasText, set_hasText] = useState<boolean>(true)
  const [hasLink, set_hasLink] = useState<boolean>(true)

  const [isCopied, set_isCopied] = useState<boolean>(false)

  const handleCopyText = () => {
    set_isCopied(true)

    navigator.clipboard.writeText(topbarCode)
  }

  const handleGenerateCode = () => {
    if(!topbarText.trim()){
      set_hasText(false)
    } else {
      set_hasText(true)
    }

    if(!topbarLink.trim()){
      set_hasLink(false)
    } else {
      set_hasLink(true)
    }

    set_isCopied(false)
    
    set_topbarCode(`<a class="vtex-notification-bar-link" href="${troggledLink && topbarLink.trim() ? topbarLink : '#'}">${topbarText}</a>`)
  }

  const handleResetCode = () => {
    set_troggledLink(false)
    set_topbarText('')
    set_topbarLink('')
    set_topbarCode('')

    set_hasText(true)
    set_hasLink(true)

    set_isCopied(false)
  }

  return (
    <main className="bg-[url('/assets/webhero_Allos_desk.jpg')] bg-cover grayscale-[65%] flex min-h-screen flex-col items-center justify-between p-24 transition-colors duration-350">
      <div className="border border-gray-400 w-[18rem] h-[32rem] rounded-md bg-gray-100 p-5">
        <h2 className="text-teal-500 font-extrabold text-2xl text-center">ALLOS</h2>
        <h3 className="text-gray-600 font-semibold text-sm text-center mt-[-5px] mb-3">Gerador de Texto Topbar</h3>
      
        <label className="relative">
          <p className="text-xs font-medium text-teal-900">Qual texto você deseja na topbar?</p>
          <BasicInputText 
            inputText={topbarText}
            set_inputText={set_topbarText}
          />
          {!hasText &&
            <span className="text-xs font-semibold text-rose-500 absolute bottom-[-1.1rem] left-0">Nota: Nenhum texto foi fornecido!</span>
          }
        </label>

        <div
          className="flex mt-6 mb-1 items-end justify-between"
        >
          <BasicTroggle 
            troggle={troggledLink}
            set_troggle={set_troggledLink}
          />
          <p className="text-xs font-medium text-teal-900">{troggledLink ? 'Deixe abaixo o link desejado!' : 'Adicionar um link na topbar?'}</p>
        </div>

        <div
          className="h-7"
        >
          {troggledLink &&
            <label className="relative">
              <BasicInputText 
                inputText={topbarLink}
                set_inputText={set_topbarLink}
              />
            {!hasLink &&
              <span className="text-xs font-semibold text-rose-500 absolute bottom-[-1.1rem] left-0">Nota: Nenhum link foi fornecido!</span>
            }
            </label>
          }
        </div>

        <div className="flex flex-col mt-6 gap-2 items-center" >
          <div className="flex items-center justify-center relative w-full">
            <button
              className="bg-teal-500 p-1 px-2 w-20 rounded-md text-gray-100 transition-colors duration-150 hover:bg-teal-600"
              onClick={handleGenerateCode}
              >
              GERAR
            </button>
            {isCopied &&
              <span className="absolute right-4 text-xs font-medium text-teal-500">COPIADO!</span>
            }
            {topbarCode.trim() &&
              <button 
              className="absolute right-0 transition-all duration-300 hover:text-lg text-teal-500 hover:text-teal-600"
              onClick={handleCopyText}
              >
                {isCopied ? 
                  <IconCheck/>
                  :
                  <IconCopy/>
                }
              </button>
            }
          </div>
          <textarea
            className="h-48 w-full bg-gray-200 rounded-md p-2 text-sm"
            value={topbarCode}
          />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-teal-500 p-1 px-2 w-20 rounded-md text-gray-100 transition-colors duration-150 hover:bg-teal-600 my-1"
            onClick={handleResetCode}
          >
            ZERAR
          </button>
        </div>
      </div>
    </main>
  )
}
