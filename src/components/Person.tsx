import React, { useEffect, useState } from 'react';
import { Person } from '../types/index';

interface PersonProps {
  person: Person;
}

const PersonView = ({ person }: PersonProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div className="card">
      {isLoaded && <img src={person.photo} alt={`doodle of ${person.name}`} />}
      <div className="card-text-cont">
        <p className="name">{person.name}</p>
        <p className="subtitle2">{person.job_title}</p>
        <p className="bio">{person.bio}</p>
      </div>
    </div>
  );
};

export default PersonView;
