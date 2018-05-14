import React, { Component } from 'react';
import Logo from './Logo.jsx';
import logoObj from '../logoObj'


class Footer extends Component {
    constructor(props){
        super(props)

        this.state = {
            logos: null
        }
    }

    componentDidMount(){
       let logos = logoObj.map(({ src, alt}) => 
            <Logo key={src} alt={alt} src={src}/>
        )
        this.setState({logos})
    }
    
    render(){
       

        return (
            <div id="footer">
                <div className="footer">
                    <div className="logos-unit">
                        <div className="built-by">
                            <p><br/><br/>Built by:</p> <img src="images/demand-progress.png" />
                            <p>In partnership with: </p> <img src="images/DailyKosLogo.png" />
                        </div>
                        <div className="logos" style={{display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "center"}}>
                            {this.state.logos}
                        </div>
                        <div>
                            <div className="press-inquiries">
                                <h3>For Press inquiries, please contact us at:</h3>
                                <p>
                                    <a className="no-em" href="tel://1-202-681-7582">202-681-7582</a> or <a href="mailto:press@demandprogress.org">press@demandprogress.org</a>
                                </p>

                                <br/>
                                <p>
                                    <a href="https://demandprogress.org/privacy-policy/" target="_blank">Our privacy policy</a>
                                </p>
                            </div>
                            <div className="social-media">
                                <a className="twitter" href="https://twitter.com/intent/tweet?text=Call%20Congress%21%20Tell%20them%20they%20must%20vote%20%E2%80%98yes%E2%80%99%20on%20the%20CRA%20resolution%20to%20save%20the%20open%20internet%20and%20restore%20%23NetNeutrality%20https%3A%2F%2Fstopthefcc.net%2F" target="_blank">
                                    <img src="images/twitter_white.svg" />
                                    <span>Share on twitter</span>
                                </a>
                                <a className="facebook" href="https://www.facebook.com/sharer.php?u=https://www.stopthefcc.net/" target="_blank">
                                    <img src="images/facebook_white.svg" />
                                    <span>Share on facebook</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Footer;