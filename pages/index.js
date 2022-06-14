import { AiFillCaretDown } from 'react-icons/ai'
import { HiOutlineArrowLeft, HiOutlineMinusCircle } from 'react-icons/hi'
import { TiHeadphones } from 'react-icons/ti'
import { MdOutlineQueueMusic } from 'react-icons/md'
import { IoHeartCircle } from 'react-icons/io5'
import Player from '../components/Player'
import Menu from '../components/Menu'
import MusicList from '../components/MusicList'
import Left from '../components/Left'
import { useState } from 'react'

export default function Home() {
  const [music, setMusic] = useState({})
  const [next, setNext] = useState({ key: 1, flag: false })
  const [prev, setPrev] = useState({ key: 2, flag: false })

  const ChangeMusic = (v) => {
    setMusic(v)
  }

  const NextMusic = (v) => {
    console.log('n')
    setNext({ key: Math.random(), flag: v })
  }

  const PrevMusic = (v) => {
    console.log('p')
    setPrev({ key: Math.random(), flag: v })
  }

  return (
    <div>
      <div className="flex">
        {/* Menu */}
        <Menu />
        {/* --------------------------------------------------------------------------------------------------- */}

        {/* Container */}
        <div className="w-full grid grid-cols-12">
          {/* Left */}
          <Left props_ChangeMusic={music} />
          {/* --------------------------------------------------------------------------------------------------- */}

          {/* Right */}
          <div className="bg-white h-screen col-span-8 flex flex-col">
            {/* Top */}
            <div className="bg-skyblue h-[300px] px-6 pt-7">
              {/* Action */}
              <div className="flex items-center justify-between">
                <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                  <HiOutlineArrowLeft />
                </div>
                <div className="flex items-center text-gray text-sm font-semibold tracking-tight bg-white px-2 py-[4px] rounded-xl">
                  <img
                    src="./images/astronaut.jpg"
                    className="w-[23px] h-[23px] object-cover rounded-full mr-[10px]"
                  />
                  User Name
                  <AiFillCaretDown
                    size={'12px'}
                    className="ml-2 text-lightblack"
                  />
                </div>
              </div>
              {/* Header */}
              <div className="mt-2 font-semibold h-56 flex flex-col justify-evenly">
                <div className="text-gray tracking-tight text-sm">ALBUM</div>
                <div className="text-5xl">
                  Islands of the Lost and
                  <br /> Forgotten
                </div>
                <div className="text-gray tracking-tight text-xs flex items-center space-x-6">
                  <div className="flex w-auto">
                    <TiHeadphones size={'17px'} className="mt-[-2px] mr-2" />
                    HOUO-MIX
                  </div>
                  <div className="flex w-auto">
                    <MdOutlineQueueMusic
                      size={'17px'}
                      className="mt-[-2px] mr-2"
                    />
                    62 songs, about 1 hr 30 min
                  </div>
                  <div className="flex w-auto">
                    <IoHeartCircle
                      size={'20px'}
                      className="mt-[-2px] text-red"
                    />
                  </div>
                  <div className="flex w-auto">
                    <HiOutlineMinusCircle size={'20px'} className="mt-[-2px]" />
                  </div>
                </div>
              </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------- */}

            {/* Center */}
            <MusicList
              emit_ChangeMusic={ChangeMusic}
              props_NextMusic={next}
              props_PrevMusic={prev}
            />
            {/* --------------------------------------------------------------------------------------------------- */}

            {/* Bottom */}
            <Player
              props_ChangeMusic={music}
              emit_NextMusic={NextMusic}
              emit_PrevMusic={PrevMusic}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
