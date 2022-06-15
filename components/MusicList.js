import React, { useEffect, useState } from "react";
import {
  HiDotsHorizontal,
  HiOutlineClock,
  HiOutlineHeart,
} from "react-icons/hi";
import { GiMusicSpell } from "react-icons/gi";
import { RiHashtag } from "react-icons/ri";
import axios from "axios";

const MusicList = ({ emit_ChangeMusic, props_NextMusic, props_PrevMusic }) => {
  const [musics, setMusics] = useState([]);
  const [current_music, setCurrent_music] = useState({});

  useEffect(() => {
    axios.get("/api/music").then((res) => {
      setMusics(res.data);
    });
  }, []);

  useEffect(() => {
    console.log(props_NextMusic);
    if (props_NextMusic.flag) NextMusic();
  }, [props_NextMusic]);

  useEffect(() => {
    console.log(props_NextMusic);
    if (props_PrevMusic.flag) PrevMusic();
  }, [props_PrevMusic]);

  const ChangeMusic = (id) => {
    let temp_musics = musics.slice();

    let temp_current_music = temp_musics.find((f) => f.id == id);
    setCurrent_music(temp_current_music);

    emit_ChangeMusic(temp_current_music);
  };

  const NextMusic = () => {
    if (Object.keys(current_music).length) {
      const current_id = musics.findIndex((f) => f.id == current_music.id) + 1;
      if (current_id < musics.length) {
        ChangeMusic(musics[current_id].id);
      }
    }
  };

  const PrevMusic = () => {
    if (Object.keys(current_music).length) {
      const current_id = musics.findIndex((f) => f.id == current_music.id) - 1;
      if (current_id >= 0) {
        ChangeMusic(musics[current_id].id);
      }
    }
  };

  const IsActive = (id) => {
    return current_music.id == id ? true : false;
  };

  return (
    <div className="flex flex-col flex-grow pl-6 mt-6">
      <div className="text-gray font-semibold flex justify-between">
        <div className="flex items-center text-sm">
          <RiHashtag size={"20px"} className="mr-2" />
          <p>Disc 1 - Isles of Serenity and Amnesia</p>
        </div>
        <HiOutlineClock size={"21px"} className="mr-6" />
      </div>
      <div className="flex-grow overflow-auto no-scrollbar h-48 min-h-full  mt-5 cursor-pointer">
        {/*  Music  */}
        {musics.map((v, id) => (
          <div
            key={v.id}
            className={IsActive(v.id) ? "active_music" : "inactive_music"}
            onClick={() => ChangeMusic(v.id)}
          >
            <div className="flex items-center">
              {IsActive(v.id) && (
                <GiMusicSpell
                  size={"20px"}
                  className="animate-spin-slow border-t-2 border-r-2 rounded-full w-7 h-7 px-[2px] border-red mr-3"
                />
              )}
              {!IsActive(v.id) && (
                <p className="text-gray text-sm font-semibold flex flex-grow ml-3 w-7">
                  {id + 1}
                </p>
              )}
              <div>
                {IsActive(v.id) && (
                  <p className="text-sm font-semibold  dark:text-black">
                    {v.name}
                  </p>
                )}
                {!IsActive(v.id) && (
                  <p className="text-sm font-semibold  dark:text-white">
                    {v.name}
                  </p>
                )}
                <p className="text-xs text-gray">{v.artist}</p>
              </div>
            </div>
            <div className="text-gray flex items-center w-[85px] justify-between mr-4">
              {IsActive(v.id) && <HiOutlineHeart size={"18px"} />}
              <p className="text-sm mx-auto">{v.duration}</p>
              {IsActive(v.id) && <HiDotsHorizontal size={"18px"} />}
            </div>
          </div>
        ))}
        <div className="h-16"></div>
      </div>
    </div>
  );
};

export default MusicList;
