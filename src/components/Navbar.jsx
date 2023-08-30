import Link from "next/link";
import Tab from "./Tab";

export default function Navbar() {
	return (
		<header className="container mx-auto fixed h-[92px] backdrop-blur-md bg-[rgba(20,20,20,0.6)]">
			<nav className='flex justify-between items-center px-6 py-3 border-b-2 border-yellow-400'>
				<Link href='/' className='text-[2.75rem] font-extrabold drop-shadow-xl'><strong className='text-yellow-400'>Kr</strong>yptonFox</Link>
				<div className='space-x-4 justify-between'>
					<Tab href='/facts' name='Интересные факты' />
					<Tab href='/about' name='Обо мне' />
				</div>
			</nav>
		</header>
	)
}
