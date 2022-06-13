import React from 'react'

const Home = () => {
  return (
    <>
      <div className="container mx-auto my-8">
        {/* Nav Bar */}
        <div className="grid grid-cols-5">
          <div className="flex justify-between items-center col-span-2">
            <div className="text-2xl text-black font-extrabold mb-2">Lorem</div>
            <div className="text-sm text-gray font-medium col-span-2 flex">
              <div className="mr-5">Video</div>
              <div className="mr-5">Music</div>
              <div className="mr-5">News</div>
            </div>
          </div>
          <div></div>
          <div className="flex justify-between items-center col-span-2">
            <div className="text-sm text-lightgray col-span-2">Search</div>
            <div className="text-sm text-lightgray font-medium col-span-2 flex">
              <div className="mr-5">Sign in</div>
              <div className="mr-5">Sign up</div>
            </div>
          </div>
        </div>

        {/* First */}
        <div className="mt-5">
          <img
            src="./images/first.jpg"
            className="rounded-2xl h-64 w-full object-cover"
          />
        </div>

        {/* Second */}
        <div className="grid grid-cols-5 mt-9">
          {/* Left */}
          <div className="col-span-4 mr-10">
            {/* Recommended */}
            <div className="min-h-[180px]">
              <div className="font-bold text-lg text-gray">Recommended</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                <div>
                  <div class="iframe-container">
                    <iframe
                      src="https://www.youtube.com/embed/51iquRYKPbs"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="text-sm text-gray font-semibold">
                    In lobortis metus
                  </div>
                  <div className="text-[0.65rem] text-lightgray">
                    2228 views
                  </div>
                </div>
                <div>
                  <div class="iframe-container">
                    <iframe
                      src="https://www.youtube.com/embed/lvs68OKOquM"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="text-sm text-gray font-semibold">
                    Sed in tortor sit amet
                  </div>
                  <div className="text-[0.65rem] text-lightgray">
                    2228 views
                  </div>
                </div>
                <div>
                  <div class="iframe-container">
                    <iframe
                      src="https://www.youtube.com/embed/sJXZ9Dok7u8"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="text-sm text-gray font-semibold">
                    Vivamus consequat
                  </div>
                  <div className="text-[0.65rem] text-lightgray">
                    2228 views
                  </div>
                </div>
                <div>
                  <div class="iframe-container">
                    <iframe
                      src="https://www.youtube.com/embed/Y2NkuFIlLEo"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="text-sm text-gray font-semibold">
                    Quisque sit
                  </div>
                  <div className="text-[0.65rem] text-lightgray">
                    2228 views
                  </div>
                </div>
              </div>
            </div>
            {/* Trending */}
            <div className="mt-10">
              <div className="font-bold text-lg text-gray">Trending</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                <div>
                  <div class="iframe-container">
                    <iframe
                      src="https://www.youtube.com/embed/vOXZkm9p_zY"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="text-sm text-gray font-semibold">
                    In a vulputate
                  </div>
                  <div className="text-[0.65rem] text-lightgray">
                    2228 views
                  </div>
                </div>
                <div>
                  <div class="iframe-container">
                    <iframe
                      src="https://www.youtube.com/embed/D9G1VOjN_84"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="text-sm text-gray font-semibold">
                    Duis interdum
                  </div>
                  <div className="text-[0.65rem] text-lightgray">
                    2228 views
                  </div>
                </div>
                <div>
                  <div class="iframe-container">
                    <iframe
                      src="https://www.youtube.com/embed/fmI_Ndrxy14"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="text-sm text-gray font-semibold">
                    Integer ac felis
                  </div>
                  <div className="text-[0.65rem] text-lightgray">
                    2228 views
                  </div>
                </div>
                <div>
                  <div class="iframe-container">
                    <iframe
                      src="https://www.youtube.com/embed/rYEDA3JcQqw"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="text-sm text-gray font-semibold">
                    Aenean ornare
                  </div>
                  <div className="text-[0.65rem] text-lightgray">
                    2228 views
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right, Top Music */}
          <div className="">
            <div className="font-bold text-lg text-gray">Top Music</div>
            <div className="mt-4">demo</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
