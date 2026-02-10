import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const TeamBox = ({ id, img, name, title, index = 0 }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/meet-our-team/${id}`);
  };

  return (
    <motion.div
      className="group relative w-full rounded-2xl overflow-hidden cursor-pointer bg-white"
      onClick={handleClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 4) * 0.1 }}
      whileHover={{ y: -6 }}
      style={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-400" />

        {/* Orange accent bar at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tltorange to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
      </div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
        <h4 className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-lg">
          {name}
        </h4>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="w-5 h-0.5 bg-tltorange rounded-full inline-block" />
          <p className="text-white/90 font-medium text-xs md:text-sm drop-shadow-md">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

TeamBox.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  index: PropTypes.number,
};

export default TeamBox;
