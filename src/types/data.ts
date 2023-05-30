import { Page } from './page';
import { JobTitles } from './jobTitles';
import { People } from './people';

export interface Data {
  page: Page;
  job_titles: JobTitles;
  people: People;
}
