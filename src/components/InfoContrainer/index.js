import React from 'react'
import './info-container.css'
import Button from "../common/Button";
const InfoContainer = ({
    title,
    subtitle,
    description,
    backgroundImage,
      backgroundColor,
      btnText,
}) =>
{
  return (
    <div 
    className={`info-container photo-section ${backgroundImage} ${backgroundColor}`}
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundColor: `${backgroundColor}`,
    }}
    >
    <div className="max-width">
      <div className="photo-section-child">
        <div className="photo-section-top dynamic-margin">
          <div className="photo-section-heading">
           {title}
          </div>
          <div className="photo-section-subheading">
            {subtitle}
          </div>
        </div>
        <div className="photo-section-bottom dynamic-margin">
          <div className="photo-section-description">
            {description}
          </div>
          <div className="photo-section-button">
            <Button buttonText={btnText}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InfoContainer
