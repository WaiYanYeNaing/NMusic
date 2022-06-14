export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: 'What Youre Made Of',
      src: 'https://www.mboxdrive.com/WhatYoureMadeOf.mp3',
      artist: 'Lindsey Stirling',
      duration: '3:26',
    },
    {
      id: 2,
      name: 'First Light',
      src: 'https://www.mboxdrive.com/FirstLight.mp3',
      artist: 'Lindsey Stirling',
      duration: '3:41',
    },
    {
      id: 3,
      name: 'New Divide',
      src: 'https://www.mboxdrive.com/NewDivide.mp3',
      artist: 'Linkin Park',
      duration: '4:28',
    },
    {
      id: 4,
      name: 'No Time To Die',
      src: 'https://www.mboxdrive.com/NoTimeToDie.mp3',
      artist: 'Billie Eilish',
      duration: '3:59',
    },
    {
      id: 5,
      name: 'Underground',
      src: 'https://www.mboxdrive.com/Underground.mp3',
      artist: 'Lindsey Stirling',
      duration: '4:12',
    },
    {
      id: 6,
      name: 'Call of Silence',
      src: 'https://www.mboxdrive.com/CallOfSilence.mp3',
      artist: 'AOT',
      duration: '3:02',
    },
    {
      id: 7,
      name: 'Animal',
      src: 'https://www.mboxdrive.com/Animal.mp3',
      artist: 'Jim Yosef',
      duration: '2:57',
    },
    {
      id: 8,
      name: 'Grenade',
      src: 'https://www.mboxdrive.com/Grenade.mp3',
      artist: 'Bruno Mars',
      duration: '3:41',
    },
    {
      id: 9,
      name: 'Writing On The Wall',
      src: 'https://www.mboxdrive.com/WritingOnTheWall.mp3',
      artist: 'Sam Smith',
      duration: '4:45',
    },
  ])
}
