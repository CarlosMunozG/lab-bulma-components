import React from 'react'

function CoolButton(props) {

  const allClasses = [];
  const bulmaButtonClasses = {
    isActive: 'is-active',
    isBlack: 'is-black',
    isCentered: 'is-centered',
    isDanger: 'is-danger',
    isDark: 'is-dark',
    isFocused: 'is-focused',
    isGrouped: 'is-grouped',
    isHovered: 'is-hovered',
    isInfo: 'is-info',
    isInverted: 'is-inverted',
    isLarge: 'is-large',
    isLight: 'is-light',
    isLink: 'is-link',
    isLoading: 'is-loading',
    isMedium: 'is-medium',
    isOutlined: 'is-outlined',
    isPrimary: 'is-primary',
    isRight: 'is-right',
    isRounded: 'is-rounded',
    isSelected: 'is-selected',
    isSmall: 'is-small',
    isStatic: 'is-static',
    isSuccess: 'is-success',
    isText: 'is-text',
    isWarning: 'is-warning',
    isWhite: 'is-white',
  }

  for (const prop in props) {
    console.log(prop);
    if(props[prop] === true){
      allClasses.push(prop)
      
      console.log(allClasses);
    }
  };
  allClasses.join(' ').toString();
  return (
    <div>
      <button className={allClasses}>{props.children}</button>
    </div>
  )
}

export default CoolButton;

