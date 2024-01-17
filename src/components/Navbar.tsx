import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-4 lg:mx-8">
      
      <div className="logo">
        <Link href="/" className="text-xl font-medium ">
          Matheus Felipe
        </Link>
      </div>
      <Navbar>

      </Navbar>
      <div>
        <a href="" className="hover:text-zinc-500 transition-all p-2 px-4 rounded-xl font-bold">Home</a>

        {/* <a href="" className="hover:text-red-500 transition-all p-2 px-4 rounded-xl font-bold">Projetos</a> */}
        {/* <a href="" className="hover:text-red-500 transition-all p-2 px-4 rounded-xl font-bold">Sobre Mim</a> */}
        {/* <a href="" className="hover:text-red-500 transition-all p-2 px-4 rounded-xl font-bold">Contato</a> */}
      </div>
    </div>
  )
}

export default Navbar;