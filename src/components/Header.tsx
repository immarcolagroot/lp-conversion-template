import Image from 'next/image'

export default function Header() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/assets/images/logo.png" className="h-8" alt="Logo" />          
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-black">PROCESSO</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black">DEPOIMENTOS</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black">SOBRE</a>
            </li>
          </ul>
        </div>

        <button className="bg-transparent font-semibold py-2 px-4 border rounded">
          MARCAR CALL GRATUITA
        </button>

      </div>
    </nav>
  );
}
