import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerI}>
      <span>©2023   </span>
      <span> GBD</span>

      </div>
     
      <div className={style.footerD}>
        <a href="tel:+"><i className="fa-brands fa-whatsapp fa-sm"></i> </a>
        <a href="#">
          <i className="fa-brands fa-x-twitter fa-sm"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-discord fa-sm"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-github fa-sm"></i>
        </a>
      </div>
    </footer>
  );
}
