export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: '4sec', src: '4sec.mp3' },
    { id: 2, name: 'First Light', src: 'FirstLight.mp3' },
    { id: 3, name: 'New Divide', src: 'NewDivide.mp3' },
    { id: 4, name: 'No Time To Die', src: 'NoTimeToDie.mp3' },
    { id: 5, name: 'Underground', src: 'Underground.mp3' },
    {
      id: 6,
      name: 'What Youre Made Of',
      src: 'WhatYoureMadeOf.mp3',
    },
  ])
}
