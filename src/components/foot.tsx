import Image from 'next/image';

const Foot = () => {
  return (
    <footer className='pointer-events-auto relative z-20 flex flex-col items-center justify-center bg-secondary px-4 py-6 text-center text-text'>
      <div className='flex flex-col items-center xs:flex-row'>
        Powered by creativity, fueled by ❤️
        {/* <div className='ml-3 mt-2 flex gap-2 text-[17px] xs:mt-0 '>
          {techUsed.map((icon) => (
            <div
              key={icon.name}
              className='h-6 w-6 cursor-pointer transition-transform hover:scale-110 focus:scale-110'
              tabIndex={0}
              onClick={() => window.open(icon.link, '_blank')}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  window.open(icon.link, '_blank');
                }
              }}
            >
              <Image src={icon.icon} alt={icon.name} className='object-contain' width={32} height={32} />
            </div>
          ))}
        </div> */}
        {/* <span className='ml-3 mt-2 xs:mt-0'>Powered by creativity, fueled by ❤️ !</span> */}
      </div>
      <p className='mt-5 text-[14px] opacity-75 '>
        &copy; {new Date().getFullYear()} Jafar Aziz Shariff <br />
      </p>
      {/* Commented out the entire anchor tag to remove the "Code" button and its functionality */}
      {/* <a
        href='https://github.com/Jafar-97/Jafar_Portfolio'
        target='_blank'
        rel='noreferrer'
        className='mt-4 flex cursor-pointer items-center gap-1 text-[18px] font-medium text-text transition-transform duration-200 hover:-translate-y-[2px] focus:-translate-y-[2px] hover:text-primary focus:text-primary'
      >
        Code
        <svg height='1em' viewBox='0 0 496 512' className='text-current'>
          <path
            d='[SVG path data]'
            fill='currentColor'
          />
        </svg>
      </a> */}
    </footer>
  );
};

export default Foot;
