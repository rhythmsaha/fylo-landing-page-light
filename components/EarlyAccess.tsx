import React from 'react'

const EarlyAccess = () => {
  return (
    <div className="mt-10 bg-primary-2">
      <div className="mx-auto grid w-10/12 max-w-7xl gap-8 px-4 py-16 text-white lg:grid-cols-2 lg:gap-20 lg:py-24">
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="font-raleway text-lg font-bold lg:text-3xl">
            Get early access today
          </h2>
          <p className="text-sm text-neutral-1 lg:text-base">
            It only takes a minute to sign up and our free starter tier is
            extremely genereous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>

        <div className="space-y-4 p-2">
          <input
            type="text"
            className="w-full rounded p-3 text-xs text-primary-1 shadow outline-accent-1 placeholder:text-neutral-2 focus:outline-2 lg:text-sm"
            placeholder="email@example.com"
          />
          <button className="w-full rounded bg-accent-1 p-3 font-sans text-xs font-semibold tracking-wide text-white shadow-sm lg:w-2/4 lg:text-sm">
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  )
}

export default EarlyAccess
