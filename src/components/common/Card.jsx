import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ 
  icon, 
  title, 
  description, 
  className = '',
  iconClassName = '',
  titleClassName = '',
  descriptionClassName = ''
}) => {
  return (
    <div className={`bg-[#161616] rounded-3xl p-8 flex flex-col items-center shadow-[0px_0px_30px_#f1e811] ${className}`}>
      {icon && (
        <div className={`mb-8 ${iconClassName}`}>
          {typeof icon === 'string' ? (
            <img src={icon} alt={title} className="w-24 h-24" />
          ) : (
            icon
          )}
        </div>
      )}
      
      {title && (
        <h3 className={`text-[#f1e811] text-3xl font-semibold text-center mb-4 ${titleClassName}`}>
          {title}
        </h3>
      )}
      
      {description && (
        <p className={`text-[#9b9744] text-xl text-center ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string
};

export default Card;