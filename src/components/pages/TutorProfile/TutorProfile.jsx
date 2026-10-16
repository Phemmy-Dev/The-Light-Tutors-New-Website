import PropTypes from 'prop-types';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../../Sections/NavBar/Navbar';
import Footer from '../../Sections/Footer/Footer';
import { IoIosArrowBack } from "react-icons/io";
import { FiAward, FiClock, FiUsers, FiBookOpen } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import team from '../../../data/team'

// Older profiles use "Nil" or blank strings for missing answers
const clean = (value) => {
    if (typeof value !== 'string') return null
    const trimmed = value.trim()
    return trimmed && trimmed.toLowerCase() !== 'nil' ? trimmed : null
}

const Card = ({ title, children, className = '' }) => (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 ${className}`}>
        <h2 className="text-sm font-semibold text-tltgreen uppercase tracking-wider mb-4">{title}</h2>
        {children}
    </div>
)

Card.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
}

const TeamProfile = () => {
    const { id } = useParams();
    const member = team.find(m => m.id === Number(id));

    // Leadership/staff don't have profile pages
    if (member && !member.hasProfilePage) {
        return <Navigate to="/meet-our-team" replace />
    }

    if (!member) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-400 text-lg mb-6">This team member could not be found.</p>
                    <Link
                        to="/meet-our-team"
                        className="inline-flex items-center gap-2 bg-tltorange text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors"
                    >
                        <IoIosArrowBack />
                        Back to Team
                    </Link>
                </div>
            </div>
        );
    }

    // Prefer the new form answers, fall back to the older profile fields
    const profile = member.profile || {}
    const subjects = profile.subjects
        || (clean(member.subject) ? member.subject.split(/,| and |&/).map(s => s.trim()).filter(Boolean) : [])
    const qualification = clean(profile.qualification) || clean(member.level)
    const field = clean(profile.field) || clean(member.course)
    const bio = profile.bio || []
    const passion = bio.length === 0 ? clean(member.passionate) : null
    const interests = (member.interest || []).map(i => i.trim()).filter(Boolean)
    const teaches = member.isTutor && subjects.length > 0

    const facts = [
        { label: "Teaching experience", value: clean(profile.experience), icon: FiClock },
        { label: "Age groups", value: clean(profile.ageGroups), icon: FiUsers },
        { label: "Qualification", value: qualification, icon: FiAward },
    ].filter(f => f.value)

    return (
        <div className="team_profile min-h-screen bg-gray-50">
            <Navbar />

            {/* Solid teal header band */}
            <div className="bg-tltgreen pt-36 md:pt-44 pb-28 md:pb-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link
                        to="/meet-our-team"
                        className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors"
                    >
                        <IoIosArrowBack className="text-base" />
                        All Team Members
                    </Link>
                </div>
            </div>

            {/* Profile content pulled up into the header */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-20 relative z-10 pb-20">

                {/* Profile card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 mb-6">
                    <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-40 h-48 md:w-48 md:h-56 object-cover rounded-xl shadow-sm flex-shrink-0"
                        />
                        <div className="flex flex-col justify-center min-w-0">
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1.5">
                                {member.name}
                            </h1>
                            <p className="text-tltorange font-semibold mb-5">{member.title}</p>

                            {teaches && (
                                <div className="flex flex-wrap gap-2">
                                    {subjects.map(subject => (
                                        <span key={subject} className="bg-tltgreen/5 text-tltgreen px-3 py-1 rounded-full text-sm font-medium">
                                            {subject}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Quick facts */}
                    {facts.length > 0 && (
                        <div className={`grid gap-4 mt-8 pt-8 border-t border-gray-100 ${facts.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                            {facts.map(({ label, value, icon: Icon }) => (
                                <div key={label} className="flex gap-3">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-tltorange/10 text-tltorange flex-shrink-0">
                                        <Icon className="w-5 h-5" />
                                    </span>
                                    <div>
                                        <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                                        <p className="text-gray-800 font-medium leading-snug">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* About */}
                {bio.length > 0 && (
                    <Card title="About me" className="mb-6">
                        <div className="space-y-4">
                            {bio.map((paragraph, idx) => (
                                <p key={idx} className="text-gray-700 leading-relaxed md:text-lg">{paragraph}</p>
                            ))}
                        </div>
                    </Card>
                )}

                {/* Teaching style */}
                {clean(profile.teachingStyle) && (
                    <Card title="How I teach" className="mb-6">
                        <p className="text-gray-700 leading-relaxed pl-4" style={{ borderLeft: '3px solid #fc8402' }}>
                            {profile.teachingStyle}
                        </p>
                    </Card>
                )}

                {/* Older profiles: what drives them */}
                {passion && (
                    <Card title={member.isTutor ? "What drives me as a tutor" : "What drives me"} className="mb-6">
                        <p className="text-gray-700 leading-relaxed pl-4" style={{ borderLeft: '3px solid #fc8402' }}>
                            {passion}
                        </p>
                    </Card>
                )}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Qualification is already in the quick facts above */}
                    {field && (
                        <Card title="Field of study">
                            <p className="text-gray-800 leading-relaxed">{field}</p>
                        </Card>
                    )}

                    {interests.length > 0 && (
                        <Card title="Interests">
                            <div className="flex flex-wrap gap-2">
                                {interests.map((interest, idx) => (
                                    <span key={idx} className="bg-gray-50 text-gray-700 border border-gray-200 px-3.5 py-1.5 rounded-full text-sm">
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    )}
                </div>

                {/* Parent call to action */}
                {teaches && (
                    <div className="bg-tltgreen rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                        <div className="flex gap-4">
                            <FiBookOpen className="w-8 h-8 text-tltorange flex-shrink-0 mt-1" />
                            <div>
                                <h2 className="text-white text-xl font-bold mb-1">Think {member.name} is a good fit?</h2>
                                <p className="text-white/75">Chat with us and we&apos;ll arrange a free session for your child.</p>
                            </div>
                        </div>
                        <a
                            href="https://api.whatsapp.com/send?phone=2348153418503"
                            className="inline-flex items-center justify-center gap-2 bg-tltorange text-white font-bold rounded-full px-6 py-3 whitespace-nowrap hover:bg-white hover:text-tltgreen transition-colors duration-300"
                        >
                            <FaWhatsapp className="w-5 h-5" />
                            Chat on WhatsApp
                        </a>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )
}

export default TeamProfile
