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
      <article className="md:w-3/4 lg:w-4/5 px-2 md:px-10 py-6">
        {children}
      </article>
    </div>
  );
}
