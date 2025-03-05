import Link from "next/link"
import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-4 py-16 bg-transparent">
      <h1 className="text-4xl sm:text-7xl font-bold mb-4 animate-bounce">
        Martinrea
      </h1>
      <h2 className="text-3xl sm:text-5xl font-semibold mb-4 text-blue-500">
        (Documentación de máquinas)
      </h2>
  
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({
            className:
              "px-6 py-3 bg-gray-800 hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-transform duration-300 transform hover:scale-105 shadow-lg",
            size: "lg",
          })}
        >
          Ver documentacion
        </Link>
      </div>
    </div>
  )
}
