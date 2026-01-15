const FooterView = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Construmapas</h3>
          <p className="text-white/70">
            Topografia & Regularização de Imóveis
          </p>
          <div className="pt-4 border-t border-white/20">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Construmapas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterView;
