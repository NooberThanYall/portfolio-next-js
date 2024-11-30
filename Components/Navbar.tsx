import Link from 'next/link'
import { Home, User, Briefcase, Mail } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="fixed z-[100] top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 text-white rounded-full px-6 py-3 shadow-lg">
      <ul className="flex space-x-6">
        <NavItem href="/" icon={<Home size={20} />} label="Home" />
        <NavItem href="/about" icon={<User size={20} />} label="About" />
        <NavItem href="#portfolio" icon={<Briefcase size={20} />} label="Projects" />
        <NavItem href="#contact" icon={<Mail size={20} />} label="Contact" />
      </ul>
    </nav>
  )
}

const NavItem = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <li>
      <Link href={href} className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-200">
        {icon}
        <span className="hidden sm:inline">{label}</span>
      </Link>
    </li>
  )
}

export default Navbar

