import React from 'react'

const Hero = () => {
  8
  return (
    <div className="mx-auto mt-10 flex w-10/12 flex-col gap-8 md:max-w-6xl lg:max-w-7xl lg:flex-row-reverse lg:items-center">
      <div className="p-1">
        <img
          src="/images/illustration-1.svg"
          alt="illustration-1"
          className="w-full object-contain"
        />
      </div>

      <div className="space-y-8">
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="font-raleway text-2xl font-bold lg:text-3xl">
            All your files in onesecure location, accassible anywhere.
          </h1>

          <p className="text-sm text-black lg:text-base">
            Fylo stores yourmost important files in one secure location. Access
            them whenever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row">
          <input
            type="text"
            placeholder="Enter your email..."
            className="w-full rounded border border-primary-2 py-2 px-5 text-sm transition duration-200 placeholder:text-neutral-2 focus:outline-accent-1"
          />
          <button className="w-full rounded bg-accent-1 px-3 py-3 font-raleway text-sm tracking-wider text-white lg:w-80">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
