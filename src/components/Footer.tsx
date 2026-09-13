import footerLogo from '../assets/logo-text.png'

export default function Footer() {
  return (
    <div className="border-t border-gray-100 px-5 py-10 lg:px-10">

      <div className="flex flex-col items-center justify-around gap-10 border-b border-gray-200 pb-10 lg:flex-row lg:items-start">

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <img
            src={footerLogo}
            alt="Dev Stack"
            className="mb-5 w-30"
          />

          <p className="mb-5 text-gray-500">
            Curated tools, technologies, and resources for developers
            <br className="hidden sm:block" />
            building modern software.
          </p>

          <div className="flex gap-5 text-gray-600">
              <p>GitHub</p>
              <p>Twitterd</p>
              <p>LinkedIn</p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="mb-3 font-bold">PRODUCT</h3>

          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="mb-3 font-bold">COMPANY</h3>

          <ul className="flex flex-col gap-1 text-gray-600">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="mb-3 font-bold">LEGAL</h3>

          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center justify-between mx-10 gap-3 px-2 text-center text-gray-400 sm:flex-row sm:text-left">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="flex gap-4">
          <p className="hover:text-gray-600">Privacy</p>
          <p className="hover:text-gray-600">Terms</p>
        </div>
      </div>
    </div>
  )
}
