import React from 'react';
import { Button } from '@/components/ui/button';
import '~/style/about.css';
import '~/style/tailwind.css';
import clsx from 'clsx';
import img from '../images/common/logo_square.png';

interface MyButtonProps {
  isHovering: boolean;
  children: React.ReactNode;
}
const MyButton: React.FC<MyButtonProps> = ({ isHovering, children }) => {
  const classes = clsx(
    'rounded bg-blue-500 px-4 py-2 text-base text-white',
    {
      'bg-blue-700 text-gray-100': isHovering,
    },
  );
  return (
    <button className={classes}>
      {children}
    </button>
  );
};


const TailwindTest:React.FC = () => {
  return (
  <>
    <div className="bg-blue-500 text-white p-4">
      <Button>Click me</Button>
      <div className="border border-border p-4">Border should be visible</div>
      Hello, Tailwind CSS!
      <MyButton isHovering={true}>Hover me</MyButton>
      <p className='bg-indigo-500 hover:bg-indigo-600'>嘿嘿</p>
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img className="size-12 shrink-0" src={img} alt="ChitChat Logo" />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
          <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={img} alt="" />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">Erin Lindford</p>
            <p className="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
          </button>
        </div>
      </div>

      <div className="group bg-white hover:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        <div>
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
            </svg>
          </span>
        </div>
        <h3 className="text-gray-900 group-hover:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
        <p className="text-gray-500 group-hover:text-gray-400 mt-2 text-sm ">
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
        </p>
      </div>
    </div>
  </>
  );
};

export default TailwindTest;