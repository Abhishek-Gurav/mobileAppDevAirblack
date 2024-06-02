import React from 'react'

export default function Badge({ imgSrc, imgAlt, text, bgColor }) {
  return (
    <div
      className={`flex gap-2 px-3 py-1.5 rounded-md ${bgColor} leading-[103%] text-neutral-50`}
    >
      <img
        loading="lazy"
        src={imgSrc}
        alt={imgAlt}
        className="flex-1 shrink-0 self-start w-full aspect-[0.75]"
      />
      <div>{text}</div>
    </div>
  )
}