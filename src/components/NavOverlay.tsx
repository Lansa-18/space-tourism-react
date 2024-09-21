type NavOverlayProps = {
  activeHamburger: boolean;
  setActiveHamburger: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavOverlay({ activeHamburger, setActiveHamburger }: NavOverlayProps) {
  if (!activeHamburger) return null;  
  return (
    <article className="min-h-[200vh] border border-red-900 absolute top-0 right-0 backdrop-blur-[4rem] z-50 w-[55%]">
      <div onClick={() => setActiveHamburger(false)}>
        <img src="/assets/shared/icon-close.svg" alt="close-icon" />
      </div>
    </article>
  )
}
