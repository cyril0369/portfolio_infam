import Menu from "../components/menu";
import LogoAnimated from "../components/image_animated";
import Cursor from "../components/cursor";

export default function Acceuil() {
  return (
    <div className="Page">
      <Cursor />
      <Menu />
      <div className="AcceuilMain">
        <LogoAnimated />
        <p>
          Designer graphique <br />
          specialisé dans le secteur <br />
          culturel et musical
        </p>
      </div>
    </div>
  );
}
