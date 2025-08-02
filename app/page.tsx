"use client"

export default function Home() {
  return (
      <div className='px-6'>
        <div className='max-w-lg mx-auto py-24'>
          <div className='space-y-12 text-sm:text-base'>
            <div className='mb-12'>
              <h2 className='font-medium'>"I keep researching instead of building."</h2>
              <p className='text-zinc-500'>Been there.</p>
            </div>
            <div className='mb-12'>
              <h2 className='font-medium'>"How do I make myself start?"</h2>
              <p className='text-zinc-500'>You don’t. Discipline is overrated. Structure wins.</p>
            </div>
            <div className='mb-12'>
              <h2 className='font-medium'>"Pomodoro breaks my rhythm."</h2>
              <p className='text-zinc-500'>Exactly. You need depth, not a timer.</p>
            </div>
            <div className='mb-12'>
              <h2 className='font-medium'>"I blocked all distractions, still got nothing done."</h2>
              <p className='text-zinc-500'>Because productivity isn’t about restriction — it’s about direction.</p>
            </div>
            <hr className='mb-12 border-t border-[#ffffff1a]' />
            <div>
              <h2 className='font-semibold text-3xl mb-1'>One thing.</h2>
              <p className='text-zinc-500 mb-12'>Minimalistic productivity tool that actually works.</p>
              <video className='mb-12 border border-[#ffffff1a] flex justify-center items-center' src="focus-demo.mp4" autoPlay loop muted playsInline />
              <ul className='my-16'>
                <li>1. Set your focus</li>
                <li className='text-zinc-500 mb-10'>To get shit done, you need to focus on one thing at a time.</li>
                <li>2. Work on it for 45 minutes (at least)</li>
                <li className='text-zinc-500 mb-10'>Keep going longer if you feel like it. The goal is to get into the flow.</li>
                <li>3. Reflect on your session</li>
                <li className='text-zinc-500 mb-10'>Was it the right thing to do? Did you get closer to shipping?</li>
                <li>4. Rest for... as long as you want</li>
                <li className='text-zinc-500 mb-10'>Get back when you're ready for another session.</li>
              </ul>
              <hr className='mb-12 border-t border-[#ffffff1a]' />
              <div className='mb-12'>
                <h2 className='font-medium'>It's simple, but it works</h2>
                <p className='text-zinc-500'>Try it yourself</p>
              </div>
              <hr className='mb-12 border-t border-[#ffffff1a]' />
              <div>
                <h2 className='font-medium'>Start focusing</h2>
                <p className='text-zinc-500'>Stop doom scrolling — start creating</p>

                <div className='flex space-x-4 mt-6'>
                  <button
                      className='w-full h-[40px] rounded bg-[#141414] border border-[#2c2c2c] text-sm text-zinc-400 hover:text-zinc-300 transition cursor-pointer flex items-center justify-center gap-4'
                      onClick={() => window.location.href = '/one-thing-focus.msi'}
                  >
                    <img src="WindowsNewIcon.svg" alt="" />
                    Windows
                  </button>
                </div>

                <p className='text-xs text-zinc-500 mt-3 text-center'>MacOS e Linux coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
