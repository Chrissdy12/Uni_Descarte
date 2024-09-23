

interface ContainerProps {
  name: string;
}

const ExploreContainer3: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>E <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI </a></p>
    </div>
  );
};

export default ExploreContainer3;
