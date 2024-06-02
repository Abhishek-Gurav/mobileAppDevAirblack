import React from 'react'

function Feature() {
  return (
    <section className="flex flex-col bg-black justify-center px-2 w-full text-2xl leading-8 text-center text-neutral-100">
          <div className="starComponent  flex flex-col justify-center w-full bg-black">
            <div className="flex gap-0 items-start">
              <div className="flex justify-center w-full mt-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/98777424ead26ed18356a214d1a9aa862024a08052280ef3471cf961f1489f7f?apiKey=3acee20ef6b841d594810d5fae6a34b9&"
                  alt=""
                  className="flex-1 my-auto w-full aspect-[12]"
                />
                <div>
                  Why Should You <br /> Join Airblack?
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5bdc3aac26c6351d60b02780abb446975ca7ee458f27606515afc66417eea9a?apiKey=3acee20ef6b841d594810d5fae6a34b9&"
                  alt=""
                  className="flex-1 my-auto w-full aspect-[12]"
                />
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/839085c6786fa662247bce2e32b2aa9671c8d2e0052aaf08f207ec4ca0033c4e?apiKey=3acee20ef6b841d594810d5fae6a34b9&"
              alt=""
              className="w-full mt-1 aspect-[3.03]"
            />
            <div className="flex justify-center items-end">
              <button
                type="submit"
                className="flex mb-5 justify-center items-center h-10 w-5/6 items-center px-16 py-2.5 mt-5 text-center text-lg whitespace-nowrap rounded bg-[linear-gradient(90deg,#F56563_0%,#E54988_100%)] leading-[120%] text-neutral-50"
              >
                Apply Now
              </button>
            </div>
          </div>
        </section>
  )
}

export default Feature