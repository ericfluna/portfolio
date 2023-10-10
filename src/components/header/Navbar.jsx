export default function Navbar() {
  return (
    <nav>
      <ul className="hidden md:flex gap-14 xl:gap-24 2xl:gap-36 font-bold text-[1.30rem]">
        <li>
          <a href="/#projects" className="cursor-pointer">
            PROYECTOS
          </a>
        </li>
        <li>
          <a href="/#contact" className="cursor-pointer">
            CONTACTO
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ericfluna"
            target="_blank"
            className="cursor-pointer"
          >
            GITHUB
          </a>
        </li>
      </ul>
    </nav>
  );
}
