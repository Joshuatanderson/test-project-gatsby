import React from 'react';
import { JobTitles } from '../types';

interface DataFilterProps {
  titles: JobTitles;
}

export const DataFilter = ({ titles }: DataFilterProps) => {
  const createButtons = (titles: JobTitles) => {
    return (
      <div role="radiogroup">
        {titles.map((title) => (
          <button>{title}</button>
        ))}
      </div>
    );
  };
  return <div>{createButtons(titles)}</div>;
};
