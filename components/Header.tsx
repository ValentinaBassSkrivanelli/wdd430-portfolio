//EXAMPLE
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        
        <div className="text-2xl font-bold">
         Valentina Bass
        </div>

        <ul className="flex gap-8">
          <li>
            <Link 
              href="/" 
              className="hover:text-blue-200 transition-colors"
            >
              Home
            </Link>
          </li>

          <li>
            <Link 
              href="/about" 
              className="hover:text-blue-200 transition-colors"
            >
              About
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}