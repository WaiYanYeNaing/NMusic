export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: 'What Youre Made Of',
      src: 'https://www.mboxdrive.com/WhatYoureMadeOf.mp3',
      duration: '3:26',
    },
    {
      id: 2,
      name: 'First Light',
      src: 'https://www.mboxdrive.com/FirstLight.mp3',
      duration: '3:41',
    },
    {
      id: 3,
      name: 'New Divide',
      src: 'https://www.mboxdrive.com/NewDivide.mp3',
      duration: '4:28',
    },
    {
      id: 4,
      name: 'No Time To Die',
      src: 'https://www.mboxdrive.com/NoTimeToDie.mp3',
      duration: '3:59',
    },
    {
      id: 5,
      name: 'Underground',
      src: 'https://www.mboxdrive.com/Underground.mp3',
      duration: '4:12',
    },
  ])
}
