import { Link } from "react-router-dom";
import { TreePine, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <TreePine className="h-8 w-8" />
              <span className="font-serif text-xl font-bold">Djavu PDL</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Muebles de madera artesanales hechos con pasión y precisión. 
              Desde diseños estándar hasta piezas totalmente personalizadas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/products" className="hover:text-primary-foreground transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/customize" className="hover:text-primary-foreground transition-colors">
                  Muebles Personalizados
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-primary-foreground transition-colors">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-foreground transition-colors">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Atención al Cliente</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/contact" className="hover:text-primary-foreground transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-primary-foreground transition-colors">
                  Seguir Pedido
                </Link>
              </li>
              <li>
                <Link to="/auth" className="hover:text-primary-foreground transition-colors">
                  Mi Cuenta
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Calle Carpintería 123, Santa Clara, Cuba</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+53 50625350</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@djavu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Djavu PDL. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
