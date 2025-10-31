import Menu from "../components/menu"
import LogoAnimated from "../components/image_animated"
import StarsAbout from "../images/ÉTOILES_A_PROPOS.svg"
import AncelinPicture from "../images/PHOTO_A_PROPOs.png"

export default function About() {
    return (
        <div className="Page AboutPage">
            <Menu isHome={false} isAbout={true} isProject={false} />
            <LogoAnimated isHome={false} isAbout={true} isProject={false}/>
            <header>
                <div className="Ancelin">
                    <img src={AncelinPicture} alt="Ancelin" className="item image"/>
                    <div className="item description">
                        <p>Designer graphique spécialisé dans l'industrie <br />
                        musicale et l'évènementiel, j'ai travaillé pour d e<br />
                        nombreux artistes musicaux, et accumule maintenant<br />
                        plus de 2 ans d'expérience dans l'industrie musicale,<br />
                        et l'évènementiel.<br /><br />
                        Diplomé d'un Diplôme National des Métiers d'Arts<br />
                        et du Design (DNMADe) à l'Ecole Supérieure de<br />
                        Design de Villefontaine, je travaille actuellement en<br />
                        tant que graphiste pour Totaal Rez, organisateur de<br />
                        concerts et évènements musicaux de renom sur Lyon.<br /><br />
                        J'aime expérimenter les textures, techniques,<br />
                        typographies et créer des compositions uniques qui,<br />
                        en plus d'attirer, puissent marquer les auditeurs et les<br />
                        artistes musicaux. Etant moi-même compositeur et<br />
                        producteur depuis de nombreuses années, je maitrise<br />
                        les codes et les références de l'industrie musicale, ce<br />
                        qui me permet de dialoguer aisément avec mes pairs.</p>
                    </div>
                    <div className="item contact">
                        <p>Contacts :<br /><br />
                        (+33) 6 69 46 71 73<br />
                        @infam_<br />
                        ancelinwatkins69@gmail.com</p>
                    </div>
                </div>

                <img src={StarsAbout} alt="stars" />

                <div className="Experiences">
                    <h1>EXPÉRIENCES</h1>
                    <h2>Pourquoi suis-je qualifié?</h2>
                    <div className="TableExperiences">
                        <div className="item">
                            <h3 className="title element">Graphiste</h3>
                            <p className="type element">CDI <br />
                            Totaal Rez/ Hooh <br />
                            Septembre 2025 - III</p>
                            <p className="description element">J'aime expérimenter les textures, techniques,<br />
                            typographies et créer des compositions uniques qui,<br />
                            en plus d'attirer, puissent marquer les auditeurs et les<br />
                            artistes musicaux. Etant moi-même compositeur et<br />
                            producteur depuis de nombreuses années, je maitrise<br />
                            les codes et les références de l'industrie musicale, ce<br />
                            qui me permet de dialoguer aisément avec mes pairs.</p>
                        </div>
                        <div className="item">
                            <h3 className="title element">Graphiste</h3>
                            <p className="type element">CDI <br />
                            Totaal Rez/ Hooh <br />
                            Septembre 2025 - III</p>
                            <p className="description element">J'aime expérimenter les textures, techniques,<br />
                            typographies et créer des compositions uniques qui,<br />
                            en plus d'attirer, puissent marquer les auditeurs et les<br />
                            artistes musicaux. Etant moi-même compositeur et<br />
                            producteur depuis de nombreuses années, je maitrise<br />
                            les codes et les références de l'industrie musicale, ce<br />
                            qui me permet de dialoguer aisément avec mes pairs.</p>
                        </div>
                        <div className="item">
                            <h3 className="title element">Graphiste</h3>
                            <p className="type element">CDI <br />
                            Totaal Rez/ Hooh <br />
                            Septembre 2025 - III</p>
                            <p className="description element">J'aime expérimenter les textures, techniques,<br />
                            typographies et créer des compositions uniques qui,<br />
                            en plus d'attirer, puissent marquer les auditeurs et les<br />
                            artistes musicaux. Etant moi-même compositeur et<br />
                            producteur depuis de nombreuses années, je maitrise<br />p
                            les codes et les références de l'industrie musicale, ce<br />
                            qui me permet de dialoguer aisément avec mes pairs.</p>
                        </div>
                        <div className="item">
                            <h3 className="title element">Graphiste</h3>
                            <p className="type element">CDI <br />
                            Totaal Rez/ Hooh <br />
                            Septembre 2025 - III</p>
                            <p className="description element">J'aime expérimenter les textures, techniques,<br />
                            typographies et créer des compositions uniques qui,<br />
                            en plus d'attirer, puissent marquer les auditeurs et les<br />
                            artistes musicaux. Etant moi-même compositeur et<br />
                            producteur depuis de nombreuses années, je maitrise<br />
                            les codes et les références de l'industrie musicale, ce<br />
                            qui me permet de dialoguer aisémentp avec mes pairs.</p>
                        </div>
                        <div className="item">
                            <h3 className="title element">Graphiste</h3>
                            <p className="type element">CDI <br />
                            Totaal Rez/ Hooh <br />
                            Septembre 2025 - III</p>
                            <p className="description element">J'aime expérimenter les textures, techniques,<br />
                            typographies et créer des compositions uniques qui,<br />
                            en plus d'attirer, puissent marquer les auditeurs et les<br />
                            artistes musicaux. Etant moi-même compositeur et<br />
                            producteur depuis de nombreuses années, je maitrise<br />
                            les codes et les références de l'industrie musicale, ce<br />
                            qui me permet de dialoguer aisément avec mes pairs.</p>
                        </div>
                    </div>
                </div>

                <img src={StarsAbout} alt="stars" />

                <div className="Services">
                    <h1>SERVICES</h1>
                    <h2>Comment puis-je vous aider ?</h2>
                    <div className="TableServices">
                        <div className="item">
                            <h3 className="title">Identités visuelles</h3>
                            <p className="description">Logo types, chartes graphique. <br />
                            supports digitaux et imprimés</p>   
                        </div>
                        <div className="item">
                            <h3 className="title">Identités visuelles</h3>
                            <p className="description">Logo types, chartes graphique. <br />
                            supports digitaux et imprimés</p>   
                        </div>
                        <div className="item">
                            <h3 className="title">Identités visuelles</h3>
                            <p className="description">Logo types, chartes graphique. <br />
                            supports digitaux et imprimés</p>   
                        </div>
                        <div className="item">
                            <h3 className="title">Identités visuelles</h3>
                            <p className="description">Logo types, chartes graphique. <br />
                            supports digitaux et imprimés</p>   
                        </div>
                        <div className="item">
                            <h3 className="title">Identités visuelles</h3>
                            <p className="description">Logo types, chartes graphique. <br />
                            supports digitaux et imprimés</p>   
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}