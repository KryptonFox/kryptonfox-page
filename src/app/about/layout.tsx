import SideBarTab from '@/components/SideBarTab';
import { Metadata } from 'next';
import Sidebar from './Sidebar';

export const metadata: Metadata = {
  title: 'Обо мне',
};

export default function layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <article className="w-full md:w-3/4 lg:w-4/5 pr-3 md:pr-0 md:px-10 py-2 min-h-[calc(100vh-var(--header-h))] md:py-6">
        {children}
      </article>
    </div>
  );
}
