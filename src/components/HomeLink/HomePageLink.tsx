import Link from "next/link";

interface HomePageLinkProps {
  classname?: string;
}

const HomePageLink = ({classname}: HomePageLinkProps) => {
  return (
    <Link href='/' className={`bg-gradient-to-br from-transparent via-black/30 to-transparent text-white/30 italic border px-4 py-2 rounded-full font-bold ${classname}`}>Power King</Link>
  )
}

export default HomePageLink