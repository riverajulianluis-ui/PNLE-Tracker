export const SUBJECTS = [
  { id: 'chn', name: 'Community Health Nursing', short: 'CHN', accent: '#3E7CC7', soft: '#E8F1FB',
    topics: ['Clients of CHN','COPAR: Principles & Phases','DOH Concepts & Functions','Family Nursing (ADPIE)','Health Promotion & Lifestyle','Magna Carta of Public Health Workers','Primary Health Care Basics & Pillars','Sentrong Sigla Program','Health Education & Prevention Levels','Locally Endemic Diseases & Epidemiology','FHSIS & Vital Statistics','Population Pyramid & Demography','Expanded Program on Immunization','Maternal & Child Health (MCN)','Essential Drugs & Herbal Medicine','Nutrition & Food Fortification','Sanitation & Environmental Health','Mental Health Program'] },
  { id: 'cd', name: 'Communicable Disease Nursing', short: 'CD', accent: '#CB4B3F', soft: '#FBEAE7',
    topics: ['Basic Concepts: Chain of Infection','Standard & Transmission Precautions','Tuberculosis','Leprosy','Integumentary: Measles, Varicella, Rubella','Dengue','Malaria','Filariasis & 4S Prevention','Tetanus, Polio & Rabies','Laws Concerning Communicable Disease','Bacterial Meningitis & Cholera','Diphtheria & Leptospirosis','Typhoid Fever & Schistosomiasis','Pathognomonic Signs'] },
  { id: 'ob', name: 'Obstetric Nursing', short: 'OB', accent: '#C6608A', soft: '#FBEAF1',
    topics: ['Abortion, Molar & Ectopic Pregnancy','Incompetent Cervix','Hyperemesis Gravidarum','Placenta Previa & Abruptio Placenta','Toxemia / PIH & Gestational DM','Hemolytic Disease of the Newborn','PROM & Cord Prolapse','Shoulder Dystocia','Cardinal Signs & Components of Labor','Stages of Labor','True vs False Labor','Trimesters & Signs of Pregnancy','Physiologic Adaptations of Pregnancy','Fetal Growth & Development','Antepartum Care & Fetal Well-Being','Discomforts & Risk Factors of Pregnancy','Postpartum Changes','Essential Intrapartum & Newborn Care (EINC)','Hormones in the Menstrual Cycle'] },
  { id: 'peds', name: 'Pediatric Nursing', short: 'PEDS', accent: '#C79A2A', soft: '#FAF3DD',
    topics: ['Growth & Development by Stage','Developmental Milestones',"Kohlberg's Moral Development",'Childhood Cancers (Leukemia, Wilms, etc.)','Cardiovascular Disorders (PDA, VSD, TOF)','GI Disorders (Cleft Lip, GERD, Hirschsprung)','Hematologic Disorders (vWD, Thalassemia)','Integumentary Disorders (Eczema, Scabies)','Musculoskeletal Disorders (Hip Dysplasia, Talipes)','Respiratory Disorders (Croup, CF, Asthma)','Neurologic Disorders (Seizure, Hydrocephalus)','Renal Disorders (UTI, Nephrotic Syndrome)'] },
  { id: 'ms1', name: 'Medical-Surgical Nursing 1', short: 'MS1', accent: '#C97A2E', soft: '#FBEEE1',
    topics: ['Cancer Basics, Staging & Grading','Radiation Therapy & Brachytherapy','Antineoplastics & Chemotherapy Care','Oncologic Emergencies','Cardiovascular: ECG, MI, Heart Sounds','Emergency & Disaster Nursing Triage','Primary & Secondary Survey','Shock & Circulation Management','Burns: Degrees, Phases & Rule of Nines','Wound Care & Skin Grafting','Disaster Nursing Concepts & NDRRMC'] },
  { id: 'ms2', name: 'Medical-Surgical Nursing 2', short: 'MS2', accent: '#4C8F63', soft: '#E7F4EA',
    topics: ['ADH Disorders: DI & SIADH', "Adrenal Disorders (Addison's, Cushing's)",'Pituitary & Parathyroid Disorders','Diabetes Mellitus & Thyroid Disorders','Acid-Base & Electrolyte Imbalance','GERD, PUD & Cholecystitis','Diverticular Disease & Pancreatitis','Appendicitis & Liver Cirrhosis','Anemias: Iron-Deficiency, Aplastic, Sickle Cell','Bleeding & Infection Precautions','Immunology: Anaphylaxis, RA, SLE, HIV/AIDS','Musculoskeletal Trauma & Interventions','Carpal Tunnel, Scoliosis & Osteoporosis'] },
  { id: 'ms3', name: 'Medical-Surgical Nursing 3', short: 'MS3', accent: '#7A62B8', soft: '#EFEBF9',
    topics: ['CNS/PNS & Cranial Nerves','Increased ICP & CVA',"Parkinson's & Neuroautoimmune (GBS, MS, MG)","Alzheimer's, Seizures & GCS Scoring",'Spinal Cord Injuries','Perioperative Nursing & Asepsis','Stages of Anesthesia','Renal: AKI, CKD & Dialysis','Urinary Calculi & Bladder Cancer','BPH & Prostate Cancer','Respiratory: Asthma, COPD, ARDS','Chest Tube & Pleural Effusion','Ear Disorders & Hearing Loss','Eye Disorders: Glaucoma, Cataract, Retinal Detachment'] },
  { id: 'funda', name: 'Fundamentals of Nursing', short: 'FUNDA', accent: '#3C8F86', soft: '#E6F4F2',
    topics: ['Nursing Theorists (incl. Patricia Benner)','Nutrition Basics','Oxygenation & Suctioning','Tracheostomy & Chest Physiotherapy','Pain Management','Patient Positioning','Sleep','Specimen Collection (Urine, Stool, Sputum)','Diabetes Mellitus Overview','Theories of Aging','Wound Care Fundamentals'] },
  { id: 'palmr', name: 'PALMR (Leadership, Ethics, Research)', short: 'PALMR', accent: '#5566B8', soft: '#EAECF9',
    topics: ['Budgeting & Communication in Organizations','Conflict Resolution & Delegation','Modalities of Care & Leadership Styles','Code of Ethics & Bioethical Principles','Informed Consent & Confidentiality','Malpractice, Negligence & Torts','Theory Generation & Types of Research','Variables, Reliability & Validity','Hypothesis & Literature Review','Research Ethics & Design','Sampling: Probability vs Non-Probability','Levels of Measurement & Data Analysis','Research Process & Problem Sourcing','Data Collection Methods','Clinical Trials & Qualitative Criteria'] },
  { id: 'psych', name: 'Psychiatric Nursing', short: 'PSYCH', accent: '#B15A83', soft: '#F7EAF1',
    topics: ['Therapeutic Communication','Nurse-Patient Relationship','Crisis & Crisis Intervention',"Freud's Theory of Personality",'Symptomatology of Mental Disorders','Behavioral Management','Anxiety & Anxiety-Related Disorders','Trauma-Related Disorders','Eating Disorders','Personality Disorders','Substance Abuse Disorders','Schizophrenia','Major Depressive & Bipolar Disorder','Delirium vs Dementia','Antipsychotics & Mood Stabilizers','Developmental Disorders'] },
];

export const STATUS_ORDER = ['not_started', 'in_progress', 'mastered', 'relearning'];

export const STATUS_META = {
  not_started: { label: 'Not Started', icon: '○', bg: '#E9EBEF', text: '#6B7280' },
  in_progress: { label: 'In Progress', icon: '◐', bg: '#FBF1DC', text: '#9A6B0F' },
  mastered: { label: 'Mastered', icon: '✓', bg: 'var(--purple)', text: '#fff' },
  relearning: { label: 'Relearning', icon: '↻', bg: '#FBEAEE', text: '#A73A50' },
};

export const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
export const TIME_SLOTS = Array.from({ length: 16 }, (_, i) => i + 7); // 7am - 10pm
