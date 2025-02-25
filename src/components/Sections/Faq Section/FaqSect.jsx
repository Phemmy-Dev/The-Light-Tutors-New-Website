import { motion } from 'framer-motion';
import Accordion from "./Accordion";
import faqImg from "../../../assets/images/faqimg.png";

const FaqSect = () => {
  const faqItems = [
    {
      title: "What subjects and grade levels do you offer tutoring for?",
      answer: "We offer tuition in Mathematics, Further Mathematics, English Language, English Literature, Sciences, Biology, Chemistry, Physics, Geography, Computer Science, Programming Languages (HTML, CSS, Java, C+, C#, Scratch, etc), language courses (French and Yoruba), to mainly primary and secondary school students.",
    },
    {
      title: "What technology platform and tools do you use to teach?",
      answer: "Online platforms such as Zoom and Google Classroom are the major tools for class tutorials, assignments, and quizzes. We also make use of other learning materials such as audio-visuals from YouTube; slides, infographics, and course lessons from trusted websites for learning. Parents are also advised to provide their wards’ school curriculum for better teaching guidance.",
    },
    {
      title: "What is the duration and frequency of tutoring sessions?",
      answer: "The standard duration is 1 hour per session per subject per week. But this is subject to change from the tutor's advice and parents’ desire.",
    },
    {
      title: "How do I monitor my child’s progress?",
      answer: "Class reports are sent to a WhatsApp group after each class. This class report contains very detailed information about how each class went and also the child’s behaviour in classes. Using Google Classrooms as well, scores of assignments and tests are accessible to the parents. Progress reports are also sent if requested by parents. This is sent monthly but can be reviewed as desired by parents.",
    },
    {
      title: "What should I expect from a session?",
      answer: "Our expert tutors provide encouraging and empowering support. We follow a Socratic method of teaching that helps guide students through the learning process. Your tutor will work with you to help you understand how to solve problems on your own. Our tutors are patient, supportive, helpful, and kind. After each session, you’ll be equipped with the knowledge to help you with future assignments, tests, or exams.",
    },
    {
      title: "How many students are in a class?",
      answer: "Usually, tutoring is on a one-on-one basis. Hence, there is only one tutor to one student at a time. However, if parents want and agree to have their wards learn with other students, arrangements can be made for that.",
    },
    {
      title: "What materials/curriculum are used to teach?",
      answer: "Parents are advised to send their children’s school curriculum before lessons begin. However, in the event parents are unable to provide that, tutors generally use the open-access government education curriculum, e.g. Gov.UK National Curriculum.",
    },
    {
      title: "Do you teach extracurricular subjects?",
      answer: "Currently, we do not teach extracurricular activities. However, we hold extracurricular virtual events for our students, named camps. We usually have these events quarterly in a year. Each camp comprises fun-filled educational activities for our students. We also teach some language and programming subjects.",
    },
  ];

  return (
    <div className="my-28 px-4 py-12">
      {/* FAQ Heading */}
      <motion.h1
        className="font-bold text-2xl text-tltorange text-center mb-6 md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Frequently Asked Questions
      </motion.h1>

      <div className="container flex flex-col mx-auto md:flex-row">
        {/* FAQ Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img src={faqImg} alt="FAQ Illustration" />
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="p-4 rounded-lg md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.4 },
            },
          }}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Accordion title={item.title} answer={item.answer} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FaqSect;