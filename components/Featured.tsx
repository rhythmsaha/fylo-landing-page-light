import React from 'react'

const Featured = () => {
  return (
    <div className="bg-neutral-1 py-10">
      <div className="mx-auto flex w-10/12 max-w-7xl flex-col gap-10 lg:flex-row-reverse">
        <div className="p-1 lg:w-3/4">
          <img src="/images/illustration-2.svg" alt="illustration-2" />
        </div>

        <div className="flex flex-col items-center gap-6 lg:items-start">
          <h2 className="font-raleway font-bold lg:text-2xl xl:text-4xl">
            Stay productive, wherever you are
          </h2>
          <p className="text-sm text-primary-2 lg:w-3/4 lg:text-base xl:text-lg">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text-sm text-primary-2 lg:w-3/4 lg:text-base xl:text-lg">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <button className="flex items-center gap-2 border-b border-b-accent-2 py-2 font-raleway text-sm font-bold tracking-wide text-accent-2">
            <span>See how Fylo works</span>
            <img src="/images/icon-arrow.svg" alt="arrow" />
          </button>

          <div className="mt-8 w-full space-y-4 bg-white py-8 px-6 shadow-lg lg:max-w-md">
            <div>
              <img
                src="/images/icon-quotes.svg"
                alt="quotes"
                className="h-4 object-contain"
              />
            </div>

            <blockquote className="text-xs lg:text-sm">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </blockquote>

            <div className="flex items-center gap-2">
              <img
                src="/images/avatar-testimonial.jpg"
                alt="avatar"
                className="h-8 rounded-full object-contain lg:h-10"
              />
              <div className="text-xs lg:text-sm">
                <h2 className="font-bold">Kyle Burton</h2>
                <span className="text-primary-2">Founder & CEO, Huddle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
