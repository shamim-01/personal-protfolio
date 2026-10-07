// ✏️ Edit all your content here. The components just render this data.

export const profile = {
  name: 'Shamim Alam',
  roles: ['a MERN developer', 'a UI engineer', 'a data analyst'],
  intro:
    'I build responsive web experiences with React and Tailwind CSS, and develop full-stack applications using Node.js, Express and MongoDB. I also work with SQL, Python and Power BI to uncover insights and create practical dashboards. I’m currently learning Next.js and TypeScript to grow as a frontend developer.',
  now: 'Associate UI Engineer at ERA-InfoTech, building side projects and growing across development and data.',
  cv: '/shamim_Alam.pdf', // put the PDF in /public
  photo: '/images/profile.jpg', // put the image in /public/images
  email: 'shamimalam4949@gmail.com',
  github: 'https://github.com/shamim-01',
  linkedin: 'https://www.linkedin.com/in/shamimalam786/',
}

export const nav = [
  ['now', 'Now'], ['about', 'About'], ['journey', 'Journey'], ['skills', 'Skills'],
  ['work', 'Work'], ['education', 'Education'], ['projects', 'Projects'],
]

export const building = [
  ['University Management System', 'MERN · role-based dashboard'],
  ['E-Commerce Sales Analysis', 'PostgreSQL · Power BI'],
  ['The Coding Journey', 'React · learning platform UI'],
]

export const ticker = [
  'Associate UI Engineer @ ERA-InfoTech', 'MERN developer', 'Data analyst',
  'SQL + Python', 'Dhaka, Bangladesh', 'Open to collaboration',
]

export const stack = [
  ['Frontend', 'React, Next.js, TypeScript, Tailwind'], ['Backend', 'Node, Express'],
  ['Data', 'Python, SQL, Power BI'], ['Store', 'MongoDB, PostgreSQL'],
]

export const stats = [
  { n: 5, suffix: '+', label: 'Projects built' },
  { n: 4, suffix: '', label: 'Certifications' },
  { n: 1000, suffix: '+', label: 'Records analyzed' },
  { n: 2, suffix: '', label: 'Domains — build & analyze' },
]

export const about = {
  title: 'I build thoughtful interfaces and make data useful.',
  paragraphs: [
    "I'm a Computer Science graduate and Associate UI Engineer at ERA-InfoTech. I enjoy turning ideas into polished, responsive interfaces with React, and building full-stack projects with the MERN stack.",
    "I'm currently learning Next.js and TypeScript to strengthen how I build modern web applications. Alongside development, I use SQL, Python and Power BI to explore datasets, find useful patterns and present insights clearly.",
    'I like working across the whole problem — understanding what people need, shaping a useful experience, and paying attention to the data and details behind it.',
  ],
  points: [
    { title: 'UI engineering', text: 'Responsive, thoughtful interfaces with React and Tailwind CSS, while learning Next.js.' },
    { title: 'Full-stack development', text: 'Hands-on experience with Node.js, Express and MongoDB.' },
    { title: 'Currently learning', text: 'Growing my frontend toolkit with Next.js and TypeScript through active learning and projects.' },
    { title: 'Data analysis', text: 'SQL, Python and Power BI for exploring data and communicating insights.' },
  ],
}

export const journey = [
  { when: '2021', title: 'Started Computer Science', text: 'Began my B.Sc. at AUST and built a foundation in programming, data structures and problem solving.' },
  { when: 'Frontend', title: 'Growing as a UI engineer', text: 'Learned HTML, CSS, JavaScript and React, then built responsive interfaces with Tailwind CSS.' },
  { when: 'Full stack', title: 'Building with the MERN stack', text: 'Expanded into Node.js, Express and MongoDB, creating full-stack apps with APIs and authentication.' },
  { when: 'Data', title: 'Exploring data analytics', text: 'Developed skills in SQL, Python and Power BI to investigate datasets and communicate useful insights.' },
  { when: '2026 · Now', title: 'Engineering & what’s next', text: 'Working as an Associate UI Engineer at ERA-InfoTech while learning Next.js and TypeScript.', now: true },
]
export const learnHow = [
  ['Build, then read', 'I pick a project first and learn the docs as I need them. Every concept sticks because I used it.'],
  ['Break it and fix it', 'Bugs teach more than tutorials. I keep notes on what broke and why.'],
  ['Keep it on GitHub', 'Every project goes to GitHub, so my progress is visible and I can look back at how I improved.'],
]
export const learningNext = ['Next.js', 'TypeScript', 'Deploying full-stack apps', 'Python (pandas)', 'Testing']

export const skills = [
  ['Frontend', ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Framer Motion', 'Next.js (learning)', 'TypeScript (learning)']],
  ['Backend', ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT']],
  ['Data', ['SQL', 'PostgreSQL', 'Power BI', 'Excel', 'Python']],
  ['Tools', ['Git', 'GitHub', 'VS Code', 'Postman', 'MongoDB Compass']],
]
// ✏️ Add `link: 'https://...'` to show a "Verify ↗" link
export const certs = [
  { level: 'Advanced', title: 'SQL' },
  { level: 'Certificate', title: 'Frontend Developer (React)' },
  { level: 'Intermediate', title: 'JavaScript' },
  { level: 'Intermediate', title: 'REST API' },
]

export const work = [
  {
    date: 'Oct 2026 — Present', sub: 'Full-time', current: true,
    title: 'Associate UI Engineer', org: 'ERA-InfoTech Limited · Dhaka, Bangladesh',
    bullets: [
      'Building responsive, component-based interfaces with React.js, Tailwind CSS, Next.js, and TypeScript.',
      'Turning design files into clean, accessible, pixel-accurate UI.',
      'Connecting frontend views to backend data through REST APIs.',
      'Exploring modern frontend patterns to improve component architecture and maintainability.',
    ],
  },
]
export const education = [
  { date: '2021 — 2025', title: 'B.Sc. in Computer Science & Engineering', org: 'Ahsanullah University of Science and Technology (AUST) — CGPA 3.32/4.00' },
  { date: '2017 — 2019', title: 'H.S.C. (Higher Secondary Certificate)', org: 'Shyamnagar Govt. Mohsin Degree College — GPA 5.00' },
  { date: '2015 — 2017', title: 'S.S.C. (Secondary School Certificate)', org: 'Nakipur H.C Pilot Model High School — GPA 5.00' }, // ✏️ check the year
]

// ✏️ Add `live: 'https://...'` to show a "Live ↗" button
export const projects = [
  {
    group: 'mern stack', name: 'University Management System',
    desc: 'Role-based platform for Admin, Teachers and Students — attendance, results with GPA/CGPA, courses, departments and notices.',
    tags: ['MongoDB', 'Express', 'React', 'Node', 'JWT'],
    repo: 'https://github.com/shamim-01/university_management', shot: '/images/projects/university.png',
    problem: 'Three roles needed different permissions and views in one codebase, and GPA/CGPA had to stay accurate as results were entered.',
    solution: 'JWT-based role middleware gates routes and UI per role, and a grading module recalculates GPA/CGPA on every result update instead of storing stale totals.',
  },
  {
    group: 'mern stack', name: 'Book Management System',
    desc: 'Full-stack app to manage books, borrow/return, write reviews, track reading progress and view stats on a dashboard.',
    tags: ['MongoDB', 'Express', 'React', 'Node', 'JWT'],
    repo: 'https://github.com/shamim-01/book-management', shot: '/images/projects/book.png',
    problem: "Available copies had to stay correct across simultaneous borrow/return actions, while also tracking each user's reading progress and reviews.",
    solution: 'Borrow/return is modeled as atomic MongoDB updates tied to book stock, with a separate progress schema per user-book pair shown on a stats dashboard.',
  },
  {
    group: 'data analysis', name: 'HR Analytics',
    desc: 'Employee attrition, workforce trends and HR insights from ~1,000 records, analyzed with PostgreSQL and an Excel dashboard.',
    tags: ['PostgreSQL', 'SQL', 'Excel'],
    repo: 'https://github.com/shamim-01/HR-Analytics-PostgreSQL-SQL-Excel', shot: '/images/projects/dashboard.png',
    problem: '~1,000 raw HR records had inconsistent formatting, duplicates and mixed date formats, making attrition trends unreliable.',
    solution: 'Cleaned the data in PostgreSQL (deduplication, date normalization), then built an Excel dashboard with pivot-based KPIs for attrition and workforce trends.',
  },
  {
    group: 'data analysis', name: 'E-Commerce Sales Analysis',
    desc: 'End-to-end sales & profit analysis — data cleaning, KPIs, category/regional breakdowns and ranking queries, visualized in Power BI.',
    tags: ['PostgreSQL', 'SQL', 'Power BI'],
    repo: 'https://github.com/shamim-01/E-commerce_sales_Analysis-', shot: '/images/projects/e-commarce.png',
    problem: 'Raw transactional sales data needed heavy cleaning before breakdowns, rankings and KPIs could be trusted.',
    solution: 'SQL cleaning and KPI queries in PostgreSQL, then a Power BI dashboard with drill-down by category and region to show profit and sales trends.',
  },
  {
    group: 'react', name: 'The Coding Journey',
    desc: 'A learning-platform landing page with reusable components, responsive layouts and Framer Motion animations throughout.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    repo: 'https://github.com/shamim-01/React-project-coding_journey', shot: '/images/projects/react.png',
    problem: 'Needed a landing page that felt alive instead of static, while staying fast and reusable across multiple pages.',
    solution: 'A component library in React + Vite + Tailwind, with Framer Motion animations tuned to feel purposeful without hurting performance.',
  },
]
