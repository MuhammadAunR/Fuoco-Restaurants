'use client'
import React from 'react'
import ButtonUi from './ui/ButtonUi'
import { useRouter } from 'next/navigation'

const AboutSection = () => {
    const router = useRouter()

    const GoToAboutPage = () => {
        router.push('/about')
    }

    return (
        <>
            <section className='bg-mist-900 min-h-screen h-fit relative py-15'>
                <div data-aos='fade-up' className='relative z-10 flex flex-col items-center gap-3 justify-center h-full text-white/80'>
                    <h4 className='font-stylish text-xl tracking-wide'>About Us</h4>
                    <h1 className='text-4xl font-bold uppercase text-center text-primary-light'>
                        Our Story
                    </h1>
                    <p className='text-center'>
                        A journey for making successful luxury restaurant <br />with the best services
                    </p>
                </div>

                <section className='flex max-lg:flex-col items-center gap-10 mx-10 xl:mx-40 py-10'>

                    <div data-aos='fade-right' className='flex shrink-0'>
                        <img
                            src="../assets/chef-1.webp"
                            alt="Chef"
                            className='w-60 h-90 sm:w-80 sm:h-130 object-cover'
                        />
                        <div className='flex flex-col'>
                            <img
                                src="../assets/chef-2.webp"
                                alt="Chef"
                                className='w-50 h-45 sm:w-70 sm:h-65 object-cover'
                            />
                            <img
                                src="../assets/chef-3.webp"
                                alt="Chef"
                                className='w-50 h-45 sm:w-70 sm:h-65 object-cover'
                            />
                        </div>

                    </div>

                    <div data-aos='fade-left' className='flex flex-col items-start gap-6 text-white/80 lg:w-1/2'>
                        <p className='text-white/80 leading-relaxed'>
                            At <span className='text-primary font-semibold'>Fuòco</span>, our story began with a single vision — to bring the art of contemporary European and Italian cuisine to Pakistan. Founded by two brothers who share an obsession with exceptional food, <span className='text-primary font-semibold'>Fuòco</span> was built on the belief that dining is not just nourishment — it is an experience, a memory, a moment worth savouring.
                        </p>

                        <p className='text-white/80 leading-relaxed'>
                            We are not just a restaurant. We are a destination for those who appreciate the finer things in life. From our first table in Islamabad to our Lahore dining room, every visit to <span className='text-primary font-semibold'>Fuòco</span> is designed to feel personal, refined, and truly unforgettable.
                        </p>
                        <span onClick={GoToAboutPage} className=''>
                            <ButtonUi text={'More about us'} />
                        </span>
                    </div>

                </section>

            </section>
        </>
    )
}

export default AboutSection
