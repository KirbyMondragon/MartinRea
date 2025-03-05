import Link from "next/link"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">Martinrea</h1>
      <h2 className="text-4xl font-bold mb-4 sm:text-7xl">(Documentación de máquinas)</h2>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
    Portal confiable para acceder a manuales y guías técnicas de máquinas. Con instrucciones paso a paso y recursos actualizados, la página te ayuda a mantener, reparar y optimizar tus equipos de manera sencilla y eficiente.
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}
