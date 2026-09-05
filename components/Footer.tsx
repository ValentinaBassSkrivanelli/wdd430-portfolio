//EXAAMPLE
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div>
            <p className="text-lg font-semibold">
              Valentina Bass
            </p>
            <p className="text-sm text-gray-400">
              Full-Stack Developer
            </p>
          </div>

          <div className="text-sm text-gray-400 text-center md:text-right">
            <p>
              © {new Date().getFullYear()} Valentina Bass
            </p>
            <p>
              All rights reserved.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-400">
            Built with Next.js, React and Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}