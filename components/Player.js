import { BsShuffle, BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { CgPushChevronLeft, CgPushChevronRight, CgRepeat } from 'react-icons/cg'
import { useEffect, useRef, useState } from 'react'

const Player = ({ props_ChangeMusic }) => {
  const audioElem = useRef()
  const [music, setMusic] = useState({})
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState('0:00')
  const [currentTime, setCurrentTime] = useState('0:00')
  const [currentTimeInterval, setCurrentTimeInterval] = useState()

  useEffect(() => {
    if (Object.keys(props_ChangeMusic).length) {
      setMusic(props_ChangeMusic)
      setDuration(props_ChangeMusic.duration)
      Pause()
    }
    console.log(music)
  }, [props_ChangeMusic])

  useEffect(() => {
    if (currentTime == duration) {
      Pause()
      console.log('stop')
    }
  }, [currentTime])

  // useEffect(() => {
  //   //TODO: use setTimeout to wait data
  //   setTimeout(() => {
  //     let seconds = Math.floor(audioElem.current.duration)
  //     console.log(seconds)
  //     if (seconds) {
  //       setDuration(
  //         (seconds - (seconds %= 60)) / 60 +
  //           (9 < seconds ? ':' : ':0') +
  //           seconds
  //       )
  //     }
  //   }, 300)
  // }, [props_ChangeMusic])

  const Play = () => {
    // Play Music
    audioElem.current.play()

    // Get Current Time (start intercal)
    GetCurrentTime()

    // Play Pause Icon
    setIsPlaying(true)
  }

  const Pause = () => {
    // Pause Music
    audioElem.current.pause()

    // Stop Curretn Time (stop interval)
    clearInterval(currentTimeInterval)

    setIsPlaying(false)
    console.log(audioElem)
  }

  const GetCurrentTime = () => {
    let intervalId = setInterval(() => {
      let seconds = Math.floor(audioElem.current.currentTime)
      setCurrentTime(
        (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ':' : ':0') + seconds
      )
      console.log(Math.floor(audioElem.current.currentTime))
    }, 1000)
    setCurrentTimeInterval(intervalId)
  }

  return (
    <div className="min-h-[18vh] border-t-2 border-skyblue flex flex-col justify-evenly">
      <div className="flex items-center justify-between text-gray w-60 mx-auto">
        <BsShuffle size={'17px'} className="action_icon" />
        <CgPushChevronLeft size={'25px'} className="action_icon" />
        <div
          className="bg-black active:bg-lightblack transition w-11 h-11 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => (isPlaying ? Pause() : Play())}
        >
          {isPlaying ? (
            <BsFillPlayFill className="rounded-full bg-gray text-white w-5 h-5 px-[2px]" />
          ) : (
            <BsPauseFill className="rounded-full bg-gray text-white w-5 h-5 px-[2px]" />
          )}
        </div>
        <CgPushChevronRight size={'25px'} className="action_icon" />
        <CgRepeat size={'25px'} className="action_icon" />
      </div>
      <div className="flex items-center justify-center text-gray text-sm font-semibold">
        <div>{currentTime}</div>
        <div className="mx-3">
          <div className="w-96 h-1 rounded-full bg-gray">
            <div className="w-60 h-1 rounded-full bg-orange"></div>
          </div>
        </div>
        <div>{duration}</div>
      </div>
      <audio src={music.src} ref={audioElem} />
    </div>
  )
}

export default Player
