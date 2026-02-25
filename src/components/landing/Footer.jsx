import Container from "../layout/Container";
import logoBottom from "../../assets/logo_bottom.png";

export default function Footer() {
  return (
    <footer className="py-10">
      <Container className="text-center">
        <img src={logoBottom} className="h-12 mx-auto mb-4" alt="Aqari" />
        <p className="text-gray-500 dark:text-white/50 text-sm">© 2026 Aqari. All rights reserved.</p>
      </Container>
    </footer>
  );
}