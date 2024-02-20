import Link from "next/link";
import Logo from "../logo";
import SearchMovies from "@/components/search";

export default function NavBar() {
  return (
    <nav className="bg-primary drop-shadow-glow shadow-2xl z-50 sticky top-0">
      <div className="flex place-content-between items-center max-w-screen-xl m-auto">
        <div className="">
          <Link href="/discover">
            <div className="container mx-auto flex gap-3 items-end p-2">
              <Logo color="#ccd435" className="w-20 h-20" />
              <span className="text-secondary text-[44px] font-rowdies ">
                Movie finder
              </span>
            </div>
          </Link>
        </div>
        <SearchMovies />
      </div>
    </nav>
  );
}
