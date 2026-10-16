// Team members shown on /meet-our-team, in display order.
// Each member's full tutor profile (from the Tutor Profile Google Form) lives in tutorProfiles.js,
// keyed by the same id.
import tutorProfiles from './tutorProfiles'

import Tutorpic1 from '../assets/images/tutors/1.jpg'
import Tutorpic4 from '../assets/images/tutors/4.jpg'
import Tutorpic5 from '../assets/images/tutors/5.jpg'
import Tutorpic6 from '../assets/images/tutors/6.jpg'
import Tutorpic8 from '../assets/images/tutors/8.jpg'
import Tutorpic9 from '../assets/images/tutors/9.jpeg'
import Tutorpic15 from '../assets/images/tutors/15.jpg'
import Tutorpic16 from '../assets/images/tutors/16.jpg'
import Tutorpic17 from '../assets/images/tutors/17.jpg'
import Tutorpic18 from '../assets/images/tutors/18.jpg'
import Tutorpic19 from '../assets/images/tutors/19.jpg'
import Tutorpic21 from '../assets/images/tutors/21.jpg'
import Tutorpic23 from '../assets/images/tutors/23.jpg'
import Tutorpic25 from '../assets/images/tutors/25.jpg'
import Tutorpic26 from '../assets/images/tutors/26.jpeg'
import Tutorpic27 from '../assets/images/tutors/27.jpg'
import Tutorpic28 from '../assets/images/tutors/olamiji.jpeg'
import Tutorpic31 from '../assets/images/tutors/31.jpg'
import Tutorpic33 from '../assets/images/tutors/33.jpg'
import Tutorpic34 from '../assets/images/tutors/34.jpg'
import Tutorpic35 from '../assets/images/tutors/35.jpg'
import Tutorpic36 from '../assets/images/tutors/36.jpg'
import Tutorpic37 from '../assets/images/tutors/37.jpg'
import Tutorpic38 from '../assets/images/tutors/38.jpg'
import PreciousMomohPic from '../assets/images/tutors/precious-momoh.png'
import MorenikejPic from '../assets/images/tutors/morenikeji.jpeg'
import BilalPic from '../assets/images/tutors/bilal.jpg'
import VictoriaOyebodePic from '../assets/images/tutors/victoria-oyebode.jpg'
import UkojieAdanaikePic from '../assets/images/tutors/ukojie-adenaike.jpg'
import ImmanuelAdesokanPic from '../assets/images/tutors/immanuel-adesokan.jpg'
import TofunmiOyeniranPic from '../assets/images/tutors/tofunmi-oyeniran.jpeg'
import AyobamiAladePic from '../assets/images/tutors/ayobami-alade.jpeg'
import FavourOladapoPic from '../assets/images/tutors/favour-oladapo.jpeg'
import TobaPic from '../assets/images/tutors/tovas-toba.jpg'
import SharonDavidPic from '../assets/images/tutors/sharon-david.jpg'
import BukunmiOlaopaPic from '../assets/images/tutors/oluwbukunmi-olaopa.jpeg'
import MaryAdenijiPic from '../assets/images/tutors/mary-adeniji.jpeg'
import OlamideChristianPic from '../assets/images/tutors/olamide-christian.jpeg'

const members = [
    {
        id: 1,
        name: "Joshua Oroge",
        title: "CEO/Founder",
        img: Tutorpic36,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Nil",
        course: "Mathematics",
        yearsattlt: "4 years and 9 months",
        level: "B.Sc Mathematics",
        passionate: "To see people grow and develop in all areas of life.",
        interest: [
            "Reading",
            "Swimming",
            "Cooking",
        ]
    },
    {
        id: 2,
        name: "Rose Oroge",
        title: "Human Resource Manager",
        img: Tutorpic5,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Nil",
        course: "English",
        yearsattlt: "3",
        level: "B.A English",
        passionate: "",
        interest: [
            "Travelling",
            "Reading",
        ]
    },
    {
        id: 39,
        name: "Oyeniran Tofunmi Elizabeth",
        title: "Head of Operations",
        isTutor: false,
        img: TofunmiOyeniranPic,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Nil",
        course: "Statistics",
        yearsattlt: "9 months",
        level: "B.Sc Statistics",
        passionate: "What makes me passionate as a Customer Care Rep is making a difference in the customer experience. I see my role as the bridge between the company and the customer. Every interaction I have can improve loyalty and trust, which is motivating.",
        interest: [
            "Sewing",
            "Designing",
            "Reading",
            "Listening to music",
            "Watching Movies",
        ]
    },
    {
        id: 14,
        name: "Priscilla Lasisi",
        title: "HR Officer",
        isTutor: false,
        img: Tutorpic27,
        nationality: "Nigerian",
        gender: "Female",
        subject: "English, VR",
        course: "English and Literary Studies",
        yearsattlt: "15 months",
        level: "400 Level",
        passionate: "I would say seeing my students grow, not just in their studies but in who they are. I’ve had students who barely spoke up in class become more confident, and others who struggled with basics like spelling make real progress. Watching that growth happen, seeing them realize what they’re capable of, that’s what makes this so fulfilling for me.",
        interest: [
            "Voice acting",
            "Script writing",
        ]
    },
    {
        id: 5,
        name: "Olamiji Onanuga",
        title: "HR Officer",
        img: Tutorpic28,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Nil",
        course: "Mathematics",
        yearsattlt: "2+ years",
        level: "B.Sc Mathematics",
        passionate: "Nil",
        interest: [
            "Technology",
        ]
    },
    {
        id: 20,
        name: "Blossom Adeyemi",
        title: "Customer Care Lead",
        isTutor: false,
        img: Tutorpic1,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Mathematics, English, Science, Verbal Reasoning ",
        course: "Nursing Science",
        yearsattlt: "2 years",
        level: "B.Sc Nursing (RN)",
        passionate: "I am passionate about providing students with the knowledge, skills and encouragement needed for then to learn, grow and achieve their goals. It is immensely rewarding to see a student finally grasp a concept that they were previously struggling with.",
        interest: [
            "Public health",
            "Film",
            "Fashion",
        ]
    },
    {
        id: 3,
        name: "Aaliyah Zemaiye",
        title: "Chief Marketing Officer",
        img: Tutorpic17,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Nil",
        course: "Biochemistry",
        yearsattlt: "",
        level: "B.Sc Biochemistry",
        passionate: "Nil",
        interest: [
            "",
            "",
        ]
    },
    {
        id: 9,
        name: "Oluwafemi Akinruntan",
        title: "Technical Lead",
        img: Tutorpic26,
        isTutor: true,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Mathematics, Coding, NVR & VR",
        course: "Mathematics",
        yearsattlt: "2+ year",
        level: "B.Sc Mathematics",
        passionate: "Nil",
        interest: [
            "Technology",
            "Football",
            "Artificial Intelligence",
            "Learning new things",
        ]
    },
    {
        id: 6,
        name: "Busayo Amadi",
        title: "Supervisor Lead",
        img: Tutorpic6,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Nil",
        course: "Nursing",
        yearsattlt: "3 years and 7 months",
        level: "B.Sc Nursing (RN)",
        passionate: "Nil",
        interest: [
            "Music",
            "Movies",
            "Trying new restaurants",
        ]
    },
    {
        id: 44,
        name: "Oluwabukunmi Olaopa",
        title: "Programs and Partnerships Lead",
        isTutor: false,
        img: BukunmiOlaopaPic,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Nil",
        course: "Health Promotion",
        yearsattlt: "",
        level: "B.Sc Health Promotion",
        passionate: "",
        interest: [
            "",
        ]
    },
    {
        id: 7,
        name: "Gideon Akintade",
        title: "CSR Team Lead",
        img: Tutorpic23,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Mathematics, English Language, Physics.",
        course: "Mathematics",
        yearsattlt: "4 years",
        level: "Bs.c Mathematics",
        passionate: "The ability to convey knowledge into another person, and being an aid in understanding is simply intriguing for me. I derive joy on seeing others learn, and that I'm a part of that process.",
        interest: [
            "Reading",
            "Dancing",
            "Singing",
            "Listening to good stuff",
        ]
    },
    {
        id: 46,
        name: "Olamide Christian",
        title: "CSR Deputy Lead",
        isTutor: true,
        img: OlamideChristianPic,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Mathematics, English Language and Non-Verbal Reasoning",
        course: "Food Science and Technology",
        yearsattlt: "Less than a year",
        level: "B.Sc Food Science and Technology",
        passionate: "Helping students unlock their potential and making complex topics easy to understand.",
        interest: [
            "Reading",
            "Teaching",
        ]
    },
    {
        id: 29,
        name: "Afolayan Opeyemi",
        title: "Supervisor",
        isTutor: true,
        img: Tutorpic18,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Science",
        course: "Biomedical Science",
        yearsattlt: "Less than a year",
        level: "500 Level",
        passionate: "The ability to really touch lives on a personal level. ",
        interest: [
            "Poetry",
            "Leadership",
            "Philosophy",
        ]
    },
    {
        id: 18,
        name: "Abisola Adefila",
        title: "Supervisor",
        isTutor: true,
        img: Tutorpic16,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Science, Biology and Chemistry ",
        course: "Biochemistry",
        yearsattlt: "2 years",
        level: "B.Sc Biochemistry",
        passionate: "What keeps me passionate as a tutor is the ability to help students learn and improve, bring smiles to their faces, and make a positive impact on their lives.",
        interest: [
            "Reading",
            "Movies",
            "Music",
        ]
    },
    {
        id: 15,
        name: "Mercy Adams",
        title: "Supervisor",
        isTutor: true,
        img: Tutorpic15,
        nationality: "Nigerian",
        gender: "Female",
        subject: "English language, Biology and Mathematics     ",
        course: "Biology education ",
        yearsattlt: "2+ Years",
        level: "B.Sc Biology Education",
        passionate: "Seeing my students finally understand and grasp a difficult concept, and witnessing their confidence and excitement grow as a result!",
        interest: [
            "Reading",
            "Drawing",
            "Impacting knowledge",
        ]
    },
    {
        id: 13,
        name: "Emmanuel Oziegbe",
        title: "Supervisor",
        isTutor: true,
        img: Tutorpic4,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Mathematics, Science",
        course: "Agriculture",
        yearsattlt: "3 years",
        level: "Bs.c Agriculture",
        passionate: "I am passionate about tutoring because I love helping students overcome challenges, build confidence, and achieve their academic goals. Seeing their growth and success inspires me to keep making a difference.",
        interest: [
            "Playing the piano",
            "Coding",
            "Meeting new people",
        ]
    },
    {
        id: 10,
        name: "Iseoluwa Akinduko",
        title: "Counselor",
        isTutor: true,
        img: Tutorpic35,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Nil",
        course: "Social Work",
        yearsattlt: "1 year",
        level: "B.Sc Social Work",
        passionate: "Nil",
        interest: [
            "Empowerment of Adolescents",
            "Child and Family Wellbeing",
            "International Policies",
            "Community Development",
        ]
    },
    {
        id: 16,
        name: "James Opara",
        title: "Tutor",
        isTutor: true,
        img: Tutorpic25,
        nationality: "Nigerian",
        gender: "Male",
        subject: "English Language, Mathematics, Sciences, Computer Science, Further Mathematics, Statistics",
        course: "Mathematics",
        yearsattlt: "5 years",
        level: " B.Sc Mathematics",
        passionate: "What makes me passionate as a tutor is the desire to make a positive impact on students' lives. I'm genuinely invested in the growth and development of young students, and I derive satisfaction from helping them unlock their potentials.",
        interest: [
            "Programming",
            "Meeting new people",
            "Mathematics",
            "Football",
            "Artificial Intelligence",
        ]
    },
    {
        id: 17,
        name: "Toyin Salami",
        title: "Coding Tutor",
        isTutor: true,
        img: Tutorpic19,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Coding",
        course: "Transport Tech",
        yearsattlt: "2 years",
        level: "Bachelor of Technology",
        passionate: "Patience and understanding are key to my passion as a tutor. I love seeing my students grow and develop their skills, and I find joy in helping them overcome challenges. It's incredibly rewarding to witness their progress and success.",
        interest: [
            "Sports",
        ]
    },
    {
        id: 22,
        name: "Praise Aderinola",
        title: "Tutor",
        isTutor: true,
        img: Tutorpic34,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Mathematics, Science, NVR",
        course: "Pharmacy",
        yearsattlt: "2 years",
        level: "600 Level",
        passionate: "I love breaking down concepts and It's so rewarding watching my student understand a that topic they've been struggling with, seeing them gain confidence in their abilities to solve so- called difficult questions makes tutoring incredibly fulfilling.",
        interest: [
            " Drug discovery",
            "Bioinformatics",
            "Fashion",
            "Reading fiction",
        ]
    },
    {
        id: 23,
        name: "Kemisola David",
        title: "Tutor",
        isTutor: true,
        img: Tutorpic37,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Maths, English, Science",
        course: "Medicine and Surgery",
        yearsattlt: "1 year",
        level: "600 Level",
        passionate: "My passion as a tutor comes from wanting to continue a beautiful cycle – as someone who has benefitted greatly from learning from some of the best teachers in the world, I'm happy to be able to be pass on knowledge in its simplest form to as many other people as I can. ",
        interest: [
            "Binge watching TV series",
            "Spending time with family and friends",
        ]
    },
    {
        id: 24,
        name: "Olumide Adisa",
        title: "Tutor",
        isTutor: true,
        img: Tutorpic38,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Mathematics, English,Physics,Biology, Chemistry ",
        course: "Medicine and Surgery",
        yearsattlt: "1 year",
        level: "600 Level",
        passionate: "As a tutor, I'm passionate about helping students achieve their goals and reach their full potential. I'm passionate about helping students build their confidence and Self-Esteem. I also love making learning fun for students",
        interest: [
            "Medicine",
            "Sports",
            "History",
            "Politics",
        ]
    },
    {
        id: 26,
        name: "Faith Jimoh",
        title: "Tutor",
        isTutor: true,
        img: Tutorpic33,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Science",
        course: "Veterinary Medicine",
        yearsattlt: "2 years",
        level: "600 Level",
        passionate: "The opportunity to make a positive impact on student's life.",
        interest: [
            "Helping students oversome challenges",
        ]
    },
    {
        id: 27,
        name: "Adeleke Owoade",
        title: "Yoruba Tutor",
        isTutor: true,
        img: Tutorpic9,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Yoruba Language",
        course: "Yoruba Education",
        yearsattlt: "Less than a year",
        level: "B.A(Ed) Yoruba Education",
        passionate: "My success is not about the amount i am making but number of lives touched positively in reference to my name.",
        interest: [
            "Impacting knowledge",
        ]
    },
    {
        id: 28,
        name: "Dongmo Bilson",
        title: "French Tutor",
        isTutor: true,
        img: Tutorpic8,
        nationality: "Camerounian",
        gender: "Male",
        subject: "French, Biology, Sciences",
        course: "Pharmacy",
        yearsattlt: "7 months",
        level: "B.Sc Pharmacy",
        passionate: "My passion for tutoring stems from a deep love for teaching, a desire to inspire students, and a commitment to making learning engaging and meaningful. I find joy in sharing the beauty of the French language, bridging cultural connections, and helping students succeed.Beyond academics, i see tutoring as a way to instill confidence, discipline, and curiosity, while also integrating values that shape character.",
        interest: [
            "Helping others",
            "Pharmacy",
            "Football",
            "Health",
            "Languages",
            "Music",
        ]
    },
    {
        id: 30,
        name: "Daniel Babalola",
        title: "Tutor",
        isTutor: true,
        img: Tutorpic21,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Mathematics, Further Mathematics, English, Economics & Physics",
        course: "Civil Engineering",
        yearsattlt: "8 Months",
        level: "B.Eng Civil Engineering",
        passionate: "I'm passionate about teaching because it's a privilege to witness the 'lightbulb' moments, to guide students towards their potential, and to know I'm contributing to their growth and future success.",
        interest: [
            "Football",
            "Teaching",
            "Strucutural design",
        ]
    },
    {
        id: 32,
        name: "Noah Ige",
        title: "Tutor",
        isTutor: true,
        img: Tutorpic31,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Mathematics, Science, Computer Science and Geography ",
        course: "Pure and Applied Mathematics ",
        yearsattlt: "8 Months",
        level: "Bachelor of Technology Degree",
        passionate: "The opportunity for me to impact younger generation and see them grow and impact others as well.",
        interest: [
            "Studying",
            "Travelling",
            "Connecting with people",
        ]
    },
    {
        id: 33,
        name: "Precious Momoh",
        title: "Tutor",
        isTutor: true,
        img: PreciousMomohPic,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Mathematics, English, Science, Chemistry, Physics, Non Verbal Reasoning",
        course: "Statistics",
        yearsattlt: "4 months",
        level: "Bachelor of Technology",
        passionate: "The smile on my students face when they finally realize 'it wasn't so hard after all'.",
        interest: [
            "Designing",
            "Traveling",
            "Trying new things",
        ]
    },
    {
        id: 34,
        name: "Adeogun Morenikeji Samson",
        title: "Tutor",
        isTutor: true,
        img: MorenikejPic,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Maths and Science",
        course: "Physiology",
        yearsattlt: "3 months",
        level: "400L",
        passionate: "The joy that comes with a child getting better at their academic stuff and the opportunity to impact them positively.",
        interest: [
            "Medicine",
            "Politics",
            "Tech",
            "Neuroscience",
        ]
    },
    {
        id: 35,
        name: "Bilal",
        title: "Emotional Response Marketing Strategist",
        isTutor: false,
        img: BilalPic,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Nil",
        course: "Pharmacy",
        yearsattlt: "",
        level: "600 Level",
        passionate: "",
        interest: [
            "Reading books",
            "Watching YouTube",
            "Speaking",
        ]
    },
    {
        id: 36,
        name: "Oyebode Victoria",
        title: "English Tutor",
        isTutor: true,
        img: VictoriaOyebodePic,
        nationality: "Nigerian",
        gender: "Female",
        subject: "English Language, English Literature",
        course: "English Education",
        yearsattlt: "3 months",
        level: "B.Ed & B.A in English Education",
        passionate: "I use the playway approach and also unlearn, learn, and relearn with my students. Therefore, learning again and again makes me more passionate.",
        interest: [
            "Dancing",
            "Making new friends",
            "Reading",
            "Movies",
            "Eating",
        ]
    },
    {
        id: 37,
        name: "Ukoje Onohije Adenaike",
        title: "Tutor",
        isTutor: true,
        img: UkojieAdanaikePic,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Mathematics and Biology",
        course: "Microbiology (B.Tech) / Early Childhood Studies (MA Education)",
        yearsattlt: "7 months",
        level: "Masters",
        passionate: "The opportunity I get to influence my students positively, both academically and morally.",
        interest: [
            "Teaching",
            "Reading",
            "Listening to Godly messages and music",
        ]
    },
    {
        id: 38,
        name: "Adesokan Immanuel Oluwanifise",
        title: "Tutor",
        isTutor: true,
        img: ImmanuelAdesokanPic,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Math, Coding, Music",
        course: "Computer Science",
        yearsattlt: "0 years",
        level: "100 Level",
        passionate: "My desire to make others become educated as well as knowledgeable.",
        interest: [
            "Music",
            "Basketball",
        ]
    },
    {
        id: 40,
        name: "Alade Ganiyu Ayobami",
        title: "Tutor",
        isTutor: true,
        img: AyobamiAladePic,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Maths and Chemistry",
        course: "Pharmacy",
        yearsattlt: "3 years",
        level: "B.Pharm",
        passionate: "I'm passionate about tutoring because I enjoy helping students truly understand concepts, not just memorize them. Seeing that moment when something finally 'clicks' for a learner is incredibly rewarding to me.",
        interest: [
            "Tech",
            "Finance",
        ]
    },
    {
        id: 41,
        name: "Oladapo Favour",
        title: "Tutor",
        isTutor: true,
        img: FavourOladapoPic,
        nationality: "Nigerian",
        gender: "Female",
        subject: "English Language, Literature and VR",
        course: "English and Literary Studies",
        yearsattlt: "1 year",
        level: "BA. English",
        passionate: "Tutoring allows me to express what I know and also at the same time impact others.",
        interest: [
            "Researching",
            "Understanding new ideas",
        ]
    },
    {
        id: 42,
        name: "Toba Adigun",
        title: "Tutor",
        isTutor: true,
        img: TobaPic,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Science, Maths and Music",
        course: "Civil Engineering / Biochemistry",
        yearsattlt: "Less than 1 year",
        level: "BSc, B.Engr",
        passionate: "What makes me a passionate tutor is my genuine commitment to helping every learner grow in understanding and confidence, not just complete lessons. I bring patience, clarity, and adaptability into every class.",
        interest: [
            "Music",
            "Teaching",
            "Tech",
        ]
    },
    {
        id: 43,
        name: "David Sharon",
        title: "Tutor",
        isTutor: true,
        img: SharonDavidPic,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Mathematics, Science, Biology, Physics, Chemistry, NVR",
        course: "Doctor of Pharmacy",
        yearsattlt: "9 months",
        level: "600 Level",
        passionate: "The joy of connecting with students and seeing them achieve understanding of difficult concepts.",
        interest: [
            "Reading",
            "Solving puzzles",
            "Going on adventures",
        ]
    },
    {
        id: 45,
        name: "Mary Adeniji",
        title: "Tutor",
        isTutor: true,
        img: MaryAdenijiPic,
        nationality: "Nigerian",
        gender: "Female",
        subject: "English & Spanish",
        course: "English Studies",
        yearsattlt: "2 months",
        level: "B.A English Studies",
        passionate: "The joy of being the bridge that connects a learner to a new language or a seemingly difficult concept in language.",
        interest: [
            "Designing",
            "Tennis",
            "Cooking",
        ]
    },
]

// Only tutors get a profile page; leadership/staff cards on Meet the Team aren't clickable.
// A member counts as a tutor if they're flagged isTutor and have a form profile or listed subjects.
const teachesSubjects = (member) =>
    typeof member.subject === 'string' && !['', 'nil'].includes(member.subject.trim().toLowerCase())

const team = members.map(member => {
    const profile = tutorProfiles[member.id] || null
    return { ...member, profile, hasProfilePage: Boolean(member.isTutor && (profile || teachesSubjects(member))) }
})

export default team
