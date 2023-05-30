import * as React from 'react';
import { PeopleView } from '../components/People';
// A JSON object with all content for the page
import data from '../content/index';

/**
 * The classes in this file are provided by Tailwind which is included and can
 * be used to style the project, but is not required. If you would prefer to
 * use CSS to create your own classes, add them to the global stylesheet:
 *
 * ./src/styles/global.css
 * */

const IndexPage = () => {
  // Each type of content
  const { page, people, job_titles } = data;

  return (
    <main className="grid-container">
      <section>
        <div className="team-block">
          <h1 className="h1">Our Team</h1>
          <p className="subtitle">
            Nulla quam felis, enim faucibus proin velit, ornare id pretium.
            Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat
            eu faucibus vivamus eget bibendum cras.
          </p>
        </div>
        <h2 className="h2">Job Title</h2>
      </section>
      <PeopleView people={data.people}></PeopleView>
    </main>
    // <main className={`py-16 lg:py-24 text-gray-900`}>
    //   <div className={`container xl:max-w-screen-lg flex flex-wrap`}>
    //     <div className={`lg:w-1/3 lg:pr-4`}>
    //       {/* Add markup here with the page heading & description */}
    //       <h1>{page.heading}</h1>
    //       <p>{page.description}</p>
    //       {/* Add buttons that filter people by the selected job title */}
    //     </div>
    //     <div className={`lg:w-2/3 lg:pl-4`}>{/* Add people here */}</div>
    //   </div>
    // </main>
  );
};

export default IndexPage;
