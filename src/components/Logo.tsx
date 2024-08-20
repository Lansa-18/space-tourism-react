import LogoIcon from '/assets/shared/logo.svg'

export default function Logo() {
  return (
    <div className='flex ml-[6.4rem] gap-[6.4rem] items-center w-[50%] z-10'>
        <img className='w-[4.8rem] h-[4.8rem]' src={LogoIcon} alt="logo-icon" />   
        <div className='border-b border-white w-full opacity-[0.25] mr-[-3.2rem]'></div>
    </div>
  )
}
