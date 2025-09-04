// import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../Sections/NavBar/Navbar';
import Footer from '../../Sections/Footer/Footer';
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
// import teamData from '../../teamdata.json'; 


// TutorImgs
import Tutorpic1 from '../../../assets/images/tutors/1.jpg'
import Tutorpic2 from '../../../assets/images/tutors/2.jpg'
import Tutorpic4 from '../../../assets/images/tutors/4.jpg'
import Tutorpic5 from '../../../assets/images/tutors/5.jpg'
import Tutorpic6 from '../../../assets/images/tutors/6.jpg'
import Tutorpic7 from '../../../assets/images/tutors/7.jpg'
import Tutorpic8 from '../../../assets/images/tutors/8.jpg'
import Tutorpic9 from '../../../assets/images/tutors/9.jpg'
import Tutorpic11 from '../../../assets/images/tutors/11.png'
import Tutorpic15 from '../../../assets/images/tutors/15.jpg'
import Tutorpic16 from '../../../assets/images/tutors/16.jpg'
import Tutorpic17 from '../../../assets/images/tutors/17.jpg'
import Tutorpic18 from '../../../assets/images/tutors/18.jpg'
import Tutorpic19 from '../../../assets/images/tutors/19.jpg'
import Tutorpic21 from '../../../assets/images/tutors/21.jpg'
import Tutorpic22 from '../../../assets/images/tutors/22.jpg'
import Tutorpic23 from '../../../assets/images/tutors/23.jpg'
import Tutorpic25 from '../../../assets/images/tutors/25.jpg'
import Tutorpic26 from '../../../assets/images/tutors/26.jpg'
import Tutorpic27 from '../../../assets/images/tutors/27.jpg'
import Tutorpic28 from '../../../assets/images/tutors/28.jpg'
import Tutorpic30 from '../../../assets/images/tutors/30.jpg'
import Tutorpic31 from '../../../assets/images/tutors/31.jpg'
import Tutorpic33 from '../../../assets/images/tutors/33.jpg'
import Tutorpic34 from '../../../assets/images/tutors/34.jpg'
import Tutorpic35 from '../../../assets/images/tutors/35.jpg'
import Tutorpic36 from '../../../assets/images/tutors/36.jpg'
import Tutorpic37 from '../../../assets/images/tutors/37.jpg'
import Tutorpic38 from '../../../assets/images/tutors/38.jpg'
import Tutorpic39 from '../../../assets/images/tutors/39.jpg'
import Tutorpic3 from '../../../assets/images/tutors/3.jpg'


const teamData = [
    {   id: 1, 
        name: "Joshua Oroge", 
        title: "CEO/Founder", 
        img: Tutorpic36,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Nil",
        course: "First Class",
        yearsattlt: "4 years and 9 months",
        level: "Mathematics",
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
        title: "Chief Operating Officer", 
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
        id: 4, 
        name: "Erioluwa Oladeji", 
        title: "HR Manager", 
        img: Tutorpic7 ,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Nil",
        course: "Public Health",
        yearsattlt: "4+ years",
        level: "B.Sc Honours",
        passionate: "Nil",
        interest: [
            "Design",
            "Creativity",
            "Art",
            "Teaching",
            "Fashion",
            "Public health",
        ]
    },
    { 
        id: 5, 
        name: "Olamiji Onanuga", 
        title: "HR & Admin Assistant", 
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
        id: 6, 
        name: "Busayo Amadi", 
        title: "Tutor Supervisor", 
        img: Tutorpic6,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Nil",
        course: "Nursing",
        yearsattlt: "3 years and 7 months",
        level: "500 Level",
        passionate: "Nil",
        interest: [
            "Music",
            "Movies",
            "Trying new restaurants",
        ]
    },
    { 
        id: 7, 
        name: "Gideon Akintade",
        title: "Tutor Supervisor", 
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
        id: 8, 
        name: "Ese Emielu", 
        title: "Social Media Admin", 
        img: Tutorpic30,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Nil",
        course: "Economics",
        yearsattlt: "1 year 9 months",
        level: "Bs.c Economics",
        passionate: "Nil",
        interest: [
            "Well crafted stories",
            "Physical Sports",
            "Watching movies",
        ] 
    },
    { 
        id: 9, 
        name: "Oluwafemi Akinruntan", 
        title: "Tutor & Technical Manager", 
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
        id: 11, 
        name: "Rasheed Adeoti", 
        title: "Tutor",
        isTutor: true,
        img: Tutorpic3,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Mathematics",
        course: "Mathematics",
        yearsattlt: "2 years",
        level: "First Class",
        passionate: "Impacting Knowledge to younger generations ",
        interest: [
            "Researching",
            "Reading",
        ]
    },
    { 
        id: 12, 
        name: "Dolapo Obasa", 
        title: "Tutor", 
        isTutor: true,
        img: Tutorpic2,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Mathematics, Biology, Chemistry and Physics",
        course: "Medicine and Surgery",
        yearsattlt: "3 years",
        level: "400 Level",
        passionate: "My students are the most important part of this job to me, I take imparting knowledge very seriously.",
        interest: [
            "Reading",
            "Watching Anime",
            "Writing",
        ]
    },
    { 
        id: 13, 
        name: "Emmanuel Oziegbe", 
        title: "Tutor", 
        isTutor: true,
        img: Tutorpic4,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Mathematics, Science",
        course: "Agricultre",
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
        id: 14, 
        name: "Priscilla Lasisi", 
        title: "English Tutor", 
        isTutor: true,
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
        id: 15, 
        name: "Mercy Adams", 
        title: "Tutor", 
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
        id: 18, 
        name: "Abisola Adefila", 
        title: "Science Tutor", 
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
        id: 19, 
        name: "Ayodeji Akinsanya", 
        title: "Tutor",
        isTutor: true,
        img: Tutorpic11,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Mathematics, NVR, Physics, Science and Coding",
        course: "Mathematics",
        yearsattlt: "2 years",
        level: "B.Sc Mathematics",
        passionate: "My passion as a tutor comes from seeing my students grow in confidence and excel academically. I find great fulfillment in helping them overcome challenges and achieve their goals.",
        interest: [
            "Teaching",
            "Reading",
            "Gaming",
            "Solving puzzles",
        ]
    },
    { 
        id: 20, 
        name: "Blossom Adeyemi", 
        title: "Supervisor",
        isTutor: true,
        img: Tutorpic1,
        nationality: "Nigerian",
        gender: "Female",
        subject: "Mathematics, English, Science, Verbal Reasoning ",
        course: "Nursing Science",
        yearsattlt: "2 years",
        level: "500 Level",
        passionate: "I am passionate about providing students with the knowledge, skills and encouragement needed for then to learn, grow and achieve their goals. It is immensely rewarding to see a student finally grasp a concept that they were previously struggling with.",
        interest: [
            "Public health",
            "Film",
            "Fashion",
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
        level: "500 Level",
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
        level: "B.Sc Mathematics",
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
        level: "400 Level",
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
        level: "400 Level",
        passionate: "The opportunity to make a positive impact on student's life.",
        interest: [
            "Helping students oversome challenges",
        ]
    },
    { 
        id: 27, 
        name: "Adeleke Abidemi", 
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
        id: 29, 
        name: "Afolayan Opeyemi", 
        title: "Tutor",
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
        id: 30, 
        name: "Daniel Babalola", 
        title: "Tutor",
        isTutor: true,
        img: Tutorpic21,
        nationality: "Nigerian",
        gender: "Male",
        subject: "Mathematics, Further Mathematics, English, Economics & Physics",
        course: "8 Months",
        yearsattlt: "Less than a Year",
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
    img: Tutorpic31 ,
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
];

const TeamProfile = () => {
    const { id } = useParams();
    const selectedTutor = teamData.find(member => member.id === Number(id));

    if (!selectedTutor) {
        return <div className="text-center text-red-500 text-xl mt-10">Tutor not found.</div>;
    }

    return (
        <div className="team_profile bg-re">
            <Navbar />
            
            <div className="entire-container mt-44 mx-10 md:mx-20">
                <div className="back_btn_container mb-10">
                    <Link 
                    to="/meet-our-team" 
                    className="flex items-center gap-2 bg-tltorange w-fit px-4 py-2 rounded-full text-white hover:bg-orange-600 transition-colors duration-200"
                    >
                        <IoIosArrowBack className="text-lg" />
                        <span className="font-medium">Head Back</span>
                        </Link>
                </div>
                <div className="flex flex-col  bg-white shadow-lg overflow-hidden rounded-lg mb-6"> 
                    <div className="md:flex w-full">
                        <div className="left_side md:w-1/3 bg-gray-100 p-6 flex flex-col items-center justify-center">
                            <img src={selectedTutor.img} alt={selectedTutor.name} className="w-60 h-72 object-cover mx-auto rounded-lg mb-4" />
                            <h2 className="text-2xl font-bold text-center text-gray-800">{selectedTutor.name}</h2>
                            <p className="text-center mt-4 bg-tltorange text-white px-4 py-2 rounded-full text-sm font-semibold">{selectedTutor.title}</p>
                        </div>
                        <div className="right_side md:w-2/3 p-10">
                            <h2 className="text-xl font-bold mb-4">Personnel Information</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold text-gray-700 mb-2">
                                        Personal Details
                                    </h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Nationality: {selectedTutor.nationality}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Gender: {selectedTutor.gender}</span>
                                        </div>
                                        {selectedTutor.isTutor && (
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Subject taught: {selectedTutor.subject}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-700 mb-2"></h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Academic Background: {selectedTutor.course}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Class of Degree/Level: {selectedTutor.level}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Duration at TLT: {selectedTutor.yearsattlt}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {selectedTutor.isTutor && (
                                <>
                                    <h3 className="font-semibold text-gray-700 mt-6 mb-3">My mission as a tutor?</h3>
                                    <div className="text-gray-600 text-sm">
                                        {selectedTutor.passionate}
                                    </div>
                                </>
                            )}

                            <div className="mt-6">
                                <h3 className="font-semibold text-gray-700 mb-2">
                                    Interests:
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedTutor.interest.map((interest, id) => (
                                        <span
                                            key={id}
                                            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                                        >
                                            {interest}
                                        </span>
                                    ))}    
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default TeamProfile
