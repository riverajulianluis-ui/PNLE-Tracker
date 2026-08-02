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

  cd: {
    weeks: [
      {
        number: 1,
        topics: [
          {
            id: 'cd-t1',
            label: 'Basic Concepts in Communicable Disease Nursing',
            children: [
              { id: 'cd-t1-1', label: 'Introduction to Communicable Disease' },
              { id: 'cd-t1-2', label: 'Stages of Infection' },
              { id: 'cd-t1-3', label: 'Immunity' },
              { id: 'cd-t1-4', label: 'Aseptic Technique' },
              { id: 'cd-t1-5', label: 'Chain of Infection' },
              { id: 'cd-t1-6', label: 'Infection Control: Standard & Transmission-Based Precautions' },
            ],
          },
        ],
      },
      {
        number: 2,
        topics: [
          {
            id: 'cd-t2',
            label: 'Tuberculosis',
            children: [
              { id: 'cd-t2-1', label: 'Causative Agent, Mode of Transmission & Signs/Symptoms' },
              { id: 'cd-t2-2', label: 'Diagnostic Tests' },
              { id: 'cd-t2-3', label: 'Management of TB' },
              { id: 'cd-t2-4', label: 'Categorization & Treatment of TB' },
            ],
          },
        ],
      },
      {
        number: 3,
        topics: [
          {
            id: 'cd-t3',
            label: 'Leprosy',
            children: [
              { id: 'cd-t3-1', label: 'Causative Agent, Mode of Transmission & Affected Organs' },
              { id: 'cd-t3-2', label: 'Signs & Symptoms' },
              { id: 'cd-t3-3', label: 'Management of Leprosy' },
              { id: 'cd-t3-4', label: 'Leprosy Classification' },
            ],
          },
        ],
      },
      {
        number: 4,
        topics: [
          {
            id: 'cd-t4',
            label: 'Integumentary-Related Diseases',
            children: [
              { id: 'cd-t4-1', label: 'Measles' },
              { id: 'cd-t4-2', label: 'German Measles (Rubella)' },
              { id: 'cd-t4-3', label: 'Chicken Pox (Varicella)' },
              { id: 'cd-t4-4', label: 'Herpes Zoster' },
              { id: 'cd-t4-5', label: 'Management of Measles, German Measles & Varicella' },
            ],
          },
        ],
      },
      {
        number: 5,
        topics: [
          {
            id: 'cd-t5',
            label: 'Dengue',
            children: [
              { id: 'cd-t5-1', label: 'Causative Agent & Mode of Transmission' },
              { id: 'cd-t5-2', label: 'Signs & Symptoms' },
              { id: 'cd-t5-3', label: 'Diagnostics' },
              { id: 'cd-t5-4', label: 'Management' },
            ],
          },
        ],
      },
      { number: 6, reviewWeek: true },
      {
        number: 7,
        topics: [
          {
            id: 'cd-t6',
            label: 'Malaria',
            children: [
              { id: 'cd-t6-1', label: 'Causative Agent & Mode of Transmission' },
              { id: 'cd-t6-2', label: 'Signs & Symptoms' },
              { id: 'cd-t6-3', label: 'Diagnosis & Management' },
            ],
          },
          {
            id: 'cd-t7',
            label: 'Filariasis',
            children: [
              { id: 'cd-t7-1', label: 'Causative Agent & Mode of Transmission' },
              { id: 'cd-t7-2', label: 'Signs & Symptoms' },
              { id: 'cd-t7-3', label: 'Diagnosis & Management' },
            ],
          },
          { id: 'cd-t8', label: '4S Prevention Strategy' },
        ],
      },
      {
        number: 8,
        topics: [
          { id: 'cd-t9', label: 'Tetanus' },
          { id: 'cd-t10', label: 'Poliomyelitis' },
          { id: 'cd-t11', label: 'Rabies: Basics' },
        ],
      },
      {
        number: 9,
        topics: [
          { id: 'cd-t12', label: 'Rabies: Signs/Symptoms, Diagnosis, Treatment Categories & Management' },
          { id: 'cd-t13', label: 'Laws Concerning Communicable Disease' },
        ],
      },
      {
        number: 10,
        topics: [
          {
            id: 'cd-t14',
            label: 'Common Infectious Diseases I',
            children: [
              { id: 'cd-t14-1', label: 'Bacterial Meningitis' },
              { id: 'cd-t14-2', label: 'Cholera' },
              { id: 'cd-t14-3', label: 'Dengue Hemorrhagic Fever' },
              { id: 'cd-t14-4', label: 'Diphtheria' },
              { id: 'cd-t14-5', label: 'Filariasis' },
              { id: 'cd-t14-6', label: 'Leptospirosis' },
              { id: 'cd-t14-7', label: 'Malaria' },
            ],
          },
        ],
      },
      {
        number: 11,
        topics: [
          {
            id: 'cd-t15',
            label: 'Common Infectious Diseases II',
            children: [
              { id: 'cd-t15-1', label: 'Measles' },
              { id: 'cd-t15-2', label: 'Poliomyelitis' },
              { id: 'cd-t15-3', label: 'Schistosomiasis' },
              { id: 'cd-t15-4', label: 'Tetanus' },
              { id: 'cd-t15-5', label: 'Tuberculosis' },
              { id: 'cd-t15-6', label: 'Typhoid Fever' },
            ],
          },
          { id: 'cd-t16', label: 'Pathognomonic Signs' },
        ],
      },
    ],
  },

  ob: {
    weeks: [
      {
        number: 1,
        topics: [
          {
            id: 'ob-t1',
            label: 'Common Complications of Pregnancy I',
            children: [
              { id: 'ob-t1-1', label: 'Abortion' },
              { id: 'ob-t1-2', label: 'Hydatidiform Mole' },
              { id: 'ob-t1-3', label: 'Ectopic Pregnancy' },
              { id: 'ob-t1-4', label: 'Incompetent Cervix' },
            ],
          },
        ],
      },
      {
        number: 2,
        topics: [
          {
            id: 'ob-t2',
            label: 'Common Complications of Pregnancy II',
            children: [
              { id: 'ob-t2-1', label: 'Hyperemesis Gravidarum' },
              { id: 'ob-t2-2', label: 'Placenta Previa' },
              { id: 'ob-t2-3', label: 'Abruptio Placenta' },
              { id: 'ob-t2-4', label: 'Toxemia (PIH)' },
              { id: 'ob-t2-5', label: 'Gestational Diabetes Mellitus' },
            ],
          },
        ],
      },
      {
        number: 3,
        topics: [
          {
            id: 'ob-t3',
            label: 'Common Complications of Pregnancy III',
            children: [
              { id: 'ob-t3-1', label: 'Hemolytic Disease of the Newborn' },
              { id: 'ob-t3-2', label: 'Premature Rupture of Membranes' },
              { id: 'ob-t3-3', label: 'Cord Prolapse' },
              { id: 'ob-t3-4', label: 'Shoulder Dystocia' },
            ],
          },
        ],
      },
      {
        number: 4,
        topics: [
          {
            id: 'ob-t4',
            label: 'Normal Labor & Delivery',
            children: [
              { id: 'ob-t4-1', label: 'Cardinal Signs of Labor' },
              { id: 'ob-t4-2', label: 'Components of Labor' },
              { id: 'ob-t4-3', label: 'Stages of Labor (1-4)' },
              { id: 'ob-t4-4', label: 'True vs False Labor Contractions' },
            ],
          },
        ],
      },
      { number: 5, reviewWeek: true },
      {
        number: 6,
        topics: [
          {
            id: 'ob-t5',
            label: 'Normal Pregnancy',
            children: [
              { id: 'ob-t5-1', label: 'Trimesters' },
              { id: 'ob-t5-2', label: 'Signs & Symptoms of Pregnancy' },
              { id: 'ob-t5-3', label: 'Adaptations of Pregnancy: Cardiovascular, Endocrine, GI & Other Changes' },
            ],
          },
        ],
      },
      {
        number: 7,
        topics: [
          {
            id: 'ob-t6',
            label: 'Fetal Growth & Antepartum Care',
            children: [
              { id: 'ob-t6-1', label: 'Fetal Growth & Development' },
              { id: 'ob-t6-2', label: 'Antepartum Care: Fetal Well-Being' },
              { id: 'ob-t6-3', label: 'Antepartum Care: Maternal Well-Being' },
            ],
          },
          {
            id: 'ob-t7',
            label: 'Discomforts, Health Teaching & Postpartum Changes',
            children: [
              { id: 'ob-t7-1', label: 'Discomforts & Risk Factors of Pregnancy' },
              { id: 'ob-t7-2', label: 'Health Teachings' },
              { id: 'ob-t7-3', label: 'Postpartum Changes' },
            ],
          },
        ],
      },
      {
        number: 8,
        topics: [
          {
            id: 'ob-t8',
            label: 'Essential Intrapartum & Newborn Care (EINC)',
            children: [
              { id: 'ob-t8-1', label: 'EINC Basics' },
              { id: 'ob-t8-2', label: 'Immediate Drying & Skin-to-Skin Contact' },
              { id: 'ob-t8-3', label: 'Proper Cord Clamping & Cutting' },
              { id: 'ob-t8-4', label: 'Non-Separation & Breastfeeding Initiation' },
              { id: 'ob-t8-5', label: 'Other EINC Practices' },
            ],
          },
          { id: 'ob-t9', label: 'Hormones in the Menstrual Cycle' },
        ],
      },
    ],
  },

  peds: {
    weeks: [
      {
        number: 1,
        topics: [
          {
            id: 'peds-t1',
            label: 'Growth & Development by Stage',
            children: [
              { id: 'peds-t1-1', label: 'Infant' },
              { id: 'peds-t1-2', label: 'Toddler' },
              { id: 'peds-t1-3', label: 'Pre-Schooler' },
              { id: 'peds-t1-4', label: 'School Age' },
              { id: 'peds-t1-5', label: 'Adolescent' },
              { id: 'peds-t1-6', label: 'Stages of Separation' },
            ],
          },
        ],
      },
      {
        number: 2,
        topics: [
          { id: 'peds-t2', label: 'Developmental Milestones' },
          { id: 'peds-t3', label: "Kohlberg's Stages of Moral Development" },
          {
            id: 'peds-t4',
            label: 'Other Developmental Milestones',
            children: [
              { id: 'peds-t4-1', label: 'Fine Motor' },
              { id: 'peds-t4-2', label: 'Gross Motor' },
              { id: 'peds-t4-3', label: 'Vocabulary' },
            ],
          },
        ],
      },
      {
        number: 3,
        topics: [
          {
            id: 'peds-t5',
            label: 'Cancers of the Child',
            children: [
              { id: 'peds-t5-1', label: 'Leukemia' },
              { id: 'peds-t5-2', label: "Hodgkin's Disease" },
              { id: 'peds-t5-3', label: "Nephroblastoma (Wilms' Tumor)" },
              { id: 'peds-t5-4', label: 'Neuroblastoma' },
              { id: 'peds-t5-5', label: 'Osteosarcoma' },
              { id: 'peds-t5-6', label: 'Brain Tumor' },
            ],
          },
        ],
      },
      {
        number: 4,
        topics: [
          {
            id: 'peds-t6',
            label: 'Cardiovascular Disorders',
            children: [
              { id: 'peds-t6-1', label: 'Patent Ductus Arteriosus' },
              { id: 'peds-t6-2', label: 'Septal Defects (VSD & ASD)' },
              { id: 'peds-t6-3', label: 'Coarctation of the Aorta' },
              { id: 'peds-t6-4', label: 'Tetralogy of Fallot' },
              { id: 'peds-t6-5', label: 'Transposition of the Great Arteries' },
              { id: 'peds-t6-6', label: 'Rheumatic Heart Fever' },
              { id: 'peds-t6-7', label: 'Heart Failure' },
              { id: 'peds-t6-8', label: 'Kawasaki Disease' },
            ],
          },
        ],
      },
      {
        number: 5,
        topics: [
          {
            id: 'peds-t7',
            label: 'GI Disorders',
            children: [
              { id: 'peds-t7-1', label: 'Cleft Lip & Palate' },
              { id: 'peds-t7-2', label: 'GERD' },
              { id: 'peds-t7-3', label: 'Pyloric Stenosis' },
              { id: 'peds-t7-4', label: 'Celiac Disease' },
              { id: 'peds-t7-5', label: "Hirschsprung's Disease" },
              { id: 'peds-t7-6', label: 'Intussusception' },
              { id: 'peds-t7-7', label: 'Colostomy Care' },
            ],
          },
        ],
      },
      { number: 6, reviewWeek: true },
      {
        number: 7,
        topics: [
          {
            id: 'peds-t8',
            label: 'Hematologic Disorders',
            children: [
              { id: 'peds-t8-1', label: "Von Willebrand's Disease" },
              { id: 'peds-t8-2', label: 'Types of Beta-Thalassemia' },
              { id: 'peds-t8-3', label: 'Beta-Thalassemia Major' },
            ],
          },
        ],
      },
      {
        number: 8,
        topics: [
          {
            id: 'peds-t9',
            label: 'Integumentary Disorders',
            children: [
              { id: 'peds-t9-1', label: 'Eczema' },
              { id: 'peds-t9-2', label: 'Impetigo' },
              { id: 'peds-t9-3', label: 'Pediculosis Capitis (Lice)' },
              { id: 'peds-t9-4', label: 'Scabies' },
            ],
          },
          {
            id: 'peds-t10',
            label: 'Musculoskeletal Disorders',
            children: [
              { id: 'peds-t10-1', label: 'Congenital Hip Dysplasia' },
              { id: 'peds-t10-2', label: 'Talipes' },
            ],
          },
          {
            id: 'peds-t11',
            label: 'Respiratory Disorders',
            children: [
              { id: 'peds-t11-1', label: 'Croup' },
              { id: 'peds-t11-2', label: 'Cystic Fibrosis' },
              { id: 'peds-t11-3', label: 'Asthma' },
            ],
          },
        ],
      },
      {
        number: 9,
        topics: [
          {
            id: 'peds-t12',
            label: 'Neurologic Disorders',
            children: [
              { id: 'peds-t12-1', label: 'Increased ICP & Head Trauma' },
              { id: 'peds-t12-2', label: 'Seizure Disorder' },
              { id: 'peds-t12-3', label: 'Bacterial Meningitis' },
              { id: 'peds-t12-4', label: 'Cerebral Palsy' },
              { id: 'peds-t12-5', label: 'Hydrocephalus' },
              { id: 'peds-t12-6', label: "Reye's Syndrome" },
              { id: 'peds-t12-7', label: 'Spina Bifida' },
            ],
          },
        ],
      },
      {
        number: 10,
        topics: [
          {
            id: 'peds-t13',
            label: 'Renal Disorders',
            children: [
              { id: 'peds-t13-1', label: 'Urinary Tract Infection' },
              { id: 'peds-t13-2', label: 'Glomerulonephritis' },
              { id: 'peds-t13-3', label: 'Nephrotic Syndrome' },
              { id: 'peds-t13-4', label: 'Hemolytic Uremic Syndrome' },
              { id: 'peds-t13-5', label: 'Enuresis' },
              { id: 'peds-t13-6', label: 'Cryptorchidism' },
              { id: 'peds-t13-7', label: 'Epispadias & Hypospadias' },
              { id: 'peds-t13-8', label: 'Bladder Exstrophy' },
              { id: 'peds-t13-9', label: 'Vesicoureteral Reflux (VUR)' },
            ],
          },
        ],
      },
    ],
  },

  ms1: {
    weeks: [
      {
        number: 1,
        topics: [
          {
            id: 'ms1-t1',
            label: 'Cancer: Basic Concepts & Surgery',
            children: [
              { id: 'ms1-t1-1', label: 'Basic Concepts in Cancer' },
              { id: 'ms1-t1-2', label: 'Warning Signs of Cancer' },
              { id: 'ms1-t1-3', label: 'Staging & Grading' },
              { id: 'ms1-t1-4', label: 'Cancer Prevention' },
              { id: 'ms1-t1-5', label: 'Treatment Modalities: Surgery' },
            ],
          },
        ],
      },
      {
        number: 2,
        topics: [
          {
            id: 'ms1-t2',
            label: 'Radiation Therapy',
            children: [
              { id: 'ms1-t2-1', label: 'Radiation Therapy Basics' },
              { id: 'ms1-t2-2', label: 'Internal Radiation (Brachytherapy)' },
              { id: 'ms1-t2-3', label: 'External Radiation (Teletherapy)' },
            ],
          },
        ],
      },
      {
        number: 3,
        topics: [
          {
            id: 'ms1-t3',
            label: 'Antineoplastics & Chemotherapy',
            children: [
              { id: 'ms1-t3-1', label: 'Cell-Cycle Nonspecific Agents (Alkylating & Antitumor)' },
              { id: 'ms1-t3-2', label: 'Cell-Cycle Specific Agents (Antimetabolites & Plant Alkaloids)' },
              { id: 'ms1-t3-3', label: 'Chemotherapy Nursing Care' },
              { id: 'ms1-t3-4', label: 'Identifying Drug Classes' },
            ],
          },
        ],
      },
      {
        number: 4,
        topics: [
          {
            id: 'ms1-t4',
            label: 'Oncologic Emergencies',
            children: [
              { id: 'ms1-t4-1', label: 'Tumor Lysis Syndrome' },
              { id: 'ms1-t4-2', label: 'Superior Vena Cava Syndrome' },
              { id: 'ms1-t4-3', label: 'Sepsis & DIC' },
              { id: 'ms1-t4-4', label: 'SIADH' },
              { id: 'ms1-t4-5', label: 'Spinal Cord Compression' },
              { id: 'ms1-t4-6', label: 'Hypercalcemia' },
            ],
          },
        ],
      },
      {
        number: 5,
        topics: [
          {
            id: 'ms1-t5',
            label: 'Cardiovascular',
            children: [
              { id: 'ms1-t5-1', label: 'Coronary Arteries' },
              { id: 'ms1-t5-2', label: 'ECG Leads' },
              { id: 'ms1-t5-3', label: 'Heart Sounds' },
              { id: 'ms1-t5-4', label: 'Myocardial Infarction' },
              { id: 'ms1-t5-5', label: 'Pericardial Fluid' },
              { id: 'ms1-t5-6', label: 'Peripheral Vascular Diseases' },
              { id: 'ms1-t5-7', label: 'WHO Blood Pressure Categories' },
            ],
          },
        ],
      },
      { number: 6, reviewWeek: true },
      {
        number: 7,
        topics: [
          {
            id: 'ms1-t6',
            label: 'Emergency & Disaster Nursing: Triage',
            children: [
              { id: 'ms1-t6-1', label: 'Issues in ER Nursing' },
              { id: 'ms1-t6-2', label: 'Triage Systems (CTAS, ESI, PENA7, Three-Level Triage)' },
            ],
          },
        ],
      },
      {
        number: 8,
        topics: [
          {
            id: 'ms1-t7',
            label: 'Primary & Secondary Survey',
            children: [
              { id: 'ms1-t7-1', label: 'Primary vs Secondary Survey' },
              { id: 'ms1-t7-2', label: 'Airway' },
              { id: 'ms1-t7-3', label: 'Breathing' },
              { id: 'ms1-t7-4', label: 'Circulation & Shock Management' },
              { id: 'ms1-t7-5', label: 'Disability' },
              { id: 'ms1-t7-6', label: 'Exposure' },
            ],
          },
        ],
      },
      {
        number: 9,
        topics: [
          {
            id: 'ms1-t8',
            label: 'Burns',
            children: [
              { id: 'ms1-t8-1', label: 'Causes of Burns' },
              { id: 'ms1-t8-2', label: 'Degrees of Burns' },
              { id: 'ms1-t8-3', label: 'Stages of Burns' },
              { id: 'ms1-t8-4', label: 'First Aid (RACE & PASS)' },
              { id: 'ms1-t8-5', label: 'Management of Burns (Rule of Nines & Care)' },
            ],
          },
        ],
      },
      {
        number: 10,
        topics: [
          {
            id: 'ms1-t9',
            label: 'Wound Care & Burn Management',
            children: [
              { id: 'ms1-t9-1', label: 'Wound Care Methods' },
              { id: 'ms1-t9-2', label: 'Hydrotherapy & Debridement' },
              { id: 'ms1-t9-3', label: 'Skin Grafting' },
              { id: 'ms1-t9-4', label: 'Antimicrobials for Burns' },
            ],
          },
          {
            id: 'ms1-t10',
            label: 'Disaster Nursing Concepts',
            children: [
              { id: 'ms1-t10-1', label: 'Basic Concepts' },
              { id: 'ms1-t10-2', label: 'Disaster Management Continuum' },
              { id: 'ms1-t10-3', label: 'NATO Triage System' },
              { id: 'ms1-t10-4', label: 'NDRRMC' },
            ],
          },
        ],
      },
    ],
  },

  ms2: {
    weeks: [
      {
        number: 1,
        topics: [
          {
            id: 'ms2-t1',
            label: 'Endocrine: ADH & Adrenal Disorders',
            children: [
              { id: 'ms2-t1-1', label: 'ADH Basics & Fluid Balance' },
              { id: 'ms2-t1-2', label: 'Diabetes Insipidus' },
              { id: 'ms2-t1-3', label: 'SIADH' },
              { id: 'ms2-t1-4', label: "Addison's Disease" },
              { id: 'ms2-t1-5', label: 'Adrenal Gland & Hormones' },
            ],
          },
        ],
      },
      {
        number: 2,
        topics: [
          {
            id: 'ms2-t2',
            label: 'Endocrine: Adrenal, Pituitary & Parathyroid',
            children: [
              { id: 'ms2-t2-1', label: "Conn's Syndrome" },
              { id: 'ms2-t2-2', label: "Cushing's Syndrome" },
              { id: 'ms2-t2-3', label: 'Pituitary Gland Hormones' },
              { id: 'ms2-t2-4', label: 'Hyperparathyroidism' },
              { id: 'ms2-t2-5', label: 'Hypoparathyroidism' },
              { id: 'ms2-t2-6', label: 'PTH & Hormones' },
            ],
          },
        ],
      },
      {
        number: 3,
        topics: [
          {
            id: 'ms2-t3',
            label: 'Diabetes Mellitus & Thyroid Disorders',
            children: [
              { id: 'ms2-t3-1', label: 'Diabetes Mellitus (DKA vs HHNS)' },
              { id: 'ms2-t3-2', label: 'Hyperthyroidism' },
              { id: 'ms2-t3-3', label: 'Hypothyroidism' },
              { id: 'ms2-t3-4', label: 'Thyroid Gland & Hormones' },
            ],
          },
        ],
      },
      {
        number: 4,
        topics: [
          {
            id: 'ms2-t4',
            label: 'Fluids, Electrolytes & Acid-Base Balance',
            children: [
              { id: 'ms2-t4-1', label: 'Acid-Base Balance (Acidosis vs Alkalosis)' },
              { id: 'ms2-t4-2', label: 'Calcium Imbalance' },
              { id: 'ms2-t4-3', label: 'IV Fluids' },
              { id: 'ms2-t4-4', label: 'Magnesium Imbalance' },
              { id: 'ms2-t4-5', label: 'Phosphorus Imbalance' },
              { id: 'ms2-t4-6', label: 'Potassium Imbalance' },
              { id: 'ms2-t4-7', label: 'Sodium Imbalance' },
            ],
          },
        ],
      },
      {
        number: 5,
        topics: [
          {
            id: 'ms2-t5',
            label: 'GI & Hepatobiliary Disorders I',
            children: [
              { id: 'ms2-t5-1', label: 'GERD' },
              { id: 'ms2-t5-2', label: 'Peptic Ulcer Disease (Dumping Syndrome, Gastric vs Duodenal)' },
              { id: 'ms2-t5-3', label: 'PUD Risk Factors & Management' },
              { id: 'ms2-t5-4', label: 'Surgical Procedures for PUD' },
              { id: 'ms2-t5-5', label: 'Cholecystitis' },
            ],
          },
        ],
      },
      { number: 6, reviewWeek: true },
      {
        number: 7,
        topics: [
          {
            id: 'ms2-t6',
            label: 'GI & Hepatobiliary Disorders II',
            children: [
              { id: 'ms2-t6-1', label: 'Diverticular Disease' },
              { id: 'ms2-t6-2', label: 'Acute Phase Management' },
              { id: 'ms2-t6-3', label: 'Appendicitis' },
              { id: 'ms2-t6-4', label: 'Liver Cirrhosis' },
              { id: 'ms2-t6-5', label: 'Acute Pancreatitis' },
              { id: 'ms2-t6-6', label: 'Chronic Pancreatitis' },
            ],
          },
        ],
      },
      {
        number: 8,
        topics: [
          {
            id: 'ms2-t7',
            label: 'Hematology',
            children: [
              { id: 'ms2-t7-1', label: 'Myeloid vs Lymphoid Lineage' },
              { id: 'ms2-t7-2', label: 'Iron-Deficiency Anemia' },
              { id: 'ms2-t7-3', label: 'Aplastic Anemia' },
              { id: 'ms2-t7-4', label: 'Bleeding Precautions' },
              { id: 'ms2-t7-5', label: 'Infection Precautions' },
              { id: 'ms2-t7-6', label: 'Megaloblastic Anemia' },
              { id: 'ms2-t7-7', label: 'Sickle Cell Anemia' },
              { id: 'ms2-t7-8', label: 'Polycythemia Vera' },
              { id: 'ms2-t7-9', label: 'Hemophilia' },
            ],
          },
        ],
      },
      {
        number: 9,
        topics: [
          {
            id: 'ms2-t8',
            label: 'Immunology',
            children: [
              { id: 'ms2-t8-1', label: 'The Immune System' },
              { id: 'ms2-t8-2', label: 'Anaphylaxis' },
              { id: 'ms2-t8-3', label: 'Rheumatoid Arthritis vs Osteoarthritis' },
              { id: 'ms2-t8-4', label: "Sjögren's Syndrome" },
              { id: 'ms2-t8-5', label: 'Scleroderma' },
              { id: 'ms2-t8-6', label: 'Systemic Lupus Erythematosus (SLE)' },
              { id: 'ms2-t8-7', label: 'Multiple Myeloma' },
              { id: 'ms2-t8-8', label: 'HIV/AIDS' },
            ],
          },
        ],
      },
      {
        number: 10,
        topics: [
          {
            id: 'ms2-t9',
            label: 'Musculoskeletal Disorders I',
            children: [
              { id: 'ms2-t9-1', label: 'The MSK System' },
              { id: 'ms2-t9-2', label: 'MSK Interventions' },
              { id: 'ms2-t9-3', label: 'Trauma' },
              { id: 'ms2-t9-4', label: 'Hip Replacement' },
              { id: 'ms2-t9-5', label: 'Limb Amputation' },
              { id: 'ms2-t9-6', label: 'Arthritis' },
              { id: 'ms2-t9-7', label: 'Osteomyelitis' },
              { id: 'ms2-t9-8', label: 'Herniated Nucleus Pulposus' },
              { id: 'ms2-t9-9', label: 'Spinal Fusion' },
            ],
          },
        ],
      },
      {
        number: 11,
        topics: [
          {
            id: 'ms2-t10',
            label: 'Musculoskeletal Disorders II',
            children: [
              { id: 'ms2-t10-1', label: 'Carpal Tunnel Syndrome' },
              { id: 'ms2-t10-2', label: "Dupuytren's Contracture" },
              { id: 'ms2-t10-3', label: 'Scoliosis & Other Spinal Deformities' },
              { id: 'ms2-t10-4', label: "Paget's Disease" },
              { id: 'ms2-t10-5', label: 'Fibromyalgia' },
              { id: 'ms2-t10-6', label: 'Osteoporosis & Osteomalacia' },
              { id: 'ms2-t10-7', label: 'Muscular Dystrophy' },
              { id: 'ms2-t10-8', label: "Legg-Calvé-Perthes Disease" },
              { id: 'ms2-t10-9', label: 'De Quervain Syndrome' },
            ],
          },
        ],
      },
    ],
  },

  ms3: {
    weeks: [
      {
        number: 1,
        topics: [
          {
            id: 'ms3-t1',
            label: 'Neuro: CNS, PNS & Cerebrovascular Disorders',
            children: [
              { id: 'ms3-t1-1', label: 'Central Nervous System' },
              { id: 'ms3-t1-2', label: 'Peripheral Nervous System' },
              { id: 'ms3-t1-3', label: 'Cranial Nerves & Diseases' },
              { id: 'ms3-t1-4', label: 'Increased Intracranial Pressure' },
              { id: 'ms3-t1-5', label: 'Cerebrovascular Accident (Heparin/Warfarin)' },
              { id: 'ms3-t1-6', label: "Parkinson's Disease" },
              { id: 'ms3-t1-7', label: 'Guillain-Barré Syndrome' },
            ],
          },
        ],
      },
      {
        number: 2,
        topics: [
          {
            id: 'ms3-t2',
            label: 'Neuro: Autoimmune & Spinal Cord Disorders',
            children: [
              { id: 'ms3-t2-1', label: 'Multiple Sclerosis' },
              { id: 'ms3-t2-2', label: 'Myasthenia Gravis' },
              { id: 'ms3-t2-3', label: 'Autonomic Dysreflexia' },
              { id: 'ms3-t2-4', label: "Alzheimer's Disease" },
              { id: 'ms3-t2-5', label: 'Seizure Disorders' },
              { id: 'ms3-t2-6', label: 'Glasgow Coma Scale Scoring' },
              { id: 'ms3-t2-7', label: 'Types of Spinal Cord Injuries (Anterior & Posterior Cord Syndrome)' },
            ],
          },
        ],
      },
      {
        number: 3,
        topics: [
          {
            id: 'ms3-t3',
            label: 'Perioperative Nursing I',
            children: [
              { id: 'ms3-t3-1', label: 'Classification of Surgery' },
              { id: 'ms3-t3-2', label: 'Instrument Decontamination & Sterilization' },
              { id: 'ms3-t3-3', label: 'Perioperative Nursing & Phases' },
            ],
          },
        ],
      },
      {
        number: 4,
        topics: [
          {
            id: 'ms3-t4',
            label: 'Perioperative Nursing II',
            children: [
              { id: 'ms3-t4-1', label: 'Phases of Operation' },
              { id: 'ms3-t4-2', label: 'Principles of Asepsis & Sterility' },
              { id: 'ms3-t4-3', label: 'Stages of Anesthesia' },
              { id: 'ms3-t4-4', label: 'Zones of the OR' },
            ],
          },
        ],
      },
      {
        number: 5,
        topics: [
          {
            id: 'ms3-t5',
            label: 'Renal & Urinary I',
            children: [
              { id: 'ms3-t5-1', label: 'Acute Kidney Injury' },
              { id: 'ms3-t5-2', label: 'Chronic Kidney Disease' },
              { id: 'ms3-t5-3', label: 'Hemodialysis' },
              { id: 'ms3-t5-4', label: 'Access for Hemodialysis' },
            ],
          },
        ],
      },
      { number: 6, reviewWeek: true },
      {
        number: 7,
        topics: [
          {
            id: 'ms3-t6',
            label: 'Renal & Urinary II: Dialysis & Transplant',
            children: [
              { id: 'ms3-t6-1', label: 'Peritoneal Dialysis' },
              { id: 'ms3-t6-2', label: 'Kidney Transplant' },
            ],
          },
          {
            id: 'ms3-t7',
            label: 'Urinary Calculi',
            children: [
              { id: 'ms3-t7-1', label: 'Basics' },
              { id: 'ms3-t7-2', label: 'Clinical Manifestations' },
              { id: 'ms3-t7-3', label: 'Types of Urinary Calculi' },
              { id: 'ms3-t7-4', label: 'Adjusting Urine pH' },
              { id: 'ms3-t7-5', label: 'Management' },
            ],
          },
        ],
      },
      {
        number: 8,
        topics: [
          {
            id: 'ms3-t8',
            label: 'Bladder Cancer',
            children: [
              { id: 'ms3-t8-1', label: 'Basics' },
              { id: 'ms3-t8-2', label: 'Surgery' },
              { id: 'ms3-t8-3', label: 'Chemotherapy' },
            ],
          },
          {
            id: 'ms3-t9',
            label: 'BPH & Prostate Disorders',
            children: [
              { id: 'ms3-t9-1', label: 'Benign Prostatic Hyperplasia (BPH)' },
              { id: 'ms3-t9-2', label: 'Management of BPH' },
              { id: 'ms3-t9-3', label: 'Prostatectomy' },
              { id: 'ms3-t9-4', label: 'Prostate Cancer' },
            ],
          },
          {
            id: 'ms3-t10',
            label: 'Toxic Shock Syndrome & Polycystic Kidney Disease',
            children: [
              { id: 'ms3-t10-1', label: 'Toxic Shock Syndrome' },
              { id: 'ms3-t10-2', label: 'Polycystic Kidney Disease' },
            ],
          },
        ],
      },
      {
        number: 9,
        topics: [
          {
            id: 'ms3-t11',
            label: 'Respiratory System Basics',
            children: [
              { id: 'ms3-t11-1', label: 'Upper Respiratory Airway' },
              { id: 'ms3-t11-2', label: 'Lower Respiratory Airway' },
            ],
          },
          {
            id: 'ms3-t12',
            label: 'Upper Respiratory Disorders',
            children: [
              { id: 'ms3-t12-1', label: 'Epistaxis' },
              { id: 'ms3-t12-2', label: 'Sinusitis' },
              { id: 'ms3-t12-3', label: 'Tonsillitis & Adenoiditis' },
              { id: 'ms3-t12-4', label: 'Tonsillectomy & Adenoidectomy' },
            ],
          },
          {
            id: 'ms3-t13',
            label: 'Bronchial Asthma & COPD',
            children: [
              { id: 'ms3-t13-1', label: 'Bronchial Asthma' },
              { id: 'ms3-t13-2', label: 'COPD Overview' },
            ],
          },
        ],
      },
      {
        number: 10,
        topics: [
          {
            id: 'ms3-t14',
            label: 'COPD Types',
            children: [
              { id: 'ms3-t14-1', label: 'Chronic Bronchitis' },
              { id: 'ms3-t14-2', label: 'Emphysema' },
            ],
          },
          {
            id: 'ms3-t15',
            label: 'Respiratory Emergencies',
            children: [
              { id: 'ms3-t15-1', label: 'ARDS' },
              { id: 'ms3-t15-2', label: 'Pneumothorax & Hemothorax' },
              { id: 'ms3-t15-3', label: 'Pleural Effusion' },
              { id: 'ms3-t15-4', label: 'Chest Tube' },
            ],
          },
          {
            id: 'ms3-t16',
            label: 'Ear Disorders',
            children: [
              { id: 'ms3-t16-1', label: 'The Ears & Ear Assessments' },
              { id: 'ms3-t16-2', label: 'Conductive vs Sensorineural Hearing Loss' },
              { id: 'ms3-t16-3', label: 'Otosclerosis' },
              { id: 'ms3-t16-4', label: "Meniere's Disease" },
              { id: 'ms3-t16-5', label: 'Acoustic Neuroma' },
              { id: 'ms3-t16-6', label: 'Care After Ear Surgery' },
            ],
          },
        ],
      },
      {
        number: 11,
        topics: [
          {
            id: 'ms3-t17',
            label: 'Eye Disorders I',
            children: [
              { id: 'ms3-t17-1', label: 'The Eyes & Eye Assessments' },
              { id: 'ms3-t17-2', label: 'Refractive Disorders' },
              { id: 'ms3-t17-3', label: 'Glaucoma' },
              { id: 'ms3-t17-4', label: 'Cataract' },
              { id: 'ms3-t17-5', label: 'Preoperative Care for Eye Surgery' },
              { id: 'ms3-t17-6', label: 'Postoperative Care After Eye Surgery' },
            ],
          },
        ],
      },
      {
        number: 12,
        topics: [
          {
            id: 'ms3-t18',
            label: 'Eye Disorders II',
            children: [
              { id: 'ms3-t18-1', label: 'Retinal Detachment' },
              { id: 'ms3-t18-2', label: 'Macular Degeneration' },
              { id: 'ms3-t18-3', label: 'Tumors of the Eye' },
              { id: 'ms3-t18-4', label: 'Trauma to the Eye' },
              { id: 'ms3-t18-5', label: 'Sympathetic Ophthalmia' },
              { id: 'ms3-t18-6', label: 'Other Eye Disorders' },
              { id: 'ms3-t18-7', label: 'Other Surgical Management of the Eye' },
              { id: 'ms3-t18-8', label: 'Care of the Blind Person' },
            ],
          },
        ],
      },
    ],
  },

  funda: {
    weeks: [
      {
        number: 1,
        topics: [
          {
            id: 'funda-t1',
            label: 'Important Nursing Theorists',
            children: [
              { id: 'funda-t1-1', label: 'Nursing Theorists: Part 1' },
              { id: 'funda-t1-2', label: 'Nursing Theorists: Part 2' },
              { id: 'funda-t1-3', label: "Patricia Benner's Theory" },
            ],
          },
          { id: 'funda-t2', label: 'Nutrition Basics' },
        ],
      },
      {
        number: 2,
        topics: [
          {
            id: 'funda-t3',
            label: 'Oxygenation',
            children: [
              { id: 'funda-t3-1', label: 'Oxygen Therapy' },
              { id: 'funda-t3-2', label: 'Suctioning' },
              { id: 'funda-t3-3', label: 'Tracheostomy Care' },
              { id: 'funda-t3-4', label: 'Incentive Spirometer' },
              { id: 'funda-t3-5', label: 'Chest Physiotherapy' },
            ],
          },
        ],
      },
      {
        number: 3,
        topics: [
          { id: 'funda-t4', label: 'Pain Management' },
          { id: 'funda-t5', label: 'Patient Positioning' },
          { id: 'funda-t6', label: 'Sleep' },
          {
            id: 'funda-t7',
            label: 'Specimen Collection',
            children: [
              { id: 'funda-t7-1', label: 'Urine' },
              { id: 'funda-t7-2', label: 'Stool' },
              { id: 'funda-t7-3', label: 'Sputum' },
            ],
          },
        ],
      },
      {
        number: 4,
        topics: [{ id: 'funda-t8', label: 'Diabetes Mellitus Overview' }],
      },
      {
        number: 5,
        topics: [
          {
            id: 'funda-t9',
            label: 'Theories of Aging',
            children: [
              { id: 'funda-t9-1', label: 'Biologic Theories' },
              { id: 'funda-t9-2', label: 'Psychosocial Theories' },
            ],
          },
          { id: 'funda-t10', label: 'Wound Care Fundamentals' },
        ],
      },
      { number: 6, reviewWeek: true },
    ],
  },

  palmr: {
    weeks: [
      {
        number: 1,
        topics: [
          {
            id: 'palmr-t1',
            label: 'Leadership & Management Final Coaching',
            children: [
              { id: 'palmr-t1-1', label: 'Budget' },
              { id: 'palmr-t1-2', label: 'Communication within the Organization' },
              { id: 'palmr-t1-3', label: 'Conflict Resolution Strategies' },
              { id: 'palmr-t1-4', label: 'Controlling' },
              { id: 'palmr-t1-5', label: 'Delegation' },
              { id: 'palmr-t1-6', label: 'Management Process' },
              { id: 'palmr-t1-7', label: 'Modalities of Care' },
              { id: 'palmr-t1-8', label: 'Problem Solving & Decision Making' },
              { id: 'palmr-t1-9', label: 'Styles of Leadership' },
            ],
          },
        ],
      },
      {
        number: 2,
        topics: [
          {
            id: 'palmr-t2',
            label: 'Professional Adjustment',
            children: [
              { id: 'palmr-t2-1', label: 'Code of Ethics' },
              { id: 'palmr-t2-2', label: 'Bioethical Principles' },
              { id: 'palmr-t2-3', label: "Patient's Autonomy" },
              { id: 'palmr-t2-4', label: 'Informed Consent' },
              { id: 'palmr-t2-5', label: 'Confidentiality, Anonymity & Privacy' },
              { id: 'palmr-t2-6', label: 'Malpractice & Negligence' },
              { id: 'palmr-t2-7', label: 'Doctrines of Negligence' },
              { id: 'palmr-t2-8', label: 'Torts' },
            ],
          },
        ],
      },
      {
        number: 3,
        topics: [
          {
            id: 'palmr-t3',
            label: 'Research A: Foundations',
            children: [
              { id: 'palmr-t3-1', label: 'Theory Generation & Development' },
              { id: 'palmr-t3-2', label: 'Types of Research (Qualitative & Quantitative)' },
              { id: 'palmr-t3-3', label: 'Types of Research: According to Purpose' },
              { id: 'palmr-t3-4', label: 'Variables' },
            ],
          },
        ],
      },
      {
        number: 4,
        topics: [
          {
            id: 'palmr-t4',
            label: 'Research A: Design & Ethics',
            children: [
              { id: 'palmr-t4-1', label: 'Heterogeneity' },
              { id: 'palmr-t4-2', label: 'Reliability, Validity & Trustworthiness' },
              { id: 'palmr-t4-3', label: 'Hypothesis' },
              { id: 'palmr-t4-4', label: 'Errors' },
              { id: 'palmr-t4-5', label: 'Literature Review' },
              { id: 'palmr-t4-6', label: 'Ethical Principles' },
              { id: 'palmr-t4-7', label: 'Research Ethics' },
              { id: 'palmr-t4-8', label: 'Research Design (Time Frame & Types)' },
              { id: 'palmr-t4-9', label: 'Population' },
            ],
          },
        ],
      },
      {
        number: 5,
        topics: [
          {
            id: 'palmr-t5',
            label: 'Sampling & Data Analysis',
            children: [
              { id: 'palmr-t5-1', label: 'Sampling Concepts: Definitions' },
              { id: 'palmr-t5-2', label: 'Non-Probability Sampling' },
              { id: 'palmr-t5-3', label: 'Probability Sampling' },
              { id: 'palmr-t5-4', label: 'Levels of Measurement' },
              { id: 'palmr-t5-5', label: 'Analyzing Data' },
            ],
          },
        ],
      },
      { number: 6, reviewWeek: true },
      {
        number: 7,
        topics: [
          {
            id: 'palmr-t6',
            label: 'Analyzing Data: Statistical Measures',
            children: [
              { id: 'palmr-t6-1', label: 'Central Tendency' },
              { id: 'palmr-t6-2', label: 'Correlation Index Result' },
              { id: 'palmr-t6-3', label: 'Measures of Variability' },
            ],
          },
          {
            id: 'palmr-t7',
            label: 'Research B: Basic Concepts',
            children: [
              { id: 'palmr-t7-1', label: 'Definitions in Research' },
              { id: 'palmr-t7-2', label: 'Importance of Research' },
              { id: 'palmr-t7-3', label: 'Sources of Knowledge' },
            ],
          },
          {
            id: 'palmr-t8',
            label: 'Major Steps of Research Process',
            children: [
              { id: 'palmr-t8-1', label: 'Phases of Research Process' },
              { id: 'palmr-t8-2', label: 'Definitions in Research Process' },
            ],
          },
          {
            id: 'palmr-t9',
            label: 'Research Problem & Data Collection',
            children: [
              { id: 'palmr-t9-1', label: 'Sources of Research Problem' },
              { id: 'palmr-t9-2', label: 'Criteria of a Good Research Problem' },
              { id: 'palmr-t9-3', label: 'Major Forms of Data Collection' },
            ],
          },
        ],
      },
      {
        number: 8,
        topics: [
          {
            id: 'palmr-t10',
            label: 'Data Collection & Hypothesis',
            children: [
              { id: 'palmr-t10-1', label: 'Criteria for Effectivity of Tool' },
              { id: 'palmr-t10-2', label: 'Hypothesis' },
            ],
          },
          {
            id: 'palmr-t11',
            label: 'Research Design I',
            children: [
              { id: 'palmr-t11-1', label: 'According to Motive' },
              { id: 'palmr-t11-2', label: 'According to Investigation' },
              { id: 'palmr-t11-3', label: 'According to Approach (Experimental & Non-Experimental)' },
            ],
          },
        ],
      },
      {
        number: 9,
        topics: [
          {
            id: 'palmr-t12',
            label: 'Research Design II',
            children: [
              { id: 'palmr-t12-1', label: 'According to Time Frame' },
              { id: 'palmr-t12-2', label: 'Qualitative Research Designs' },
            ],
          },
          {
            id: 'palmr-t13',
            label: 'Population, Sampling & Measurement',
            children: [
              { id: 'palmr-t13-1', label: 'Definitions in Population & Sampling' },
              { id: 'palmr-t13-2', label: 'Methods of Sampling' },
              { id: 'palmr-t13-3', label: 'Basic Rights of Research Subjects' },
              { id: 'palmr-t13-4', label: 'Levels of Measurement' },
            ],
          },
          {
            id: 'palmr-t14',
            label: 'Data Analysis & Clinical Trials',
            children: [
              { id: 'palmr-t14-1', label: 'Descriptive Analysis' },
              { id: 'palmr-t14-2', label: 'Inferential Analysis' },
              { id: 'palmr-t14-3', label: 'Criteria in Qualitative Research' },
              { id: 'palmr-t14-4', label: 'Clinical Trials' },
            ],
          },
        ],
      },
    ],
  },

  psych: {
    weeks: [
      {
        number: 1,
        topics: [
          {
            id: 'psych-t1',
            label: 'Foundations of Psychiatric Nursing',
            children: [
              { id: 'psych-t1-1', label: 'Therapeutic Communication' },
              { id: 'psych-t1-2', label: 'Nurse-Patient Relationship' },
              { id: 'psych-t1-3', label: 'Crisis & Crisis Intervention' },
              { id: 'psych-t1-4', label: "Freud's Theory of Personality" },
            ],
          },
        ],
      },
      {
        number: 2,
        topics: [
          {
            id: 'psych-t2',
            label: 'Symptomatology of Mental Disorders',
            children: [
              { id: 'psych-t2-1', label: 'Disturbances in Affect' },
              { id: 'psych-t2-2', label: 'Disturbances in Memory' },
              { id: 'psych-t2-3', label: 'Disturbances in Perception' },
              { id: 'psych-t2-4', label: 'Disturbances in Thought' },
              { id: 'psych-t2-5', label: 'Unusual Speech Patterns' },
              { id: 'psych-t2-6', label: 'Behavioral Management' },
            ],
          },
        ],
      },
      {
        number: 3,
        topics: [
          {
            id: 'psych-t3',
            label: 'Anxiety & Anxiety-Related Disorders',
            children: [
              { id: 'psych-t3-1', label: 'Anxiety' },
              { id: 'psych-t3-2', label: 'Obsessive-Compulsive Disorder' },
              { id: 'psych-t3-3', label: 'Phobic Disorder' },
              { id: 'psych-t3-4', label: 'Somatic Symptom Illness' },
            ],
          },
        ],
      },
      {
        number: 4,
        topics: [
          {
            id: 'psych-t4',
            label: 'Trauma, Eating, Personality & Substance Disorders',
            children: [
              { id: 'psych-t4-1', label: 'Trauma-Related Disorders' },
              { id: 'psych-t4-2', label: 'Eating Disorders' },
              { id: 'psych-t4-3', label: 'Personality Disorders' },
              { id: 'psych-t4-4', label: 'Substance Abuse: Basic Concepts' },
            ],
          },
        ],
      },
      {
        number: 5,
        topics: [
          {
            id: 'psych-t5',
            label: 'Substance Abuse Disorders: Specific Substances',
            children: [
              { id: 'psych-t5-1', label: 'Alcoholism' },
              { id: 'psych-t5-2', label: 'Barbiturates' },
              { id: 'psych-t5-3', label: 'Hallucinogens' },
              { id: 'psych-t5-4', label: 'Narcotics' },
              { id: 'psych-t5-5', label: 'Stimulants' },
            ],
          },
        ],
      },
      { number: 6, reviewWeek: true },
      {
        number: 7,
        topics: [
          {
            id: 'psych-t6',
            label: 'Mood & Psychotic Disorders',
            children: [
              { id: 'psych-t6-1', label: 'Schizophrenia' },
              { id: 'psych-t6-2', label: 'Major Depressive Disorder' },
              { id: 'psych-t6-3', label: 'Bipolar Disorder' },
              { id: 'psych-t6-4', label: 'Delirium vs Dementia' },
            ],
          },
        ],
      },
      {
        number: 8,
        topics: [
          {
            id: 'psych-t7',
            label: 'Psychiatric Review: Disorders & Medications',
            children: [
              { id: 'psych-t7-1', label: 'Personality Disorders Review' },
              { id: 'psych-t7-2', label: 'Anxiety, OCD & Stressor-Related Disorders' },
              { id: 'psych-t7-3', label: 'Typical & Atypical Antipsychotics' },
              { id: 'psych-t7-4', label: 'Major Depressive Disorder & Mania' },
              { id: 'psych-t7-5', label: 'Medications for Depression' },
            ],
          },
        ],
      },
      {
        number: 9,
        topics: [
          {
            id: 'psych-t8',
            label: 'Developmental & Substance-Related Disorders Review',
            children: [
              { id: 'psych-t8-1', label: 'Developmental Disorders' },
              { id: 'psych-t8-2', label: 'Psychiatric Disorders Overview' },
              { id: 'psych-t8-3', label: "Alzheimer's Disease" },
              { id: 'psych-t8-4', label: 'Substance Use Disorders' },
              { id: 'psych-t8-5', label: 'Downers, Uppers & Hallucinogens' },
            ],
          },
        ],
      },
    ],
  },
};

// Shared helpers so any component (dashboard, subject page, etc.) can get the
// same flattened list of real, checkable topics for a subject — a topic with
// children isn't checkable itself, only its leaves are.
export function collectLeafTopics(topic) {
  if (!topic.children || topic.children.length === 0) return [topic];
  return topic.children.flatMap(collectLeafTopics);
}

// Returns the full list of leaf topics for a subject's weekly view (skipping
// review weeks, which have no topics), or null if that subject has no weekly
// content yet.
export function getWeeklyLeafTopics(subjectId) {
  const weekly = WEEKLY_CONTENT[subjectId];
  if (!weekly) return null;
  return weekly.weeks
    .filter((week) => !week.reviewWeek)
    .flatMap((week) => week.topics.flatMap(collectLeafTopics));
}
