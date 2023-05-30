import classNames from 'classnames';
import React, { useState } from 'react';
import { JobTitles, JobTitleOptions } from '../types';

interface DataFilterProps {
  titles: JobTitles;
}

export const DataFilter = ({ titles }: DataFilterProps) => {
  const [activeFilter, setActiveFilter] = useState<JobTitleOptions | 'All'>(
    'All'
  );

  const handleClick = (filter: JobTitleOptions | 'All') => {
    setActiveFilter(filter);
  };

  const createButtons = (titles: JobTitles) => {
    return (
      <div role="radiogroup" className="button-cont">
        <button
          className={classNames('button', { chosen: activeFilter === 'All' })}
          key="filter-all"
          aria-checked={activeFilter === 'All'}
          onClick={() => handleClick('All')}
        >
          All
        </button>
        {titles.map((title) => (
          <button
            className={classNames('button', { chosen: activeFilter === title })}
            role="radio"
            aria-checked={activeFilter === title}
            onClick={() => handleClick(title)}
            key={`filter-${title}`}
          >
            {title}
          </button>
        ))}
      </div>
    );
  };
  return <div>{createButtons(titles)}</div>;
};
