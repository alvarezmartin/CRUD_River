import './Footer.css'
import logoFooter from './logo-river-foot.png'

export default function Footer(){
    return(
            <footer className="footer d-flex flex-wrap row-gap-5">
            <img className="logofooter" src={logoFooter}/>
            <div className="anclas">
                <div className="Redes">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/riverplateoficial" title="Facebook" target="_blank"><i className="FB fa-brands fa-square-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/club-atl-tico-river-plate/" title="Linkedin" target="_blank"><i className="LN fa-brands fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/@RiverPlate" title="Twitter" target="_blank"><i className="TW fa-brands fa-square-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/riverplate/" title="Instagram" target="_blank"><i className="IG fa-brands fa-square-instagram"></i></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/user/cariverplatetv" title="Youtube" target="_blank"><i className="YT fa-brands fa-square-youtube"></i></a>
                        </li>
                    </ul>    
                </div>         
                <div className="sponsors">
                    <a href="https://www.adidas.com.ar/" target="_blank"><img src="https://riveridstorage.blob.core.windows.net/appcarpimages/adidas.png" alt="adidas"/></a>
                    <a href="https://www.grupocodere.com/argentina/" target="_blank" id='codere'><img src="https://riveridstorage.blob.core.windows.net/appcarpimages/codere.png" alt="codere"/></a>
                    <a href="https://www.directv.com.ar/" target="_blank"><img src="https://riveridstorage.blob.core.windows.net/appcarpimages/sponsor_directtv.png" alt="direct-tv"/></a>
                    <a href="https://www.assistcard.com/ar/b2c/river-plate" target="_blank"><img src="https://riveridstorage.blob.core.windows.net/appcarpimages/assist-card.png" alt="assist-card"/></a>
                    <a href="https://www.masonline.com.ar" target="_blank"><img src="https://riveridstorage.blob.core.windows.net/appcarpimages/mas-monumental.png" alt="mas-monumental"/></a>
                </div>
            </div>
        </footer>
    )
}