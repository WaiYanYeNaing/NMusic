import { BsShuffle, BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { CgPushChevronLeft, CgPushChevronRight, CgRepeat } from 'react-icons/cg'
import { useEffect, useRef, useState } from 'react'

const Player = ({ props_ChangeMusic, emit_NextMusic, emit_PrevMusic }) => {
  const audioElem = useRef()
  const [music, setMusic] = useState({})
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState('0:00')
  const [currentTime, setCurrentTime] = useState('0:00')
  const [curretnPercentage, setCurretnPercentage] = useState('0')
  const [currentTimeInterval, setCurrentTimeInterval] = useState()

  useEffect(() => {
    console.log(props_ChangeMusic)
    if (Object.keys(props_ChangeMusic).length) {
      setMusic(props_ChangeMusic)
      setDuration(props_ChangeMusic.duration)
      setCurrentTime('0:00')
      setCurretnPercentage('0')
      Pause()
      setTimeout(() => {
        Play()
      }, 1000)
    }
    console.log(music)
  }, [props_ChangeMusic])

  useEffect(() => {
    if (currentTime == duration) {
      Pause()
      emit_NextMusic(true)
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

      let seconds_perc = Math.floor(audioElem.current.currentTime)
      let seconds_perc_d = Math.floor(audioElem.current.duration)
      let temp_currentPercentage = (
        (seconds_perc * 100) /
        seconds_perc_d
      ).toFixed(2)
      setCurretnPercentage(temp_currentPercentage)

      console.log(seconds)
    }, 1000)
    setCurrentTimeInterval(intervalId)
  }

  return (
    <div className="bg-white dark:bg-black min-h-[13vh] border-t-2 border-skyblue flex flex-col justify-evenly">
      <div className="flex items-center justify-between text-gray dark:text-gray-100 w-60 mx-auto">
        <BsShuffle size={'17px'} className="action_icon" />
        <CgPushChevronLeft
          size={'25px'}
          className="action_icon"
          onClick={() => emit_PrevMusic(true)}
        />
        <div
          className="bg-black dark:bg-gray active:bg-lightblack hover:scale-105 active:scale-110 transition w-11 h-11 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => (isPlaying ? Pause() : Play())}
        >
          {isPlaying ? (
            <BsPauseFill className="rounded-full bg-gray dark:bg-black text-white w-5 dark:w-6 h-5 dark:h-6 px-[2px]" />
          ) : (
            <BsFillPlayFill className="rounded-full bg-gray dark:bg-black text-white w-5 dark:w-6 h-5 dark:h-6 px-[2px]" />
          )}
        </div>
        <CgPushChevronRight
          size={'25px'}
          className="action_icon"
          onClick={() => emit_NextMusic(true)}
        />
        <CgRepeat size={'25px'} className="action_icon" />
      </div>
      <div className="flex items-center justify-center text-gray text-sm font-semibold">
        <div>{currentTime}</div>
        <div className="mx-3">
          <div className="w-96 h-1 rounded-full bg-gray">
            <div
              className="h-1 rounded-full bg-orange"
              style={{ width: curretnPercentage + '%' }}
            ></div>
          </div>
        </div>
        <div>{duration}</div>
      </div>
      <audio src={music.src} ref={audioElem} />
    </div>
  )
}

export default Player
