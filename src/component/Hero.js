import React from 'react'
import Form from "react-bootstrap/Form";
import Badge from './Badge';
function Hero() {
  return (
    <>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7470036ccddaaa7ce2fa6812d8d177f76e141cd55a2cdbe8122a18d7838e1673?apiKey=3acee20ef6b841d594810d5fae6a34b9&"
          alt="Professional Online Makeup Course"
          className="w-full aspect-[3.03]"
        />
        <article className="flex flex-col px-6 pt-5 pb-6 w-full text-sm bg-neutral-900">
          <h1 className="text-4xl leading-8 text-white">
            Professional Online Makeup Course
          </h1>
          <div className="flex gap-2.5 mt-2 text-xs">
            <Badge
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9f0270d9d006d1aceddb21e25886905c9553b651c70b48125f28f927d848b7e4?apiKey=3acee20ef6b841d594810d5fae6a34b9&"
              imgAlt="Certification Programme badge"
              text="Certification Programme"
              bgColor="bg-white bg-opacity-10"
            />
            <div className="flex gap-1 py-px my-auto text-right text-amber-300 rounded-xl leading-[120%]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/83980baa8b6986632ee5c84418e2262f5e8b62dfc7bf515701d4cf60328160d2?apiKey=3acee20ef6b841d594810d5fae6a34b9&"
                alt="Rating"
                className="flex-1 shrink-0 my-auto w-full aspect-[1.1]"
              />
              <div>Rated 4.85/5</div>
            </div>
          </div>
          <div className="flex gap-2 mt-2 leading-[120%] text-neutral-300">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/42c601311de250d588108535b19b09f33c4f289af614228c54a1774bd7ee1be2?apiKey=3acee20ef6b841d594810d5fae6a34b9&"
              alt=""
              className="shrink-0 self-start w-3.5 aspect-square"
            />
            <p className="flex-1">India’s No.1 Online Makeup Course</p>
          </div>
          <div className="flex gap-2 mt-2 leading-[120%] text-neutral-300">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/21ee6c027d44c7e5c7462f989553f8cb2c973da257f6abd7b4a7b1a6686272b4?apiKey=3acee20ef6b841d594810d5fae6a34b9&"
              alt=""
              className="shrink-0 self-start w-3.5 aspect-square"
            />
            <p className="flex-1">Learn by LIVE Do-it-Together Classes</p>
          </div>
          <div className="flex gap-2 mt-2 leading-[120%] text-neutral-300">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bb826bde18c8a5333316ae55678a15039f17141f9e77d7571abd8963207df1b?apiKey=3acee20ef6b841d594810d5fae6a34b9&"
              alt=""
              className="shrink-0 self-start w-3.5 aspect-square"
            />
            <p className="flex-1">
              Unlimited Practise Session to master skills
            </p>
          </div>
          <button className="justify-center p-1.5 mt-6 text-xs font-bold leading-4 text-white uppercase bg-pink-500 formTop">
            Fill the form below to enquire
          </button>
          <form className="flex z-10 flex-col p-2.5 w-full font-semibold bg-white formBottom leading-[125%]">
            <label htmlFor="name" className="text-sm text-neutral-600">
              *Enter your name
            </label>
            <input
              className="px-3 pt-2 pb-2 mt-3 bg-white rounded border border-solid border-zinc-300 text-stone-300"
              id="name"
              placeholder="Eg. Aneesha Mehra"
              aria-label="Enter your name"
            />
            <label
              htmlFor="whatsapp"
              className="mt-2.5 text-sm text-neutral-600"
            >
              *Enter your WhatsApp Number
            </label>
            <div className="flex gap-3 mt-3">
              <div className="flex gap-1 justify-between self-start px-3 pt-2 pb-2.5 whitespace-nowrap bg-white rounded border border-solid border-zinc-300 text-neutral-600">
                <div>+91</div>
              </div>
              <input
                className="flex-1 items-start px-3 pt-2 pb-2.5 bg-white rounded border border-solid border-zinc-300 text-stone-300"
                id="whatsapp"
                placeholder="Eg. 0000000000"
                aria-label="Enter your WhatsApp Number"
              />
            </div>
            <label htmlFor="goal" className="mt-2.5 text-sm text-neutral-600">
              *Select your goal
            </label>

            <Form.Select className="mt-2.5" aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <label htmlFor="city" className="mt-2.5 text-sm text-neutral-600">
              *Select your city
            </label>
            <Form.Select className="mt-2.5" aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <button
              type="submit"
              className="justify-center items-center px-16 py-2.5 mt-5 font-bold text-center whitespace-nowrap rounded bg-[linear-gradient(90deg,#F56563_0%,#E54988_100%)] leading-[120%] text-neutral-50"
            >
              Submit
            </button>
          </form>
        </article>
    </>
  )
}

export default Hero