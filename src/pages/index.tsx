import React, { useState } from 'react';
import { DataFilter } from '../components/DataFilter';
import { PeopleView } from '../components/People';
// A JSON object with all content for the page
import data from '../content/index';
import { JobTitleOptions } from '../types';
import { Data } from '../types/data';

const IndexPage = () => {
  // Each type of content
  const { page, people, job_titles } = data as Data;

  const [filteredPeople, setFilteredPeople] = useState(people);

  const handleFilter = (filter: JobTitleOptions | 'All') => {
    const filtered = people.filter(
      (person) => filter === 'All' || person.job_title === filter
    );
    setFilteredPeople(filtered);
  };

  return (
    <main className="grid-container">
      <section>
        <div className="team-block">
          <h1 className="h1">{page.heading}</h1>
          <p className="subtitle">{page.description}</p>
        </div>
        <h2 className="h2">Job Title</h2>
        <DataFilter titles={job_titles} handleFilter={handleFilter} />
      </section>
      <PeopleView people={filteredPeople}></PeopleView>
    </main>
  );
};

export default IndexPage;
