'use client'
import React from 'react'
import ButtonUi from './ButtonUi'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '@/app/context/CartContext'
import { useRouter } from 'next/navigation'

const SpecialCard = ({ item }) => {
    const router = useRouter()
    const GoToMenuPage = () => {
        router.push('/menu')
    }
    return (
        <div data-aos='zoom-in' className='w-70 h-110 flex flex-col bg-mist-800'>

            <div className='h-55 w-full shrink-0 overflow-hidden'>
                <img src={item.src} alt={item.name} className='w-full h-full object-cover' />
            </div>

            <div className='flex flex-col justify-between flex-1 gap-5 p-5'>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-semibold text-lg text-primary-light'>{item.name}</h2>
                    <p className='text-sm line-clamp-3'>{item.desc}</p>
                </div>
                <span onClick={GoToMenuPage}>
                    <ButtonUi text={'Order Now'} />
                </span>
            </div>

        </div>
    )
}

export default SpecialCard


const MenuSectionCard = ({ item, index }) => {
    const isEven = index % 2 === 0;
    return (
        <div data-aos={isEven ? 'flip-left' : 'flip-right'} className={`text-white/80 flex max-lg:flex-col ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center justify-center w-full gap-10`}>
            <div className='w-full h-60 md:w-150 md:h-95 overflow-hidden'>
                <img src={item.src} alt={item.name} className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col items-start max-lg:items-center gap-2'>
                <h3 className='font-semibold text-xl text-primary-light'>{item.name}</h3>
                <h4 className='text-primary-dark text-center'>{item.ingredients}</h4>
                <h4 className='max-lg:text-center lg:w-10/12'>{item.desc}</h4>
                <span className='font-semibold text-lg text-primary-light'>${item.price}</span>
            </div>
        </div>
    )
}

export { MenuSectionCard }


export const DiningEventCard = ({ type, index }) => {
    const isEven = index % 2 === 0

    return (
        <div data-aos={isEven ? 'flip-left' : 'flip-right'} className='relative max-md:h-55 max-md:w-full max-lg:w-10/12 max-lg:h-70 w-250 h-85 2xl:w-300 mx-auto 2xl:h-100 overflow-hidden group'>

            <img
                src={type.src}
                alt={`${type.type} Dining`}
                className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
            />
            <div className={`absolute inset-0 ${isEven ? 'bg-linear-to-l' : 'bg-linear-to-r'} via-mist-900/90 to-mist-900`}></div>
            <div className={`relative z-10 h-full flex flex-col justify-center gap-2 px-10 ${isEven ? 'items-start' : 'items-end text-right'}`}>

                <div className={`flex items-baseline gap-3 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    <span className='text-xl md:text-3xl font-bold text-primary'>${type.price}</span>
                    <h2 className='font-heading font-semibold md:text-xl uppercase text-white tracking-widest'>
                        {type.type} Dining
                    </h2>
                </div>

                <div className='text-white/80 text-[10px] md:text-sm flex flex-col gap-1'>
                    {type.includes.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>

            </div>
        </div>
    )
}



const CartItemCard = ({ item }) => {
    const { removeFromCart, increaseQty, decreaseQty } = useCart()

    return (
        <div className='flex gap-3 py-4 border-b border-white/8 group'>

            <div className='w-16 h-16 shrink-0 overflow-hidden bg-mist-800 rounded-full'>
                <img src={item.src} alt={item.name} className='w-full h-full object-cover' />
            </div>

            <div className='flex flex-col gap-1 flex-1 min-w-0'>
                <span className='font-heading text-sm text-primary-light truncate'>{item.name}</span>
                <span className='text-xs text-white/40 truncate'>{item.ingredients}</span>

                <div className='flex items-center justify-between mt-1'>

                    <div className='flex items-center gap-2'>
                        <button
                            onClick={() => decreaseQty(item.itemId)}
                            className='w-6 h-6 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors cursor-pointer'
                        >
                            <Minus size={10} />
                        </button>
                        <span className='text-sm text-white/80 w-4 text-center'>{item.qty}</span>
                        <button
                            onClick={() => increaseQty(item.itemId)}
                            className='w-6 h-6 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors cursor-pointer'
                        >
                            <Plus size={10} />
                        </button>
                    </div>

                    <span className='font-heading text-sm font-semibold text-primary'>

                        <span className='text-xs'>PKR</span>  {(item.price * item.qty).toLocaleString()}
                    </span>
                </div>
            </div>

            <button
                onClick={() => removeFromCart(item.itemId)}
                className='self-start opacity-0 group-hover:opacity-100 transition-opacity text-white/30 hover:text-red-400 cursor-pointer'
            >
                <Trash2 size={14} />
            </button>

        </div>
    )
}

export { CartItemCard }




// ── Spice Dots ──────────────────────────────────────
const SpiceDots = ({ level }) => (
    <div className='flex gap-1'>
        {[1, 2, 3].map(i => (
            <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${i <= level ? 'bg-primary opacity-100' : 'bg-primary opacity-20'}`}
            />
        ))}
    </div>
)

const MenuCard = ({ item }) => {

    const { addToCart } = useCart()

    return (
        <div data-aos='zoom-in' className='w-full max-w-[320px] relative flex flex-col overflow-hidden cursor-pointer border border-primary/20 hover:border-primary/50 transition-all duration-300 group bg-mist-800'>

            <div className='relative overflow-hidden bg-mist-900 shrink-0 h-48'>
                <img
                    src={item.src} alt={item.name}
                    className='w-full h-full object-cover brightness-85 saturate-90 group-hover:scale-105 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300' />
                <button onClick={() => addToCart(item)} className='absolute bottom-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-primary hover:bg-primary-light text-black text-xs font-semibold tracking-widest uppercase px-3 py-1.5 border-none cursor-pointer'>
                    Order Now
                </button>
            </div>

            <div className='flex flex-col gap-3 p-5 flex-1'>
                <div className='flex items-start justify-between gap-3'>
                    <span style={{ fontFamily: 'serif' }} className='text-lg font-semibold text-primary-light leading-tight tracking-wide'>
                        {item.name}
                    </span>
                    <div className='flex-1 self-center border-b border-dotted border-primary/20 mx-2' />
                    <span style={{ fontFamily: 'serif' }} className='text-lg font-semibold text-primary whitespace-nowrap shrink-0'>
                        <span className='text-sm'>PKR</span> {Number(item.price).toLocaleString()}
                    </span>
                </div>

                <p className='text-xs tracking-widest uppercase text-white/40'>{item.ingredients}</p>
                <p className='text-sm text-white/55 leading-relaxed flex-1'>{item.desc}</p>

                <div className='flex items-center justify-between pt-3 border-t border-primary/10 mt-auto'>
                    <SpiceDots level={item.spice} />
                    <span className='text-xs tracking-widest uppercase text-primary border border-primary/20 px-2 py-0.5'>
                        {item.tag}
                    </span>
                </div>
            </div>
        </div>
    )
}

export { MenuCard }