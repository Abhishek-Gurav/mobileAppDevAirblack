import React from 'react'
const images = [
    {
      alt: "Description for image 1",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/10269fec5a1e06d43a62e2cac4f36e7001cd529f0bd8760413a221cf2843bb73?apiKey=3acee20ef6b841d594810d5fae6a34b9&",
    },
    {
      alt: "Description for image 2",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/92496bf5b0653ae72d7809ca40d3c6448be59756f3f888023e6d60e4426ff56e?apiKey=3acee20ef6b841d594810d5fae6a34b9&",
    },
    {
      alt: "Description for image 3",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/28274d9affb7bdf05b4f13b76a99da19704ddab57046651d9b8fd538f532809f?apiKey=3acee20ef6b841d594810d5fae6a34b9&",
    },
    {
      alt: "Description for image 4",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c02e34a37d0efc8ddbdb3e8f8545f3e2fbdea261469512bfcf6ec0301e64b2ed?apiKey=3acee20ef6b841d594810d5fae6a34b9&",
    },
  ];
function SocialMedia() {
  return (
    <section className="flex flex-col bg-black justify-center px-2 w-full text-2xl leading-8 text-center text-neutral-100">
          <div className="starComponent  flex flex-col justify-center w-full bg-black">
            <div className="flex gap-0 items-start">
              <div className="flex justify-center mt-10 text-4xl w-full">
                <p>
                  Join our growing <br />
                  community of <br />
                  35,000+ alumini
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <button
                type="submit"
                className="flex mb-3 justify-center h-10 w-5/6 items-center mt-5 text-center text-lg whitespace-nowrap rounded bg-[linear-gradient(90deg,#F56563_0%,#E54988_100%)] leading-[120%] text-neutral-50"
              >
                Apply Now
              </button>
              <div className="mb-16 flex gap-4">
                {images.map((image, index) => (
                  <img
                    key={index}
                    loading="lazy"
                    src={image.src}
                    alt={image.alt}
                    className=" w-[42px] self-start"
                    tabIndex="0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
  )
}

export default SocialMedia