import { Button } from "@/components/ui/button"
import { Icon } from "@radix-ui/react-select"
  


export default function NavbarLayout() {
        return (

				<nav className="flex items-center justify-between flex-wrap  shadow-md bg-sky-500 p-4">
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
						<span className="font-semibold text-xl tracking-tight">POC</span>
					</div>
					<div className="block lg:hidden">
						<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
						</button>
					</div>
					<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
						<div className="text-sm lg:flex-grow">
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
							Docs
						</a>
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
							Examples
						</a>
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
							Blog
						</a>
						</div>
						<div>
						<a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
						</div>
					</div>
				</nav>
        //        <nav classNameName="flex items-center justify-between flex-wrap rounded-2xl bg-white-500 p-4  shadow-md">
	// 		<div >
	// 			<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
	// 			<path d="M3 21.0001H21M4 18.0001H20M6 18.0001V13.0001M10 18.0001V13.0001M14 18.0001V13.0001M18 18.0001V13.0001M12 
	// 			7.00695L12.0074 7.00022M21 10.0001L14.126 3.88986C13.3737 3.2212 12.9976 2.88688 12.5732 2.75991C12.1992 2.64806 11.8008 2.64806 11.4268 2.75991C11.0024 2.88688 10.6263 3.2212 9.87404 3.88986L3 10.0001H21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	// 			</svg>
	// 		</div>
	// 		<div className="block lg:hidden">
	// 			<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
	// 			<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
	// 			</button>
	// 		</div>

	// 		<div classNameName="flex items-center">test</div>
	// 		<div classNameName="flex items-center">test</div>
	// 		<div classNameName="flex items-center">test</div>

	// 		<Button classNameName="flex-col-reverse bg-primary ml-4 justify-left content-end">Example</Button>


        //         </nav>

        )
}