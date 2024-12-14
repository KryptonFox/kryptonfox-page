import { Metadata } from 'next'
import Sidebar from '../../components/sidebar/Sidebar'

export const metadata: Metadata = {
  title: 'Обо мне',
}

export default function layout({ children }) {
  return (
    <div className="grid md:grid-cols-4 lg:grid-cols-5">
      <Sidebar />
      <article className="min-h-screen w-full px-4 py-8 md:col-span-3 md:px-10 lg:col-span-4">
        {children}
      </article>
    </div>
  )
}
