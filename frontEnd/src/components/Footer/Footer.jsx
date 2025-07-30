import "./footer.css";

function Footer() {
  const date = new Date();
  return (
    <div className="footer">
      <p>Copyright © {date.getFullYear()} Afzal's Recipe</p>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}

export default Footer;
