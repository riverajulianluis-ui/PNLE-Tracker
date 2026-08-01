// Week-by-week content for the new weekly view, per subject.
// Structure: subject id -> { weeks: [ { number, topics: [ {id, label, children?} ] } ] }
// A topic with no `children` is checkable on its own.
// A topic WITH `children` is just a group heading — its own checkboxes come from its children,
// and its progress shown is a rollup (e.g. "3/5") of however many children are Mastered.
//
// CHN is fully filled in below as the working example, transcribed from the review schedule.
// The rest are left as `null` for now — the app automatically falls back to the old flat
// topic list for any subject that's still `null`, so nothing breaks in the meantime.

export const WEEKLY_CONTENT = {
  chn: {
    weeks: [
      {
        number: 1,
        topics: [
          { id: 'chn-t1', label: 'Clients of CHN' },
          {
            id: 'chn-t2',
            label: 'COPAR: Principles & Phases',
            children: [
              { id: 'chn-t2-1', label: 'Basic Principles' },
              { id: 'chn-t2-2', label: 'Phases of COPAR' },
            ],
          },
          {
            id: 'chn-t3',
            label: 'DOH Concepts & Functions',
            children: [
              { id: 'chn-t3-1', label: 'DOH Concepts' },
              { id: 'chn-t3-2', label: 'Functions of DOH' },
            ],
          },
        ],
      },
      {
        number: 2,
        topics: [
          {
            id: 'chn-t4',
            label: 'Family Nursing (ADPIE)',
            children: [
              { id: 'chn-t4-1', label: 'Assessment' },
              { id: 'chn-t4-2', label: 'Planning: Goal Setting' },
              { id: 'chn-t4-3', label: 'Planning: Prioritization' },
              { id: 'chn-t4-4', label: 'Planning: Scoring' },
              { id: 'chn-t4-5', label: 'Implementation' },
              { id: 'chn-t4-6', label: 'Evaluation' },
            ],
          },
        ],
      },
      {
        number: 3,
        topics: [
          {
            id: 'chn-t5',
            label: 'Health Promotion & Lifestyle',
            children: [
              { id: 'chn-t5-1', label: 'Diet' },
              { id: 'chn-t5-2', label: 'Exercise' },
              { id: 'chn-t5-3', label: 'Stop Smoking' },
            ],
          },
          {
            id: 'chn-t6',
            label: 'Magna Carta of Public Health Workers',
            children: [{ id: 'chn-t6-1', label: 'People Behind CHN' }],
          },
        ],
      },
      {
        number: 4,
        topics: [
          {
            id: 'chn-t7',
            label: 'Primary Health Care Basics & Pillars',
            children: [
              { id: 'chn-t7-1', label: 'Basics of PHC' },
              { id: 'chn-t7-2', label: 'Pillars of PHC' },
              { id: 'chn-t7-3', label: 'Characteristics of PHC' },
              { id: 'chn-t7-4', label: 'Elements of PHC' },
            ],
          },
          { id: 'chn-t8', label: 'Sentrong Sigla Program' },
        ],
      },
      {
        number: 5,
        topics: [
          {
            id: 'chn-t9',
            label: 'Health Education & Prevention Levels',
            children: [
              { id: 'chn-t9-1', label: 'Competency-Based Teaching' },
              { id: 'chn-t9-2', label: 'Three Levels of Prevention' },
            ],
          },
          {
            id: 'chn-t10',
            label: 'Locally Endemic Diseases & Epidemiology',
            children: [{ id: 'chn-t10-1', label: 'Epidemiology' }],
          },
        ],
      },
      { number: 6, reviewWeek: true },
      {
        number: 7,
        topics: [
          {
            id: 'chn-t11',
            label: 'FHSIS & Vital Statistics',
            children: [
              { id: 'chn-t11-1', label: 'FHSIS' },
              { id: 'chn-t11-2', label: 'Common Vital Statistics' },
              { id: 'chn-t11-3', label: 'Incidence vs Prevalence Rates' },
              { id: 'chn-t11-4', label: "Swaroop's Sex Ratio" },
              { id: 'chn-t11-5', label: 'Vital Statistics Basic Concepts' },
            ],
          },
          { id: 'chn-t12', label: 'Population Pyramid & Demography' },
        ],
      },
      {
        number: 8,
        topics: [
          {
            id: 'chn-t13',
            label: 'Expanded Program on Immunization',
            children: [
              { id: 'chn-t13-1', label: 'Chikiting Ligtas' },
              { id: 'chn-t13-2', label: 'Cold Chain & Logistics Management' },
              { id: 'chn-t13-3', label: 'Elements of Immunization & Laws' },
              { id: 'chn-t13-4', label: 'Principles & Nursing Responsibilities' },
              { id: 'chn-t13-5', label: 'BCG' },
              { id: 'chn-t13-6', label: 'Other Vaccines' },
              { id: 'chn-t13-7', label: 'Pentavalent Vaccines' },
              { id: 'chn-t13-8', label: 'Target Setting' },
              { id: 'chn-t13-9', label: 'Vaccine Table' },
            ],
          },
        ],
      },
      {
        number: 9,
        topics: [
          {
            id: 'chn-t14',
            label: 'Maternal & Child Health (MCN)',
            children: [
              { id: 'chn-t14-1', label: 'Active Management of Third Stage of Labor' },
              { id: 'chn-t14-2', label: 'EINC' },
              { id: 'chn-t14-3', label: 'BEmOC & CEmOC' },
              { id: 'chn-t14-4', label: 'NBS' },
              { id: 'chn-t14-5', label: 'Reproductive Health' },
              { id: 'chn-t14-6', label: 'TT' },
              { id: 'chn-t14-7', label: 'VAWC' },
            ],
          },
          {
            id: 'chn-t15',
            label: 'Essential Drugs & Herbal Medicine',
            children: [{ id: 'chn-t15-1', label: 'Herbal Medicine' }],
          },
        ],
      },
      {
        number: 10,
        topics: [
          {
            id: 'chn-t16',
            label: 'Nutrition & Food Fortification',
            children: [
              { id: 'chn-t16-1', label: 'Food Fortification Program' },
              { id: 'chn-t16-2', label: 'Malnutrition' },
            ],
          },
          {
            id: 'chn-t17',
            label: 'Sanitation & Environmental Health',
            children: [
              { id: 'chn-t17-1', label: 'Approved Types of Water Supply Facilities' },
              { id: 'chn-t17-2', label: 'Color & Type of Waste' },
              { id: 'chn-t17-3', label: 'Food Sanitation' },
              { id: 'chn-t17-4', label: 'Health & Sanitation Laws' },
              { id: 'chn-t17-5', label: 'Toilet Facility' },
              { id: 'chn-t17-6', label: 'Emergency Services & NCD (Treatment of CD)' },
            ],
          },
          { id: 'chn-t18', label: 'Mental Health Program' },
        ],
      },
    ],
  },

  // Ask Claude to fill these in next, a couple at a time:
  cd: null,
  ob: null,
  peds: null,
  ms1: null,
  ms2: null,
  ms3: null,
  funda: null,
  palmr: null,
  psych: null,
};
