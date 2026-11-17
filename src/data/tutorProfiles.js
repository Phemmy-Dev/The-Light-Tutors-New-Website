// Tutor profiles from the "Tutor Profile" Google Form, keyed by the member id in team.js.
// To add a profile: copy an entry, set the id to match the tutor on the Meet the Team page,
// and fill in whichever fields they answered. Every field is optional.
//
//   qualification  – degree / certificates
//   field          – field of study
//   experience     – years of teaching experience
//   subjects       – list of subjects taught
//   ageGroups      – ages / school years they teach
//   teachingStyle  – how they teach
//   bio            – list of paragraphs, parent-friendly

const tutorProfiles = {
    // Kemisola David
    23: {
        qualification: "Medicine and Surgery undergraduate, University of Ilorin",
        field: "Sciences",
        experience: "5 years",
        subjects: ["Mathematics", "Science", "Biology", "Chemistry"],
        ageGroups: "Ages 8–16 (Years 5–12)",
        teachingStyle: "Student-centred. I meet every student at their current level, teach at their pace, identify areas for improvement and adapt lessons to suit their academic needs.",
        bio: [
            "I am a medical student at the University of Ilorin and an experienced tutor with several years of experience teaching Maths and Sciences to students from Year 5 to Year 12.",
        ],
    },

    // Adeogun Morenikeji Samson
    34: {
        qualification: "B.Sc. Human Physiology, University of Ilorin",
        field: "Human Physiology",
        experience: "5+ years",
        subjects: ["Mathematics", "Further Mathematics", "Science", "Biology", "Chemistry", "Physics"],
        ageGroups: "Ages 8–16",
        teachingStyle: "Interactive, engaging and student-centred, using simplified explanations, practical examples and practice questions.",
        bio: [
            "A passionate tutor and Human Physiology graduate dedicated to making learning simple and engaging. I help students build confidence, improve understanding and achieve academic success through personalised teaching and consistent practice.",
        ],
    },

    // Faith Jimoh
    26: {
        qualification: "Veterinary Medicine student, University of Ilorin",
        field: "Veterinary Medicine",
        experience: "3+ years",
        subjects: ["Chemistry", "Biology", "Physics"],
        ageGroups: "Years 7–11, particularly learners preparing for school assessments and exams",
        teachingStyle: "Interactive, student-centred and exam-focused. I break down complex concepts into simple, understandable explanations, encourage active participation, and use questions, practical examples and engaging activities to reinforce learning.",
        bio: [
            "I am a dedicated and passionate Science tutor with over three years of teaching experience. As a Veterinary Medicine student at the University of Ilorin, I bring a strong scientific foundation and a genuine commitment to helping students succeed academically.",
            "I create a supportive and engaging learning environment where students can develop a deeper understanding of scientific concepts, build confidence and achieve their academic goals.",
        ],
    },

    // Afolayan Opeyemi (partial response: no bio, teaching style or age groups yet)
    29: {
        qualification: "Medical Laboratory Science",
        field: "Biomedical Science",
        experience: "3+ years",
        subjects: ["Science", "Chemistry", "Biology", "Physics"],
    },

    // Abisola Adefila
    18: {
        qualification: "B.Sc. Biochemistry",
        field: "Biochemistry and Life Sciences",
        experience: "3+ years",
        subjects: ["Science", "Biology", "Chemistry", "Physics"],
        ageGroups: "Ages 11–13, 14–16 and 17+",
        teachingStyle: "Engaging and student-centred, combining tutor-led explanations with student-led discussions where appropriate. Lessons are interactive, easy to follow, and focused on building understanding and preparing students for tests and exams.",
        bio: [
            "I'm a passionate tutor who enjoys helping students understand science in a way that feels simple, interesting and less intimidating. With over three years of teaching experience and a background in Biochemistry, I enjoy breaking down complex topics, encouraging students to ask questions and helping them discover what they are capable of.",
            "I believe every student can make progress with the right guidance, patience and support, and I aim to make every lesson a positive learning experience that builds both understanding and confidence.",
        ],
    },

    // Alade Ganiyu Ayobami
    40: {
        qualification: "Bachelor of Pharmacy (B.Pharm)",
        field: "Pharmacy",
        experience: "3 years",
        subjects: ["Mathematics", "Science", "Chemistry", "Biology", "Physics"],
        ageGroups: "Ages 8–16",
        teachingStyle: "Student-centred, interactive and supportive. I break down complex concepts into simple, easy-to-understand explanations and use practical examples, guided practice and engaging activities to help students build confidence. I focus on understanding rather than memorisation, adapting lessons to each student's pace and needs.",
        bio: [
            "I am a dedicated and patient tutor with a Bachelor of Pharmacy degree and a strong background in science and mathematics.",
            "I specialise in making Mathematics and Science easy to understand through clear explanations and engaging practice. My goal is to help students build confidence, strengthen their foundational skills and develop a positive attitude towards learning.",
        ],
    },

    // Emmanuel Oziegbe (Oct 2026 response, with detail from the March 2026 response)
    13: {
        qualification: "B.Sc. Agriculture, M.Sc. Agronomy and Agro-Industry, M.Sc. Plant Breeding",
        field: "Plant Sciences and Biotechnology",
        experience: "9 years",
        subjects: ["Mathematics", "Further Mathematics", "Biology", "Chemistry", "Physics"],
        ageGroups: "Years 7–11",
        teachingStyle: "Structured, engaging and concept-driven. I make sure students truly understand ideas rather than just memorising procedures, reinforcing key concepts through guided practice until they feel confident. I use videos and illustrations to make complex topics easier to grasp, and sometimes ask students to explain concepts back to me, which strengthens their understanding and their confidence.",
        bio: [
            "I am a dedicated tutor specialising in Mathematics and Sciences. I make complex concepts easier to understand through clear explanations, step-by-step examples and regular practice.",
            "My lessons are tailored to each student's needs, helping them improve their grades, build confidence and develop the skills to succeed independently.",
            "Already doing well? I also enjoy stretching high-achieving students, helping them move ahead of their class and preparing them for important exams such as GCSEs and beyond.",
        ],
    },

    // ----- From the March 2026 responses -----

    // Mercy Adams
    15: {
        qualification: "B.Sc. (Ed.) Biology Education",
        field: "Biology Education",
        experience: "3+ years",
        subjects: ["Mathematics", "English", "Biology"],
        ageGroups: "All ages, especially younger children for Maths",
        teachingStyle: "Student-centred, engaging and supportive. I simplify complex concepts using real-life examples, interactive discussions and practical exercises. My goal is not only to help students understand their subjects but also to build their confidence, critical thinking and love for learning.",
        bio: [
            "I am a dedicated and passionate educator with over three years of teaching experience and a degree in Biology Education. I specialise in Mathematics, English and Biology, and I enjoy helping students build strong academic foundations in a supportive and encouraging environment.",
            "My lessons are structured, interactive and tailored to each student's pace. I am committed to helping my students understand concepts clearly, grow in confidence and achieve their academic goals.",
        ],
    },

    // James Opara
    16: {
        qualification: "B.Sc. Mathematics",
        field: "Mathematics",
        experience: "6+ years",
        subjects: ["Mathematics", "Further Mathematics", "English Language", "Physics", "Chemistry", "Biology", "Statistics", "Computer Science"],
        ageGroups: "Upper primary and secondary, including GCSE/IGCSE",
        teachingStyle: "Interactive classes that combine continuous assessment with student-led sessions to encourage active participation and deeper understanding. I focus on clear explanations, guided practice and strong foundational skills so students can approach problems with confidence.",
        bio: [
            "I hold a B.Sc. in Mathematics and have over six years of experience teaching and tutoring students across a range of subjects, mainly at upper primary and secondary level, including GCSE/IGCSE students.",
            "I am passionate about helping students improve both their academic performance and their independent learning skills, in a structured, engaging and supportive learning environment that parents can trust.",
        ],
    },

    // Toyin Salami (short response: no bio)
    17: {
        qualification: "B.Tech. Transport Management Technology",
        field: "Transport Management Technology",
        experience: "4 years",
        subjects: ["Coding", "Mathematics"],
        ageGroups: "All ages",
        teachingStyle: "I start by making sure students understand the concept behind each topic, then move on to practice and application.",
    },

    // Praise Aderinola
    22: {
        qualification: "Doctor of Pharmacy (Pharm.D.), in progress",
        field: "Pharmacy",
        experience: "5+ years",
        subjects: ["Mathematics", "Biology", "Chemistry", "Physics", "Combined Science", "Verbal Reasoning", "Non-Verbal Reasoning"],
        ageGroups: "Years 5–11 (upper primary to GCSE)",
        teachingStyle: "Structured but relaxed and interactive. I break complex topics down into simple, logical steps so students truly understand rather than memorise. I encourage questions, guide students through problems step by step until they can solve them on their own, and include plenty of exam-style practice so they become comfortable applying concepts independently.",
        bio: [
            "I am a Doctor of Pharmacy student and an experienced tutor with a strong passion for helping students succeed in mathematics and science. Over the years, I have worked with students across different year groups, helping them build solid foundations and confidence in challenging subjects.",
            "I enjoy creating a supportive environment where students feel comfortable asking questions and developing their problem-solving skills. My aim is always for students to leave each lesson feeling more capable than when they started.",
        ],
    },

    // Olumide Adisa (Oct 2026 response)
    24: {
        qualification: "MBBS, in progress",
        field: "Medicine and Surgery",
        experience: "5 years",
        subjects: ["Mathematics", "English", "Science", "Biology", "Chemistry", "Physics"],
        ageGroups: "Ages 9–16 (UK curriculum, KS2–KS4)",
        teachingStyle: "Student-centred, interactive and structured, with clear explanations, practical examples and exam-focused practice.",
        bio: [
            "I am an experienced tutor passionate about helping students improve their understanding, build confidence and achieve academic success.",
            "I provide personalised, curriculum-aligned lessons tailored to each student's learning needs, with a focus on measurable progress and exam preparation.",
        ],
    },

    // Adeleke Owoade
    27: {
        qualification: "B.A. (Ed.) Yoruba",
        field: "Yoruba Education",
        experience: "10+ years",
        subjects: ["Yoruba Language"],
        ageGroups: "All ages",
        teachingStyle: "Learner-centred lessons that balance fluency with a deep understanding of Yoruba heritage and values, tailored to the unique pace of each learner in a supportive and engaging environment.",
        bio: [
            "Ẹ ǹ lẹ́ o! I am a passionate Yoruba tutor with a B.A. (Ed.) in Yoruba and over a decade of experience in language teaching and cultural preservation.",
            "I am dedicated to helping students of all ages achieve their language goals while building a lasting connection to the rich cultural identity of the Yoruba people.",
        ],
    },

    // Dongmo Bilson
    28: {
        qualification: "B.Pharm., with additional French language certifications",
        field: "Pharmacy and Health Sciences",
        experience: "Several years, including teaching French in 7+ schools",
        subjects: ["French", "English Language", "Basic Science", "Biology", "Chemistry", "Geography"],
        ageGroups: "Ages 6–15 (primary and early secondary)",
        teachingStyle: "Interactive, structured and student-focused. I break complex ideas down into simple, relatable explanations, and encourage participation, questions and practical examples that connect learning to real life.",
        bio: [
            "I am a Cameroonian pharmacist and educator with a strong passion for teaching languages and sciences. I grew up in a bilingual country where French is an official language, so I developed fluency in French from an early age.",
            "I have taught French in more than seven schools in Nigeria and also tutor privately, online and in person. Coming from a family of educators, teaching has always been a natural part of my journey, and I enjoy helping students build confidence and strong academic foundations.",
            "I particularly enjoy supporting students preparing for GCSE exams, helping them improve their performance through structured learning and personalised guidance.",
        ],
    },

    // Daniel Babalola
    30: {
        qualification: "B.Sc. Civil Engineering",
        field: "Civil Engineering",
        experience: "About 10 years",
        subjects: ["Mathematics", "Further Mathematics", "Sciences", "English Language"],
        ageGroups: "Ages 13–17, pre-university, university and adult learners",
        teachingStyle: "Highly adaptable and student-centred. Every student is unique, so I tailor each session to the learner's pace, strengths and areas for improvement. I am patient, engaging and interactive, creating an environment where students feel comfortable asking questions and growing in confidence.",
        bio: [
            "I am a dedicated and passionate tutor with a B.Sc. in Civil Engineering and around ten years of teaching experience, from peer tutoring at university to professional tutoring today.",
            "My teaching philosophy centres on the belief that no two students learn the same way, so I approach every session with flexibility, patience and genuine enthusiasm for helping each student reach their potential.",
        ],
    },

    // Noah Ige
    32: {
        qualification: "B.Tech. Mathematics",
        field: "Pure and Applied Mathematics, with Statistics and Data Analysis",
        experience: "4+ years",
        subjects: ["Mathematics", "GCSE Maths", "Physics", "Statistics", "Calculus"],
        ageGroups: "Year 5 upwards, including GCSE, A-Level and introductory university",
        teachingStyle: "Student-centred and highly interactive, with an emphasis on understanding rather than rote memorisation. I use step-by-step explanations, practical examples and guided practice, with regular assessment and feedback to track progress and close learning gaps.",
        bio: [
            "I am an experienced mathematics educator with over four years of teaching and tutoring experience across secondary and introductory university levels.",
            "I am passionate about helping students build strong mathematical foundations by simplifying complex concepts and encouraging critical thinking. My patient, supportive and structured approach helps students improve both their confidence and their results.",
        ],
    },

    // Precious Momoh
    33: {
        qualification: "B.Tech. Statistics",
        field: "Statistics",
        experience: "9 years",
        subjects: ["Mathematics", "English Language", "Science", "Chemistry", "Biology", "Physics", "Non-Verbal Reasoning"],
        ageGroups: "All ages",
        teachingStyle: "Interactive lessons using slides, whiteboards, images and short educational videos.",
        bio: [
            "I am an impact-oriented tutor with nine years of experience in both physical and online classrooms. I adapt to each student's learning style and academic needs.",
        ],
    },

    // Oyebode Victoria (subjects carried over from her earlier profile)
    36: {
        qualification: "B.A. English Education, TEFL certified",
        field: "English Education",
        experience: "5+ years",
        teachingStyle: "Engaging, supportive and interactive, using play-based and student-centred methods to make learning enjoyable and effective.",
        bio: [
            "I am a TEFL-certified English teacher with a degree in English Education and over five years of teaching experience. I have taught learners from different countries and age groups, helping them build confidence in reading, writing and speaking English.",
        ],
    },

    // Adesokan Immanuel Oluwanifise (Oct 2026 response)
    38: {
        qualification: "Computer Science undergraduate",
        field: "Computer Science",
        experience: "2–3 years",
        subjects: ["Mathematics", "Coding", "Music", "English"],
        ageGroups: "Ages 5–14",
        teachingStyle: "Student-oriented. I adapt each lesson to how the child learns best and build their confidence step by step.",
        bio: [
            "I am an undergraduate Computer Science student with two to three years of teaching experience in Mathematics, Coding, Music and English.",
            "I aim to make learning clear, engaging and enjoyable while helping every student grow in skill and confidence.",
        ],
    },

    // Toba Adigun
    42: {
        qualification: "B.Sc. Biochemistry and B.Eng. Civil Engineering",
        field: "Biochemistry and Civil Engineering",
        experience: "5+ years",
        subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Verbal Reasoning", "Non-Verbal Reasoning", "Music", "Web Development (HTML & CSS)"],
        teachingStyle: "Student-centred, adaptable and engaging. Every learner is unique, so I tailor my teaching to each student's learning style, ensuring clarity, confidence and measurable progress.",
        bio: [
            "I am a passionate and experienced educator with over five years of teaching experience across a wide range of subjects. My degrees in Biochemistry and Civil Engineering give me a strong foundation in both the sciences and analytical thinking.",
            "I am known for a warm and approachable personality, and I create a supportive environment where students feel motivated to excel.",
        ],
    },

    // David Sharon (Oct 2026 response)
    43: {
        qualification: "Doctor of Pharmacy (Pharm.D.), University of Ilorin",
        field: "Pharmacy",
        experience: "1+ year of online one-to-one tutoring",
        subjects: ["Mathematics", "Biology", "Physics", "Chemistry", "Non-Verbal Reasoning"],
        ageGroups: "Years 4–11, including GCSE, 11+ and WAEC preparation",
        teachingStyle: "Patient, interactive, structured and student-centred. I break complex concepts down into simple, manageable steps, using practical examples, visual resources, guided practice and interactive activities. I adapt to each student's needs, pace and goals, and encourage questions, independent thinking and problem-solving.",
        bio: [
            "I am a dedicated and enthusiastic tutor with a Doctor of Pharmacy background and a passion for helping students achieve their academic goals. I provide online, one-to-one tuition in Mathematics and Science for students at different academic levels.",
            "My approach combines clear explanations, engaging activities, structured practice and personalised support. I strive to make learning enjoyable, build students' confidence and equip them to become independent learners.",
        ],
    },

    // Mary Adeniji
    45: {
        qualification: "B.A. English Language",
        field: "English Language",
        experience: "3+ years",
        subjects: ["English Language", "Yoruba Language", "Spanish"],
        ageGroups: "Age 6 and above, including teenagers and adults learning a second language",
        teachingStyle: "Student-centred, fun and engaging. I use interactive activities, gamified learning, creative exercises and practical communication tasks to make lessons enjoyable while helping learners make steady progress.",
        bio: [
            "I am a multilingual language tutor with a degree in English Language and over three years of teaching experience, specialising in English, Yoruba and Spanish.",
            "I am passionate about helping students master a language, communicate confidently and develop a genuine, lasting love for learning it.",
        ],
    },

    // Olamide Christian (Oct 2026 response; university name from March)
    46: {
        qualification: "B.Tech. Food Science and Nutrition (Federal University of Technology, Minna), 120-hour TEFL certificate",
        field: "Food Science and Nutrition, with TEFL training",
        experience: "16 years, including online tutoring",
        subjects: ["English Language", "Mathematics", "Non-Verbal Reasoning"],
        ageGroups: "Ages 5–16 (primary and secondary)",
        teachingStyle: "Student-centred, engaging, patient and structured. I simplify complex concepts into easy-to-understand steps, using practical examples, interactive activities, guided practice and regular assessments, and adapt lessons to each learner's needs, ability and pace.",
        bio: [
            "I am an experienced and passionate educator with 16 years of teaching experience and a strong commitment to helping learners achieve their academic goals. I create supportive, engaging learning environments where students feel comfortable asking questions, developing their skills and building confidence.",
            "My strength lies in breaking challenging concepts down into simple, manageable steps. I focus on understanding, steady progress and helping every learner reach their full potential.",
        ],
    },

    // ----- From the late October 2026 responses -----

    // Oladapo Favour
    41: {
        qualification: "B.A. English",
        field: "English Language and Literary Studies",
        experience: "3 years",
        subjects: ["English Language", "English Literature", "Verbal Reasoning"],
        ageGroups: "Year 4 and above",
        teachingStyle: "Interactive, structured and learner-focused. I adapt lessons to each student's pace and areas of difficulty, using practical examples, targeted exercises and regular assessments to reinforce understanding.",
        bio: [
            "I am passionate about making learning accessible, engaging and rewarding. I create a supportive environment where students feel comfortable asking questions, tackling challenges and building confidence in their abilities.",
            "I find great fulfilment in helping learners recognise their potential and develop the skills they need for long-term academic success.",
        ],
    },

    // ----- New tutors from the Nov 2026 personnel form, profiles from the Tutor Profile form -----

    // Victoria Okolie (Oct 2026 response; NVR added from Nov personnel form)
    47: {
        qualification: "B.A. Social Studies Education, University of Ilorin",
        field: "Social Studies Education",
        experience: "3 years",
        subjects: ["English Language", "English Literature", "Igbo Language", "Non-Verbal Reasoning"],
        ageGroups: "Ages 5–14",
        teachingStyle: "Patient, friendly and interactive. I make lessons simple, enjoyable and easy to understand, while encouraging students to ask questions and learn with confidence.",
        bio: [
            "I am a caring and intentional tutor who enjoys helping children learn, grow and believe in themselves. I create a warm and supportive learning environment where every child feels comfortable, valued and encouraged.",
            "My goal is to make learning fun and meaningful while helping each student reach their potential.",
        ],
    },

    // Emmanuel Amusan (Oct 2026 response)
    48: {
        qualification: "B.Sc. Physics, University of Ilorin; M.Sc. Physics in progress",
        field: "Physics",
        experience: "7+ years",
        subjects: ["Mathematics", "Further Mathematics", "Physics"],
        ageGroups: "Ages 5–18, including Cambridge and IGCSE/GCSE exam preparation",
        teachingStyle: "Student-centred, interactive and practical. I simplify complex concepts through clear, step-by-step explanations, relatable examples, visual resources and guided practice, and use assessments, practice questions and feedback to find learning gaps, track progress and build confidence.",
        bio: [
            "I am a dedicated and passionate Mathematics, Further Mathematics and Physics tutor with over seven years of experience across classroom, home tutoring and online learning.",
            "My goal is to create a supportive and engaging learning environment where students develop a strong understanding of their subjects, become independent learners and make meaningful progress, through personalised teaching, patience, consistency and encouragement.",
        ],
    },

    // Elijah Akiode (Oct 2026 response; subjects and motivation from Nov personnel form)
    49: {
        qualification: "B.Sc. Anatomy",
        field: "Human Anatomy",
        experience: "2+ years",
        subjects: ["Mathematics", "Further Mathematics", "Physics", "Chemistry", "Biology", "Non-Verbal Reasoning"],
        ageGroups: "Year 6 and above",
        teachingStyle: "Flexible and student-centred, with lessons tailored to each student's needs and pace. I break concepts down into clear, step-by-step explanations supported by visual aids, helping students understand difficult topics and develop problem-solving skills.",
        bio: [
            "I am a committed tutor who enjoys helping students develop strong academic foundations. Through clear explanations, patience and interactive lessons, I support students in improving their understanding, confidence and performance.",
            "I find fulfilment in helping students overcome learning challenges and discover their potential. Seeing them progress from uncertainty to understanding, and become more independent learners, is what makes teaching rewarding for me.",
        ],
    },

    // Olatomiwa Omotunde (March 2026 response; subjects from Nov personnel form)
    50: {
        qualification: "MBBS, in progress",
        field: "Medicine and Surgery",
        experience: "About 2 years",
        subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Verbal Reasoning", "Non-Verbal Reasoning"],
        ageGroups: "Ages 12–18 (lower secondary to A-Level)",
        teachingStyle: "Interactive, structured and student-centred. I simplify complex concepts using relatable examples, illustrations and guided practice, and encourage questions, critical thinking and active participation.",
        bio: [
            "I am a dedicated medical student with a strong passion for teaching and student development. I specialise in helping students understand challenging topics in a clear and supportive learning environment.",
            "My goal is to build students' confidence, strengthen their understanding of key concepts and support them in achieving their academic potential.",
        ],
    },

    // Favour Akande (Oct 2026 response; not the same person as Oladapo Favour)
    51: {
        qualification: "B.A. Education and English Language, Obafemi Awolowo University",
        field: "Education and English Language",
        experience: "6 years",
        subjects: ["English Language", "Literature in English", "Phonics and Reading", "Grammar and Comprehension", "Verbal Reasoning"],
        ageGroups: "Primary (ages 5–12) and secondary",
        teachingStyle: "Learner-centred, interactive and adaptable to each child's needs and pace. I use visual aids, storytelling, practical examples, educational games, guided practice and regular assessments to make lessons engaging and effective.",
        bio: [
            "I am a dedicated and passionate educator committed to helping children build strong academic foundations, develop confidence and cultivate a genuine love for learning.",
            "With a background in Education and English Language and experience teaching learners at different levels, I make every lesson engaging, meaningful and adapted to the learner's needs. I believe every child can make progress with the right guidance.",
        ],
    },

    // Ibtisam Ejiwunmi (Oct 2026 response; subjects from Nov personnel form)
    52: {
        qualification: "B.Sc. Anatomy, University of Ilorin (Second Class Upper); MBBS in progress, Federal University of Lafia",
        field: "Anatomy and Medicine",
        experience: "1+ year",
        subjects: ["English", "Mathematics", "Biology", "Chemistry"],
        ageGroups: "Ages 6–14 (primary and secondary)",
        teachingStyle: "Interactive, student-centred and tailored to each learner. I simplify complex concepts using relatable examples, visual aids and engaging activities, encourage questions and critical thinking, and use regular assessments and feedback to track progress.",
        bio: [
            "I am a passionate and dedicated tutor with a background in Anatomy and a strong interest in helping children develop academic confidence. I create engaging, supportive and inclusive lessons where students feel comfortable asking questions, making mistakes and exploring new ideas.",
            "I believe every child has the potential to excel with the right guidance and encouragement. My goal is to make learning enjoyable, strengthen understanding and help each student make meaningful progress.",
        ],
    },
}

export default tutorProfiles
