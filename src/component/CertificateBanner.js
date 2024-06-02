import React from 'react'

function CertificateBanner() {
  return (
    <section className="flex flex-col justify-center px-2 py-8 w-full text-2xl leading-8 text-center bg-black text-neutral-100">
          <div className="flex gap-5 justify-center items-center self-center px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98777424ead26ed18356a214d1a9aa862024a08052280ef3471cf961f1489f7f?apiKey=3acee20ef6b841d594810d5fae6a34b9&"
              alt=""
              className="flex-1 shrink-0 self-stretch my-auto w-full aspect-[6.25]"
            />
            <div>
              Get Certified From <br /> India’s Biggest <br /> Beauty Platform
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/24fc9be8500f3f049e7eb9eadfca51f5eaed003f1d40cedfbebdbe0830fe561d?apiKey=3acee20ef6b841d594810d5fae6a34b9&"
              alt=""
              className="flex-1 shrink-0 self-stretch my-auto w-full aspect-[6.25]"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cde4759b6708df6a9b7c91820973833526921e7946090e1df8b6fd1030eefd6?apiKey=3acee20ef6b841d594810d5fae6a34b9&"
            alt=""
            className="mt-3.5 w-full aspect-[1.43]"
          />
        </section>
  )
}

export default CertificateBanner