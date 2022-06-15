import React from 'react'
import { MdOutlineQueueMusic } from 'react-icons/md'
import { BsSpeaker, BsPauseFill } from 'react-icons/bs'
import { RiSurroundSoundLine } from 'react-icons/ri'

const Left = ({ props_ChangeMusic }) => {
  return (
    <div className="bg-orange-300 h-screen col-span-4 relative">
      <img
        src="./images/647786.gif"
        className="absolute h-full w-full object-cover"
      />

      {/* Bg blur */}
      <div className="absolute bottom-0 bg-slate-500 dark:bg-black w-full h-[18vh] opacity-70 blur-sm"></div>

      <div className="absolute text-sm flex flex-col px-6 justify-center bottom-0 w-full h-[18vh] text-white space-y-2">
        <p className="text-xs tracking-tight mt-5">NOW PLAYING</p>
        <div className="flex items-center justify-between">
          <p>{props_ChangeMusic.name}</p>
          <div className="flex space-x-4">
            <MdOutlineQueueMusic size={'20px'} className="mt-[-2px]" />
            <BsSpeaker size={'17px'} className="mt-[-2px]" />
            <RiSurroundSoundLine size={'20px'} className="mt-[-2px]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 left-7 text-pink">
        <div className="bg-gradient-to-r from-[#fd795a] to-[#fa3546] w-14 h-14 rounded-full flex items-center justify-center">
          <BsPauseFill className="rounded-full bg-pink text-white w-7 h-7 px-[6px]" />
        </div>
      </div>
    </div>
  )
}

export default Left
