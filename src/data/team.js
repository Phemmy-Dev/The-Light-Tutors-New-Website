// Team members shown on /meet-our-team, in display order.
// Each member's full tutor profile (from the Tutor Profile Google Form) lives in tutorProfiles.js,
// keyed by the same id.
import tutorProfiles from './tutorProfiles'

import BlossomAdeyemiPic from '../assets/images/tutors/blossom-adeyemi.jpg'
import EmmanuelOziegbePic from '../assets/images/tutors/emmanuel-oziegbe.jpg'
import RoseOrogePic from '../assets/images/tutors/rose-oroge.jpg'
import BusayoAmadiPic from '../assets/images/tutors/busayo-amadi.jpg'
import DongmoBilsonPic from '../assets/images/tutors/dongmo-bilson.jpg'
import AdelekeOwoadePic from '../assets/images/tutors/adeleke-owoade.jpeg'
import MercyAdamsPic from '../assets/images/tutors/mercy-adams.jpg'
import AbisolaAdefilaPic from '../assets/images/tutors/abisola-adefila.jpg'
import AaliyahZemaiyePic from '../assets/images/tutors/aaliyah-zemaiye.jpg'
import AfolayanOpeyemiPic from '../assets/images/tutors/afolayan-opeyemi.jpg'
import ToyinSalamiPic from '../assets/images/tutors/toyin-salami.jpg'
import DanielBabalolaPic from '../assets/images/tutors/daniel-babalola.jpg'
import GideonAkintadePic from '../assets/images/tutors/gideon-akintade.jpg'
import JamesOparaPic from '../assets/images/tutors/james-opara.jpg'
import OluwafemiAkinruntanPic from '../assets/images/tutors/oluwafemi-akinruntan.jpeg'
import PriscillaLasisiPic from '../assets/images/tutors/priscilla-lasisi.jpg'
import OlamijiOnanugaPic from '../assets/images/tutors/olamiji-onanuga.jpeg'
import NoahIgePic from '../assets/images/tutors/noah-ige.jpg'
import FaithJimohPic from '../assets/images/tutors/faith-jimoh.jpg'
import PraiseAderinolaPic from '../assets/images/tutors/praise-aderinola.jpg'
import IseoluwaAkindukoPic from '../assets/images/tutors/iseoluwa-akinduko.jpg'
import JoshuaOrogePic from '../assets/images/tutors/joshua-oroge.jpg'
import KemisolaDavidPic from '../assets/images/tutors/kemisola-david.jpg'
import OlumideAdisaPic from '../assets/images/tutors/olumide-adisa.jpg'
import PreciousMomohPic from '../assets/images/tutors/precious-momoh.png'
import MorenikejiAdeogunPic from '../assets/images/tutors/morenikeji-adeogun.jpeg'
import VictoriaOyebodePic from '../assets/images/tutors/victoria-oyebode.jpg'
import UkojeAdenaikePic from '../assets/images/tutors/ukoje-adenaike.jpg'
import ImmanuelAdesokanPic from '../assets/images/tutors/immanuel-adesokan.jpg'
import TofunmiOyeniranPic from '../assets/images/tutors/tofunmi-oyeniran.jpeg'
import AyobamiAladePic from '../assets/images/tutors/ayobami-alade.jpg'
import FavourOladapoPic from '../assets/images/tutors/favour-oladapo.jpeg'
import TobaAdigunPic from '../assets/images/tutors/toba-adigun.jpg'
import SharonDavidPic from '../assets/images/tutors/sharon-david.jpg'
import BukunmiOlaopaPic from '../assets/images/tutors/bukunmi-olaopa.jpeg'
import MaryAdenijiPic from '../assets/images/tutors/mary-adeniji.jpeg'
import OlamideChristianPic from '../assets/images/tutors/olamide-christian.jpeg'
import VictoriaOkoliePic from '../assets/images/tutors/victoria-okolie.jpg'
import EmmanuelAmusanPic from '../assets/images/tutors/emmanuel-amusan.jpg'
import ElijahAkiodePic from '../assets/images/tutors/elijah-akiode.jpg'
import OlatomiwaOmotundePic from '../assets/images/tutors/olatomiwa-omotunde.jpg'
import IbtisamEjiwunmiPic from '../assets/images/tutors/ibtisam-ejiwunmi.jpg'
import SamuelKomolafePic from '../assets/images/tutors/samuel-komolafe.jpg'
import HappinessOlumorinPic from '../assets/images/tutors/happiness-olumorin.jpg'

const members = [
    {
        id: 1,
        name: "Joshua Oroge",
        title: "CEO/Founder",
        img: JoshuaOrogePic,
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
        img: RoseOrogePic,
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
        img: PriscillaLasisiPic,
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
        img: OlamijiOnanugaPic,
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
        img: BlossomAdeyemiPic,
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
        img: AaliyahZemaiyePic,
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
        id: 6,
        name: "Busayo Amadi",
        title: "Supervisor Lead",
        img: BusayoAmadiPic,
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
        id: 9,
        name: "Oluwafemi Akinruntan",
        title: "Supervisor and Technical Lead",
        img: OluwafemiAkinruntanPic,
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
        id: 29,
        name: "Afolayan Opeyemi",
        title: "Supervisor",
        isTutor: true,
        img: AfolayanOpeyemiPic,
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
        img: AbisolaAdefilaPic,
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
        img: MercyAdamsPic,
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
        img: EmmanuelOziegbePic,
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
        img: GideonAkintadePic,
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
        id: 10,
        name: "Iseoluwa Akinduko",
        title: "Counselor",
        isTutor: true,
        img: IseoluwaAkindukoPic,
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
        img: JamesOparaPic,
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
        img: ToyinSalamiPic,
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
        img: PraiseAderinolaPic,
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
        img: KemisolaDavidPic,
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
        img: OlumideAdisaPic,
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
        img: FaithJimohPic,
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
        img: AdelekeOwoadePic,
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
        img: DongmoBilsonPic,
        nationality: "Camerounian",
        gender: "Male",
        subject: "French, Sciences",
        course: "Pharmacy",
        yearsattlt: "2+ years",
        level: "Bachelor of Pharmacy",
        passionate: "I am passionate about teaching and helping students achieve academic excellence, particularly in French, English and Science. I enjoy simplifying complex concepts, building students' confidence and making lessons interactive, engaging and practical.",
        interest: [
            "Music and songwriting",
            "Music production",
            "Content creation",
            "Technology and AI",
            "Community health education",
        ]
    },
    {
        id: 30,
        name: "Daniel Babalola",
        title: "Tutor",
        isTutor: true,
        img: DanielBabalolaPic,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Mathematics, Further Mathematics, English & Physics",
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
        img: NoahIgePic,
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
        img: MorenikejiAdeogunPic,
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
        img: UkojeAdenaikePic,
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
        img: TobaAdigunPic,
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

    // From the Profile Creation for Personnel form (Nov 2026). Hidden until their photo is added: set img.
    {
        id: 47,
        name: "Victoria Okolie",
        title: "Igbo Tutor",
        isTutor: true,
        img: VictoriaOkoliePic,
        nationality: "Nigerian",
        gender: "Female",
        subject: "English Language, English Literature, Igbo Language, Non-Verbal Reasoning",
        course: "Social Studies Education",
        yearsattlt: "2 months",
        level: "B.A. Social Studies Education",
        passionate: "I find fulfilment in seeing my students improve, become more confident and develop an interest in learning. I believe every child has the ability to learn when given the right guidance, patience and encouragement.",
        interest: [
            "Teaching",
            "Learning new things",
            "Singing",
        ]
    },
    {
        id: 48,
        name: "Emmanuel Amusan",
        title: "Tutor",
        isTutor: true,
        img: EmmanuelAmusanPic,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Mathematics, Further Mathematics, Physics",
        course: "Physics",
        yearsattlt: "1 year",
        level: "B.Sc. Physics",
        passionate: "Impacting the younger generation.",
        interest: [
            "Meeting new students",
        ]
    },
    {
        id: 49,
        name: "Elijah Akiode",
        title: "Tutor",
        isTutor: true,
        img: ElijahAkiodePic,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Mathematics, Further Mathematics, Physics, Chemistry, Biology, Non-Verbal Reasoning",
        course: "Anatomy",
        yearsattlt: "1 year",
        level: "B.Sc. Anatomy",
        passionate: "I find fulfilment in helping students overcome learning challenges, discover their potential and grow in confidence.",
        interest: [
            "Music",
            "Sports",
            "Coding",
        ]
    },
    {
        id: 50,
        name: "Olatomiwa Omotunde",
        title: "Tutor",
        isTutor: true,
        img: OlatomiwaOmotundePic,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Mathematics, Physics, Chemistry, Biology, Verbal Reasoning, Non-Verbal Reasoning",
        course: "Medicine and Surgery",
        yearsattlt: "About 1 year",
        level: "600 Level",
        passionate: "God didn't create anyone to live just for himself; teaching is giving.",
        interest: [
            "Cooking",
            "Travelling",
            "Medicine",
        ]
    },
    {
        id: 51,
        name: "Favour Akande",
        title: "English Tutor",
        isTutor: true,
        img: null,
        nationality: "Nigerian",
        gender: "Female",
        subject: "English Language",
        course: "Education and English Language",
        yearsattlt: "3 months",
        level: "Bachelor's degree",
        passionate: "The opportunity to make a meaningful difference in a learner's life by helping them discover their abilities, build confidence and develop a genuine love for learning.",
        interest: [
            "Reading",
            "Listening to music",
        ]
    },
    {
        id: 52,
        name: "Ibtisam Ejiwunmi",
        title: "Tutor",
        isTutor: true,
        img: IbtisamEjiwunmiPic,
        nationality: "Nigerian",
        gender: "Female",
        subject: "English, Mathematics, Biology, Chemistry",
        course: "Human Anatomy",
        yearsattlt: "1 year",
        level: "B.Sc. Anatomy (Second Class Upper)",
        passionate: "I find fulfilment in helping students understand concepts they once found difficult and watching their confidence grow as they improve.",
        interest: [
            "Reading",
            "Travelling",
            "Watching movies",
            "Learning new skills",
            "Spending time with loved ones",
        ]
    },
    // No Tutor Profile form answers yet, so these two show their basic details only
    {
        id: 53,
        name: "Samuel Komolafe",
        title: "Tutor",
        isTutor: true,
        img: SamuelKomolafePic,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Mathematics, Chemistry, Physics, Biology",
        course: "Nursing Science",
        yearsattlt: "Less than a year",
        level: "400 Level",
        passionate: "The joy of making an impact.",
        interest: [
            "AI and technology",
        ]
    },
    {
        id: 54,
        name: "Happiness Olumorin",
        title: "Tutor",
        isTutor: true,
        img: HappinessOlumorinPic,
        nationality: "Nigerian",
        gender: "Female",
        subject: "English, Mathematics, Verbal Reasoning",
        course: "Marketing",
        yearsattlt: "2 months",
        level: "Second Class Lower degree",
        passionate: "The curiosity of the learners.",
        interest: [
            "Reading",
        ]
    },
]

// Only tutors get a profile page; leadership/staff cards on Meet the Team aren't clickable.
// A member counts as a tutor if they're flagged isTutor and have a form profile or listed subjects.
const teachesSubjects = (member) =>
    typeof member.subject === 'string' && !['', 'nil'].includes(member.subject.trim().toLowerCase())

// Members without a photo yet stay off the site (and their profile URL shows "not found") until img is set
const team = members.filter(member => member.img).map(member => {
    const profile = tutorProfiles[member.id] || null
    return { ...member, profile, hasProfilePage: Boolean(member.isTutor && (profile || teachesSubjects(member))) }
})

export default team
