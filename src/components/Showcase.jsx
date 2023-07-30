import showcaseImage from '../assets/bg4.jpg';

const Showcase = () => {
  return (
    <div className="h-8 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${showcaseImage})` }}>
    </div>
  );
};

export default Showcase;
