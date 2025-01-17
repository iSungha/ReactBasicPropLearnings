import 'bulma/css/bulma.css' 
import ProfileCard from "./ProfileCard"; 
import Alexa from "../Images/alexa.png" 
import Cortana from "../Images/cortana.png" 
import Siri from "../Images/siri.png" /*
<div>
    <h1>Personal Digital Asistant</h1>
    <ProfileCard title="Alexa" handle="@Alexa99" image={ Alexa}/>
    <ProfileCard title="Cortana" handle="@Cortana32" image={ Cortana}/>
    <ProfileCard title="Siri" handle="@Siri01" image={ Siri}/>
</div> */ 
function App (){ return (
<div>
    <div>
        <section className='hero is-primary'>
            <div className='hero-body'>
                <p className='title'>Personal Digital Assistant</p>
            </div>
        </section>
    </div>

    <div className="container">
        <section className='section'>
            <div className='columns'>
                <div className="column is-3">
                    <ProfileCard
                     title="Alexa"
                     handle="@Alexa99"
                     image={ Alexa}
                     description = "Alexa was made by Amazon to help you items on thier website"
                    />
                </div>
                <div className="column is-3">
                    <ProfileCard
                     title="Cortana"
                     handle="@Cortana32" 
                     image={ Cortana}
                     description = "Cortana is created by Microsoft. I don't know what it does actually."
                    />
                </div>
                <div className="column is-3">
                    <ProfileCard
                     title="Siri" 
                     handle="@Siri01" 
                     image={ Siri}
                     description = "Siri is AI assistant for Apple devices though I would argue it is hardly useful : )"
                    />
                </div>
            </div>
        </section>
    </div>
</div>
); } 

export default App;