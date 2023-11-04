import 'bulma/css/bulma.css'

import ProfileCard from "./ProfileCard";
import AlexaImg from "./images/alexa.png";
import CortanaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistance</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title='Alexa' handle='@alexa99' image={AlexaImg} description='wiwbefw wue uieguiwe uiweg weg'/>
            </div>
            <div className="column is-4">
              <ProfileCard title='Cortana' handle='@cortana32' image={CortanaImg} description='wenoifuwe uwe fuiwe uwe iwueg eg'/>
            </div>
            <div className="column is-4">
              <ProfileCard title='Siri' handle='@siri33' image={SiriImg} description='iwuebfiu iuwe fuiwpa we iuwef woef wefi'/>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
