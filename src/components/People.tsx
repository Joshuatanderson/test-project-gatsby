import React from 'react';
import { People } from '../types';
import Person from './Person';

interface PeopleProps {
  people: People;
}

export const PeopleView = ({ people }: PeopleProps) => {
  return (
    <section className="people-cont">
      {people.map((person, i) => (
        <Person person={person} key={`person-${i}`} />
      ))}
    </section>
  );
};
