export function Footer() {
  return (
    <footer className="w-full bg-black py-8 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Device Wrapper */}
        <div className="relative mx-auto w-full max-w-5xl aspect-[360/146.16]">
          {/* Steam Deck Frame */}
          <img
            src="/images/steam-deck-frame.png"
            alt="Gaming Device"
            className="w-full h-full select-none pointer-events-none object-cover"
          />

          {/* Screen Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Screen size calibrated from design proportions */}
            <div className="relative w-[60.833%] h-[91.666%] rounded-[2px] overflow-hidden">
              {/* Dark blurred background */}
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

              {/* Vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

              {/* Footer Content */}
              <div className="relative z-10 h-full w-full flex items-center justify-center p-[2%]">
                <div className="grid grid-cols-2 h-full w-full gap-[2%]">
                  {/* Left Column */}
                  <div className="flex flex-col justify-center px-[2%] py-[1%]">
                    <p className="font-semibold text-[10px] sm:text-xs md:text-sm mb-[8%]">Terms & Conditions</p>
                    <div className="space-y-[6px] text-[8px] sm:text-[9px] md:text-xs">
                      <p>Support</p>
                      <p>Privacy & Cookies</p>
                      <p>Terms of Use</p>
                      <p>Legal</p>
                      <p>Health Warning</p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col justify-center px-[2%] py-[1%]">
                    <p className="font-semibold text-[10px] sm:text-xs md:text-sm underline underline-offset-1 mb-[8%]">
                      Contact Us:
                    </p>
                    <div className="space-y-[6px] text-[8px] sm:text-[9px] md:text-xs">
                      <p>+91 99999 99999</p>
                      <p>Facebook</p>
                      <p>X</p>
                      <p>Instagram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-center text-[9px] sm:text-xs text-white/50">
          © 2025 Burn Point Studios. Committed to Entertainment.
        </p>
      </div>
    </footer>
  )
}
