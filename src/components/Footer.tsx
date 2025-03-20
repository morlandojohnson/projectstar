import footerLogo from "../public/images/logo-icon.webp";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal text-neutral-content border-primary items-center border-t-2 p-4">
      <aside className="grid-flow-col items-center">
        <img src={footerLogo} alt="Image of logo icon" className="max-w-16" />
        <p className="text-primary">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end"></nav>
    </footer>
  );
}

export default Footer;
