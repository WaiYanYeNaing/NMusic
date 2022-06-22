import React from 'react'
import {
  AiFillCrown,
  AiFillCiCircle,
  AiOutlineFrown,
  AiFillCodepenCircle,
  AiFillCloud,
  AiFillDislike,
  AiFillEnvironment,
  AiFillLeftCircle,
} from 'react-icons/ai'
import { IoRadioSharp, IoMusicalNotesOutline } from 'react-icons/io5'
import { TbPlaylist, TbMicrophone2 } from 'react-icons/tb'
import { RiAlbumLine, RiVideoLine } from 'react-icons/ri'

const Menu = () => {
  return (
    <div className="shrink bg-white dark:bg-black flex flex-col justify-between min-h-screen h-screen w-[70px]">
      <div className="bg-yellow w-full h-[4.5rem] flex justify-center items-center">
        <AiFillCrown size={'27px'} color={'#fff'} />
      </div>
      <div className="w-full flex flex-col justify-center items-center space-y-8">
        <div className="menu_icon">
          <IoRadioSharp
            size={'25px'}
            className="text-lightgray dark:text-white active:text-gray"
          />
        </div>
        <div className="menu_icon">
          <TbPlaylist
            size={'25px'}
            className="text-lightgray dark:text-white active:text-gray"
          />
        </div>
        <div className="menu_icon">
          <RiAlbumLine
            size={'25px'}
            className="text-lightgray dark:text-white active:text-gray"
          />
        </div>
        <div className="menu_icon_active">
          <IoMusicalNotesOutline
            size={'25px'}
            className="text-lightgray dark:text-white active:text-gray"
          />
        </div>
        <div className="menu_icon">
          <RiVideoLine
            size={'25px'}
            className="text-lightgray dark:text-white active:text-gray"
          />
        </div>
        <div className="menu_icon">
          <TbMicrophone2
            size={'25px'}
            className="text-lightgray dark:text-white active:text-gray"
          />
        </div>
      </div>
      <div className="w-full h-[4.5rem] flex justify-center items-center">
        <AiFillLeftCircle
          size={'25px'}
          className="text-gray-900 dark:text-white"
        />
      </div>
    </div>
  )
}

export default Menu
