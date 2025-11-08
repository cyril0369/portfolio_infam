import Menu from "../components/menu"
import Marquee from "../components/marquee_project"
import StarsProject from "../images/ÉTOILES_PROJET.svg"

export default function Projects() {
    return (
        <div className="Page ProjectsPage">
            <Menu isHome={false} isAbout={false} isProject={true} />
            <Marquee/>
            <main>
                <div className="detail">
                    <h1>Encore</h1>
                    <h4>2025</h4>
                    <p><br />Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
                    odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. <br /><br />
                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. <br /><br /></p>
                    <img src={StarsProject} alt="etoiles" />
                    {/* <p> <br /><br />Charte graphique <br />
                    Logotype <br />
                    Supports de communication <br />
                    Affiches <br />
                    Flyers <br />
                    Drapeaux <br />
                    Néon</p> */}
                </div>
                <div className="images">image ici</div>
            </main>
        </div>
    )
}