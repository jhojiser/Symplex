import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

export default function Home() {
  useEffect(() => {
    document.title = "Symplex - Software a la medida y automatización";
  }, []);

  return (
    <main className="bg-[#F5F5F5] text-[#00171F] font-sans">
      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-[#3E0A8A] to-[#00171F] text-white">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Simplificamos tu mundo digital
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Automatización de procesos, integraciones con SIESA y desarrollo a la medida para empresas inteligentes.
        </motion.p>
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <Button className="bg-[#FFAA00] text-[#00171F] hover:bg-[#e09a00]">Solicita una demo</Button>
          <a href="https://www.linkedin.com/company/symplexsas" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#00171F]">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </a>
        </motion.div>
      </section>

      {/* Sobre nosotros */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">¿Quiénes somos?</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          En <strong>Symplex</strong> combinamos desarrollo tecnológico con conocimiento funcional. Nuestro equipo multidisciplinario tiene experiencia en logística, finanzas y contabilidad, lo que nos permite construir soluciones a la medida de tus procesos reales.
        </p>
      </section>

      {/* Servicios */}
      <section className="py-24 px-6 bg-[#F5F5F5] text-center">
        <h2 className="text-4xl font-bold mb-12">Nuestros servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Software a la medida",
              desc: "Desarrollamos aplicaciones web y móviles adaptadas a tu operación empresarial.",
            },
            {
              title: "Automatización con Power Platform",
              desc: "Creamos flujos con Power Automate y apps con PowerApps para optimizar procesos."
            },
            {
              title: "Integraciones empresariales",
              desc: "Conectamos tus sistemas con SIESA, servicios externos y APIs."
            },
          ].map((servicio, i) => (
            <Card key={i} className="shadow-lg hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#3E0A8A]">{servicio.title}</h3>
                <p className="text-gray-700">{servicio.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="py-24 px-6 bg-[#FFAA00] text-[#00171F] text-center">
        <h2 className="text-4xl font-bold mb-6">Contáctanos</h2>
        <p className="text-lg mb-4">Jonathan Jiménez Serge · Co-Fundador & CEO</p>
        <p className="text-lg">📱 300 763 0769 · ✉️ contacto@symplex.co</p>
        <p className="mt-4">
          También puedes encontrarnos en <a className="underline font-medium" href="https://www.linkedin.com/company/symplexsas" target="_blank">LinkedIn</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-[#00171F] text-white text-center">
        <p className="text-sm">© 2025 Symplex. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
