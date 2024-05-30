import Link from "next/link";

interface HomePageLinkProps {
  classname?: string;
}

const HomePageLink = ({classname}: HomePageLinkProps) => {
  return (
    <Link href='/' className={`font-black bg-black/50 text-white/30 italic border px-4 py-2 rounded-full ${classname}`}>Power King</Link>
  )
}

export default HomePageLink