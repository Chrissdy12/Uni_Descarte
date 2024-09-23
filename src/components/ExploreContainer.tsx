import './ExploreContainer.css';


interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <img src="https://unincor.mrooms.net/pluginfile.php/1/theme_snap/logo/1726896639/logo.png" alt="" />

      <div>
      <p>Seja bem vindo ao aplicativo que irá lhe ajudar a achar o ponto de descarte mais proximo a você !</p>

      <p>Clique no icone de localização para achar os locais.</p>
      </div>

    </div>
  );
};

export default ExploreContainer;
