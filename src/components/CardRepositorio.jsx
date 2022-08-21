// {/* <Image class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
/* eslint-disable react/prop-types */
export const CardRepositorio = ({nome, description}) => {
	return(

		<div className="md:max-w-sm rounded overflow-hidden shadow-lg bg-slate-800 ">
			<div className='w-full'>

			</div>
			<div className="px-6 py-4 w-full h-full">
				<div className="font-bold text-xl mb-2">{nome}</div>
				<p className="text-gray-500 text-base  ">
					{description}
				</p>
			</div>

		</div>

	)
}