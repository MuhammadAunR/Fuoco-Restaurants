import React from 'react'
import SpecialCard, { MenuCard } from './ui/CardUi'
import { menuData, sushiFood } from './Assets'

const SpecialSection = () => {
    return (

        <section className='bg-mist-900 min-h-screen h-fit text-white/80 pb-10 pt-40'>

            <div className='relative z-10 flex flex-col items-center gap-3 justify-center h-full text-white'>
                <h4 className='font-stylish text-lg md:text-xl tracking-wide'>Crafted With Passion</h4>
                <h1 className='text-3xl md:text-4xl font-bold uppercase text-center text-primary-light'>
                    Today's Signature Selection
                </h1>
                <p className='text-center pb-7'>
                    Our chef curates a refined selection of dishes each day, <br /> highlighting the finest seasonal ingredients from our Italian and European kitchen.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 px-5 items-stretch'>
                    {menuData[0].items.slice(1,4).map(item => {
                        return <MenuCard key={item.name} item={item} featured={item.featured} />
                    })}
                </div>
            </div>

            <section className='py-10 md:py-20'>
                <img src="../assets/luxurybg.webp" alt="Luxury Bg" className='w-full' />
            </section>

        </section>

    )
}

export default SpecialSection
