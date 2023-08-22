import Link from "next/link";
import Tab from "./Tab";

export default function Navbar() {
	return (
		<header className="container mx-auto">
			<nav className='flex justify-between items-center px-6 py-3 shadow-[0_4px_2px_-2px] shadow-yellow-400'>
				<Link href='/' className='text-[2.75rem] font-extrabold shadow-xl'><strong className='text-yellow-400'>Kr</strong>yptonFox</Link>
				<div className='space-x-4 justify-between'>
					<Tab href='/facts' name='Интересные факты' />
					<Tab href='/about' name='Обо мне' />
				</div>
			</nav>
		</header>
	)
}
