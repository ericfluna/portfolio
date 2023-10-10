import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={'/'}>
      <Image
        width={175}
        height={175}
        alt="logo"
        src={'/images/logo.svg'}
      />
    </Link>
  )
}
