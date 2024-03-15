export function FooterComponents() {
  return (
    <footer className="bg-gray-800 font-sans dark:bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-4 hover:cursor-pointer">
          <a
            href="https://github.com/Leonel-H29/StockControl"
            title="Ir al repositorio de GitHub"
          >
            <img
              src="https://www.svgrepo.com/show/94698/github.svg"
              width="30"
              height="30"
              alt="GitHub"
            />
          </a>
          <a
            href="https://linkedin.com/in/leonel-herrera/"
            title="Ir al perfil de LinkedIn"
          >
            <img
              src="https://www.svgrepo.com/show/28145/linkedin.svg"
              width="30"
              height="30"
              alt="LinkedIn"
            />
          </a>
        </div>
        <p className="font-sans text-lg">© 2024 HERRERA LEONEL ESTEBAN</p>
      </div>
    </footer>
  );
}
