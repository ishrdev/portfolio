import React from 'react';

import '../App.css'

interface TechTagProps {
  name: string;
  icon?: string;
}

const TechTag = ({ name, icon }: TechTagProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-500/80">
      {icon && (<img src={icon} alt={name} className="w-4 h-4 object-contain" />)}
      <span className="">{name}</span>
    </div>
  );
};

export default TechTag;