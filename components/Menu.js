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

const Menu = () => {
  return (
    <div className="shrink bg-white flex flex-col justify-between min-h-screen h-screen w-[70px]">
      <div className="bg-yellow w-full h-[4.5rem] flex justify-center items-center">
        <AiFillCrown size={'27px'} color={'#fff'} />
      </div>
      <div className="w-full flex flex-col justify-center items-center space-y-8">
        <div className="menu_icon">
          <AiFillCiCircle
            size={'25px'}
            className="text-lightgray active:text-gray"
          />
        </div>
        <div className="menu_icon_active">
          <AiOutlineFrown
            size={'25px'}
            className="text-lightgray active:text-gray"
          />
        </div>
        <div className="menu_icon">
          <AiFillCodepenCircle
            size={'25px'}
            className="text-lightgray active:text-gray"
          />
        </div>
        <div className="menu_icon">
          <AiFillCloud
            size={'25px'}
            className="text-lightgray active:text-gray"
          />
        </div>
        <div className="menu_icon">
          <AiFillDislike
            size={'25px'}
            className="text-lightgray active:text-gray"
          />
        </div>
        <div className="menu_icon">
          <AiFillEnvironment
            size={'25px'}
            className="text-lightgray active:text-gray"
          />
        </div>
      </div>
      <div className="w-full h-[4.5rem] flex justify-center items-center">
        <AiFillLeftCircle size={'25px'} color={'#000'} />
      </div>
    </div>
  )
}

export default Menu
