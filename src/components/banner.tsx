export function Banner() {
  return (
    <div className="pointer-events-none px-2 py-2">
      <div className="pointer-events-auto flex items-center justify-center gap-x-6 rounded-xl bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:py-3 sm:pl-4 sm:pr-3.5">
        <p className="text-sm/6 text-white">
          <a href="#">
            <strong className="font-semibold">GeneriCon 2023</strong>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline size-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            Join us in Denver from June 7 – 9 to see what’s coming next &nbsp;
            <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>
    </div>
  )
}
