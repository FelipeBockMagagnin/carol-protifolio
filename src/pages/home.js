import textImage from '../assets/text.png'
import profileImage from '../assets/profile.png'
import ellipseImage from '../assets/ellipse.png'
import atImage from '../assets/icon _at_.svg'
import BehanceImage from '../assets/icon _behance outline_.svg'
import LinkedInImage from '../assets/icon _linkedin_.svg'

function Home() {
    return (
        <div className="home">
            <div className="profile">
                <div className='profile-image-container'>
                    <img alt='Text saying Caroline Alberton' src={textImage} className='text-profile-img'></img>
                    <img alt='Caroline Alberton' src={profileImage} className='profile-img'></img>
                </div>

                <div className="sub-title">
                    Visual Designer
                </div>

                <div className="socials">
                    <div style={{ backgroundImage: `url(${ellipseImage})` }}>
                        <img src={atImage} alt='at logo' />
                    </div>
                    <div style={{ backgroundImage: `url(${ellipseImage})` }}>
                        <img src={BehanceImage} alt='behance logo' />
                    </div>
                    <div style={{ backgroundImage: `url(${ellipseImage})` }}>
                        <img src={LinkedInImage} alt='linkedin logo' />
                    </div>
                </div>
            </div>

            <div>
                Visual Designer
            </div>
        </div>
    );
}

export default Home;
