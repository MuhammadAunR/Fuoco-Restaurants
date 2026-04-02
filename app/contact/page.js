'use client'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

// ── Data ──────────────────────────────────────────────
const contactInfo = [
    {
        icon: <MapPin size={18} />,
        label: 'Our Locations',
        value: 'Gulberg II, Lahore',
        sub: 'F-6 Markaz, Islamabad',
    },
    {
        icon: <Phone size={18} />,
        label: 'Reservations',
        value: 'Lahore: 0305-2101111',
        sub: 'Islamabad: 0302-6333367',
    },
    {
        icon: <Mail size={18} />,
        label: 'Email',
        value: 'info@fuoco.com.pk',
        sub: 'We reply within 24 hours',
    },
    {
        icon: <Clock size={18} />,
        label: 'Hours',
        value: 'Lahore: 1PM - 12AM',
        sub: 'Islamabad: 1PM - 1AM',
    },
]

const socials = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="32" height="32" viewBox="0 0 32 32">
            <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path>
        </svg>,
        label: 'Instagram',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="32" height="32" viewBox="0 0 32 32">
            <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
        </svg>,
        label: 'Facebook',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="32" height="32" viewBox="0 0 32 32">
            <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
        </svg>,
        label: 'Twitter',
    },
]

const subjects = ['Table Reservation', 'Private Dining', 'Corporate Event', 'Menu Enquiry', 'Feedback']

// ── Divider ───────────────────────────────────────────
const Divider = () => (
    <div className='flex items-center gap-3'>
        <span data-aos='fade-right' className='h-px flex-1' style={{ background: 'linear-gradient(to right, transparent, rgba(245,190,50,0.4))' }} />
        <span data-aos='zoom-in' className='w-1.5 h-1.5 rotate-45 bg-primary' />
        <span data-aos='fade-left' className='h-px flex-1' style={{ background: 'linear-gradient(to left, transparent, rgba(245,190,50,0.4))' }} />
    </div>
)

// ── Main Page ─────────────────────────────────────────
export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', branch: '', subject: '', message: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [focused, setFocused] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
    }

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Required'
        if (!form.email.trim()) e.email = 'Required'
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
        if (!form.subject) e.subject = 'Please select a subject'
        if (!form.message.trim()) e.message = 'Required'
        return e
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const e2 = validate()
        if (Object.keys(e2).length > 0) { setErrors(e2); return }
        setSubmitted(true)
    }

    const inputBase = `w-full bg-transparent outline-none text-white/80 text-sm transition-all duration-300 pb-2 placeholder:text-white/20`
    const borderBase = (name) => `border-b ${focused === name ? 'border-primary' : 'border-white/15'} transition-colors duration-300`

    // ── Success ──────────────────────────────────────────
    if (submitted) {
        return (
            <div className='min-h-screen bg-mist-900 flex items-center justify-center px-6'>
                <div data-aos='fade-up' className='flex flex-col items-center gap-6 text-center max-w-md'>
                    <div className='w-16 h-16 border border-primary flex items-center justify-center'>
                        <CheckCircle size={28} className='text-primary' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='font-stylish text-2xl text-primary'>Thank You</span>
                        <h2 className='font-heading text-3xl font-bold uppercase tracking-widest text-primary-light'>
                            Message Sent
                        </h2>
                    </div>
                    <p className='text-white/50 leading-7 text-sm'>
                        Thank you for reaching out, <span className='text-primary'>{form.name}</span>. Our team will get back to you at <span className='text-primary'>{form.email}</span> within 24 hours.
                    </p>
                    <button
                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                        className='text-xs uppercase tracking-widest text-primary border-b border-primary/30 hover:border-primary transition-colors duration-200 pb-0.5'
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-mist-900 text-white relative overflow-x-hidden'>

            <div className='fixed top-0 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full pointer-events-none'
                style={{ background: 'radial-gradient(ellipse, rgba(245,190,50,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }} />

            <div className='relative flex flex-col items-center justify-center text-center px-6 pt-34 pb-16 overflow-hidden'>
                <div className='absolute inset-0 pointer-events-none'
                    style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,190,50,0.05) 0%, transparent 70%)' }} />
                <span data-aos='fade-up' className='font-stylish text-2xl sm:text-3xl text-primary mb-3'>
                    Get in Touch
                </span>
                <h1 data-aos='fade-up' className='font-heading font-bold uppercase text-primary-light leading-none mb-4'
                    style={{ fontSize: 'clamp(2.2rem,7vw,5rem)', letterSpacing: '0.1em' }}>
                    Contact Us
                </h1>
                <div className='w-48'>
                    <Divider />
                </div>
                <p data-aos='fade-up' className='text-white/40 text-xs tracking-widest uppercase mt-4'>
                    Reserve a table or enquire about your next dining experience
                </p>
            </div>

            <div data-aos='fade-down' className='max-w-6xl mx-auto px-5 sm:px-8 pb-24 flex flex-col gap-0'>

                <div className='grid grid-cols-1 lg:grid-cols-5 gap-0'>

                    <div className='lg:col-span-2 border border-primary/15 bg-mist-800/50 p-8 sm:p-10 flex flex-col gap-10 lg:border-r-0 lg:border-b-0'>

                        <div className='flex flex-col gap-3'>
                            <span className='font-stylish text-xl text-primary'>Fuòco</span>
                            <p className='text-white/50 text-sm leading-7'>
                                Whether you are planning an intimate dinner, celebrating a special occasion, or simply wish to enquire about our menu and reservations — our team across Lahore and Islamabad is always delighted to welcome you.
                            </p>
                        </div>

                        <Divider />

                        <div className='flex flex-col gap-6'>
                            {contactInfo.map(({ icon, label, value, sub }) => (
                                <div key={label} className='flex items-start gap-4 group'>
                                    <div className='w-9 h-9 border border-primary/25 flex items-center justify-center text-primary shrink-0 group-hover:border-primary/60 group-hover:bg-primary/8 transition-all duration-300'>
                                        {icon}
                                    </div>
                                    <div className='flex flex-col gap-0.5'>
                                        <span className='text-white/35 text-xs uppercase tracking-widest font-heading'>{label}</span>
                                        <span className='text-white/80 text-sm'>{value}</span>
                                        <span className='text-white/35 text-xs'>{sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Divider />

                        <div className='flex flex-col gap-3'>
                            <p className='text-white/35 text-xs uppercase tracking-widest font-heading'>Follow Us</p>
                            <div className='flex flex-row gap-3 flex-wrap items-center justify-center'>
                                {socials.map(({ icon, label }) => (
                                    <div key={label} className='flex items-center gap-3 group cursor-pointer'>
                                        <span className='text-primary/60 group-hover:text-primary transition-colors duration-200'>
                                            {icon}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className='lg:col-span-3 border border-primary/15 bg-mist-800/30 p-8 sm:p-12 flex flex-col gap-8'>

                        <div className='flex flex-col gap-1'>
                            <span className='font-stylish text-xl text-primary'>Send a Message</span>
                            <p className='text-white/35 text-xs uppercase tracking-widest font-heading'>All fields marked * are required</p>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <label className='text-white/35 text-xs uppercase tracking-widest font-heading'>
                                Subject <span className='text-primary'>*</span>
                            </label>
                            <div className='flex flex-wrap gap-2'>
                                {subjects.map(s => (
                                    <button
                                        key={s}
                                        type='button'
                                        onClick={() => { setForm(prev => ({ ...prev, subject: s })); setErrors(prev => ({ ...prev, subject: '' })) }}
                                        className={`text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-200 cursor-pointer ${form.subject === s
                                            ? 'border-primary bg-primary/10 text-primary'
                                            : 'border-white/15 text-white/40 hover:border-primary/40 hover:text-white/70'}`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                            {errors.subject && <p className='text-red-400 text-xs'>{errors.subject}</p>}
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-white/35 text-xs uppercase tracking-widest font-heading'>
                                    Full Name <span className='text-primary'>*</span>
                                </label>
                                <div className={borderBase('name')}>
                                    <input
                                        type='text' name='name' value={form.name}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('name')}
                                        onBlur={() => setFocused('')}
                                        placeholder='Ahmed Khan'
                                        className={inputBase}
                                    />
                                </div>
                                {errors.name && <p className='text-red-400 text-xs'>{errors.name}</p>}
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-white/35 text-xs uppercase tracking-widest font-heading'>
                                    Email <span className='text-primary'>*</span>
                                </label>
                                <div className={borderBase('email')}>
                                    <input
                                        type='email' name='email' value={form.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('email')}
                                        onBlur={() => setFocused('')}
                                        placeholder='ahmed@example.com'
                                        className={inputBase}
                                    />
                                </div>
                                {errors.email && <p className='text-red-400 text-xs'>{errors.email}</p>}
                            </div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-white/35 text-xs uppercase tracking-widest font-heading'>
                                    Phone Number
                                </label>
                                <div className={borderBase('phone')}>
                                    <input
                                        type='tel' name='phone' value={form.phone}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('phone')}
                                        onBlur={() => setFocused('')}
                                        placeholder='+92 300 0000000'
                                        className={inputBase}
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-white/35 text-xs uppercase tracking-widest font-heading'>
                                    Preferred Branch
                                </label>
                                <div className={borderBase('branch')}>
                                    <select
                                        name='branch' value={form.branch}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('branch')}
                                        onBlur={() => setFocused('')}
                                        className={`${inputBase} cursor-pointer`}
                                        style={{ background: 'transparent' }}
                                    >
                                        <option value='' disabled style={{ background: '#1c2124' }}>Select Branch</option>
                                        <option value='Lahore' style={{ background: '#1c2124' }}>Lahore — Gulberg II</option>
                                        <option value='Islamabad' style={{ background: '#1c2124' }}>Islamabad — F-6 Markaz</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-white/35 text-xs uppercase tracking-widest font-heading'>
                                Message <span className='text-primary'>*</span>
                            </label>
                            <div className={borderBase('message')}>
                                <textarea
                                    name='message' value={form.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused('')}
                                    placeholder='Tell us about your reservation, special occasion, or any enquiry...'
                                    rows={5}
                                    className={`${inputBase} resize-none`}
                                />
                            </div>
                            {errors.message && <p className='text-red-400 text-xs'>{errors.message}</p>}
                        </div>

                        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2'>
                            <p className='text-white/25 text-xs leading-5'>
                                By sending this message you agree to our privacy policy. Your details will never be shared with third parties.
                            </p>
                            <button
                                onClick={handleSubmit}
                                className='relative flex items-center gap-3 uppercase font-heading font-semibold tracking-widest text-sm px-8 py-3 cursor-pointer overflow-hidden text-primary bg-primary/10 hover:bg-transparent transition-all duration-300 group shrink-0'
                            >
                                <span className='absolute top-0 left-0 h-full w-0.5 bg-current' />
                                <span className='absolute top-0 right-0 h-full w-0.5 bg-current' />
                                <span className='absolute top-0 left-0 h-0.5 w-1/2 bg-current' />
                                <span className='absolute top-0 right-0 h-0.5 w-0 bg-current group-hover:w-1/2 transition-all duration-300 ease-out' />
                                <span className='absolute bottom-0 right-0 h-0.5 w-1/2 bg-current' />
                                <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-current group-hover:w-1/2 transition-all duration-300 ease-out' />
                                <span className='relative z-10'>Send Message</span>
                                <Send size={14} className='relative z-10' />
                            </button>
                        </div>

                    </div>
                </div>

                <div className='relative border border-primary/15 border-t-0 overflow-hidden grid grid-cols-1 sm:grid-cols-2'>
                    <span className='absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/40 z-10' />
                    <span className='absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/40 z-10' />
                    <span className='absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/40 z-10' />
                    <span className='absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/40 z-10' />

                    <div>
                        <p className='text-xs uppercase tracking-widest text-primary/50 px-3 pt-3 pb-1'>Lahore — Gulberg II</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.9725470328135!2d74.35248877559997!3d31.52491394691756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919055c1ab90021%3A0xcb8a60327001a984!2sFuoco!5e0!3m2!1sen!2s!4v1775117828473!5m2!1sen!2s" width='100%'
                            height='260'
                            style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
                            allowFullScreen=""
                            loading="lazy" referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>

                    <div className='sm:border-l border-primary/15'>
                        <p className='text-xs uppercase tracking-widest text-primary/50 px-3 pt-3 pb-1'>Islamabad — F-6 Markaz</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.1656884719964!2d73.07649657568042!3d33.730531434649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf5e373fa03d%3A0xa86d2a16fe813436!2sFuoco!5e0!3m2!1sen!2s!4v1775117996604!5m2!1sen!2s"
                            width='100%'
                            height='260'
                            style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>
        </div>
    )
}