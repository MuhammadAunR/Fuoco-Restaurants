'use client'
import { menuData } from '@/components/Assets'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { MenuCard } from '@/components/ui/CardUi'

const tabs = [
    { id: 'all', label: 'All' },
    { id: 'italian', label: 'Italian' },
    { id: 'european', label: 'European' },
]


// ── Category Section ────────────────────────────────
const CategorySection = ({ cat }) => (
    <div className='mb-20'>
        <div className='flex items-center gap-5 mb-10'>
            <span className='font-heading' style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'rgba(245,190,50,0.1)', fontWeight: 300, lineHeight: 1, flexShrink: 0 }}>
                {cat.number}
            </span>
            <div className='flex flex-col gap-1'>
                <span className='font-stylish text-base text-primary'>{cat.tag}</span>
                <h2 className='font-heading' style={{ fontSize: 'clamp(1.4rem,3vw,2.2rem)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'primary-light' }}>
                    {cat.title}
                </h2>
            </div>
            <div className='flex-1 h-px' style={{ background: 'linear-gradient(to right, rgba(245,190,50,0.18), transparent)' }} />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 place-self-center'>
            {cat.items.map((item) => (
                <MenuCard key={item.name} item={item} featured={item.featured} />
            ))}
        </div>
    </div>
)

// ── Main Page ───────────────────────────────────────
export default function MenuPage() {

    const [activeTab, setActiveTab] = useState('all')

    const visibleCategories = activeTab === 'all'
        ? menuData
        : menuData.filter(c => c.id === activeTab)

    return (
        <div className='min-h-screen bg-mist-900 text-white overflow-x-hidden relative w-full'>

            <div
                className='fixed inset-0 pointer-events-none z-0 opacity-40'
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")` }}
            />

            <div className='relative min-h-[38vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-20 overflow-hidden'>
                <div className='absolute inset-0 pointer-events-none' style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,190,50,0.07) 0%, transparent 70%)' }} />

                <p data-aos='fade-up' className='font-stylish text-2xl sm:text-3xl text-primary mb-3'>
                    A Fine Dining Experience
                </p>
                <h1 data-aos='fade-up'
                    className='font-bold font-heading uppercase text-primary-light leading-none tracking-wide'
                    style={{ fontSize: 'clamp(3rem,8vw,6rem)', fontWeight: 300 }}
                >
                    Our Menu
                </h1>
                <div className='flex items-center gap-4 my-5'>
                    <div data-aos='fade-right' className='h-px w-14' style={{ background: 'linear-gradient(to left, transparent, #F5BE32)' }} />
                    <div data-aos='zoom-in' className='w-2 h-2 rotate-45 bg-primary' />
                    <div data-aos='fade-left' className='h-px w-14' style={{ background: 'linear-gradient(to right, transparent, #F5BE32)' }} />
                </div>
                <p data-aos='fade-up' className='text-xs tracking-widest uppercase text-white/35'>
                    Curated with the finest European and Italian ingredients · Lahore & Islamabad
                </p>
            </div>

            <div className='sticky top-0 z-50 border-b border-primary/18 px-4 sm:px-6'
                style={{ background: 'rgba(15,17,19,0.93)', backdropFilter: 'blur(12px)' }}>
                <div className='max-w-5xl mx-auto flex overflow-x-auto scrollbar-hide'>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`shrink-0 px-4 sm:px-6 py-4 text-xs tracking-widest uppercase border-b-2 transition-all duration-250 cursor-pointer bg-transparent ${activeTab === tab.id ? 'text-primary border-primary' : 'text-white/35 border-transparent hover:text-primary-light'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-14'>

                {visibleCategories.map((cat, i) => (
                    <div data-aos='fade-right' key={cat.id}>
                        <CategorySection cat={cat} />

                        {i === 0 && activeTab === 'all' && (
                            <div data-aos='fade-up' className='border-t border-b border-primary/18 py-10 my-4 mb-16 text-center'
                                style={{ background: 'linear-gradient(to right, transparent, rgba(245,190,50,0.06), transparent)' }}>
                                <p className='italic text-white/55 max-w-xl mx-auto leading-8 px-4 font-heading'
                                    style={{ fontSize: 'clamp(0.95rem,2vw,1.25rem)', fontWeight: 300, letterSpacing: '0.03em' }}>
                                    Fine dining is not just food — it is the story of the land, the harvest, and the hands that transform the finest ingredients into moments worth remembering.
                                </p>
                                <p className='text-xs tracking-widest uppercase text-primary mt-4'>Fuòco Kitchen</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}