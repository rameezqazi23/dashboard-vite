import { TextInput } from "@tremor/react";
import {SearchIcon} from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <div id="top" className="sticky top-0 w-full sm:flex justify-between items-center p-2 z-10 bg-[#1e293b] backdrop-filter backdrop-blur-lg bg-opacity-70">
        <h1 className="font-bold text-gray-300">Dashboard</h1>
        <div className="py-2">
            <TextInput icon={SearchIcon} placeholder="Search..."/>
        </div>

      
    </div>
  )
}

export default Navbar
