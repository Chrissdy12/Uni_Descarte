import { IonIcon } from '@ionic/react';
import './ExploreContainer.css';
import { location } from 'ionicons/icons';

interface ContainerProps {
  name: string;
}

const ExploreContainer2: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div>

      <div className='container2'>
        <div className='container3'>

          <div>
            <h1>São Sebastião:</h1>

            <nav>Endereço: R. Pedro Bonesio, 236 - Centro, Três Corações - MG, 37410-113</nav>

            <nav>Telefone: (35) 3239-3950</nav>

          </div>

          <a href="https://www.google.com/maps?rlz=1C1GCEA_enBR1030BR1030&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBCDk1OThqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KUE4qTjn3MqUMYD4bJ_9izfO&daddr=R.+Pedro+Bonesio,+236+-+Centro,+Tr%C3%AAs+Cora%C3%A7%C3%B5es+-+MG,+37410-113" className="botao" ><IonIcon aria-hidden="true" icon={location} /></a>

        </div>

      </div>

      <div className='container2'>
        <div className='container3'>

          <div>
            <h1>Natus Farma :</h1>

            <nav>Endereço: R. Rui Barbosa, 37 - Centro, Três Corações - MG, 37410-000</nav>

            <nav>Telefone: (35) 91025-6212</nav>


          </div>

          <a href="https://www.google.com/maps?rlz=1C1GCEA_enBR1030BR1030&lqi=CgtuYXR1cyBmYXJtYUiFoZqi5oCAgAhaFRAAEAEYABgBIgtuYXR1cyBmYXJtYZIBCHBoYXJtYWN5qgFFEAEqDyILbmF0dXMgZmFybWEoDDIfEAEiGzOCvCNvhoIyHO-SktcHSHrGAFwS4S1qtj4bPDIPEAIiC25hdHVzIGZhcm1h&vet=12ahUKEwiFj5TMiNiIAxV8qZUCHZtcFXYQ8UF6BAgpEAM..i&lei=5NjwZoWNIPzS1sQPm7nVsAc&cs=1&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KcWdntvm3MqUMWEv3qWvceJE&daddr=R.+Rui+Barbosa,+37+-+Centro,+Tr%C3%AAs+Cora%C3%A7%C3%B5es+-+MG,+37410-000" className="botao" ><IonIcon aria-hidden="true" icon={location} /></a>

        </div>

      </div>

      <div className='container2'>
        <div className='container3'>

          <div>
            <h1>Drogaria Peró:</h1>

            <nav>Endereço: Av. Rei Pelé, 190 Via WhatsApp, 35, 99972-0752 - Peró, Três Corações - MG, 37417-210</nav>

            <nav>Telefone: (35) 3232-1011</nav>



          </div>

          <a href="https://www.google.com/maps?sca_esv=93ba128cb291b7aa&sca_upv=1&rlz=1C1GCEA_enBR1030BR1030&sxsrf=ADLYWILgAEafOUBrJcmcjgo2olY1soM5jw:1727059934853&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiDURyb2dhcmlhIFBFcm8yDhAuGIAEGMcBGI4FGK8BMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQABiABBiSAxiKBTILEAAYgAQYkgMYigUyChAAGIAEGMkDGAoyBRAAGIAEMgsQLhiABBjHARivATILEC4YgAQYxwEYrwEyHRAuGIAEGMcBGI4FGK8BGJcFGNwEGN4EGOAE2AEBSLk6UABY7TVwAXgBkAEAmAGCAaAB3AuqAQQwLjEzuAEDyAEA-AEBmAIOoAKLDKgCEsICBxAjGCcY6gLCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIcEC4YgAQYQxi0AhjHARjIAxiKBRjqAhivAdgBAcICHxAuGIAEGEMYtAIYxwEYyAMYigUY6gIYjgUYrwHYAQHCAgoQIxiABBgnGIoFwgIKEC4YgAQYJxiKBcICChAAGIAEGEMYigXCAhMQLhiABBixAxjRAxhDGMcBGIoFwgINEAAYgAQYsQMYQxiKBcICEBAuGIAEGNEDGEMYxwEYigXCAg4QLhiABBixAxjRAxjHAcICERAuGIAEGLEDGNEDGMcBGMkDwgIIEAAYgAQYsQPCAiAQLhiABBixAxjRAxjHARjJAxiXBRjcBBjeBBjgBNgBAcICChAAGIAEGBQYhwLCAggQABiABBjJA5gDCLoGBggBEAEYC5IHBDEuMTOgB4qzAQ&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KRUaUB7Y3MqUMVJHp2rYkBKX&daddr=Av.+Rei+Pel%C3%A9,+190+Via+WhatsApp,+35,+99972-0752+-+Per%C3%B3,+Tr%C3%AAs+Cora%C3%A7%C3%B5es+-+MG,+37417-210" className="botao" ><IonIcon aria-hidden="true" icon={location} /></a>

        </div>

      </div>










    </div>


  );
};

export default ExploreContainer2;
