import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const TeamBox = ({ id, img, name, title }) => {
    
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/meet-our-team/${id}`);
  };

  return (
    <div
      className="box flex flex-wrap items-center justify-center gap-12 relative overflow-hidden shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <div className="tutor_box_img flex flex-col">
        <img src={img} alt={name} className="w-56 h-48 md:w-64 md:h-72 rounded-lg" />
      </div>
      <div className="box_text mt-2 absolute bottom-2 inset-x-0 flex flex-col justify-start border-2 border-tltorange text-center mx-3 bg-white bg-opacity-80 rounded-full py-1 px-1 z-20">
        <h4 className="text-tltorange font-bold text-sm">{name}</h4>
        <p className="font-normal text-xs">{title}</p>
      </div>
    </div>
  );
};

TeamBox.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default TeamBox;
