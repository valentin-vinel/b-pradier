"use client"

import { setAgeVerified } from '@/lib/shopify';
import { useState, useEffect } from 'react';


interface AgeGateProps {
  cartId?: string;
}

export default function AgeGate({ cartId }: AgeGateProps) {
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        const verified = localStorage.getItem('ageVerified');
        if (verified === 'true') setIsVerified(true);
    }, []);

    const handleConfirm = async () => {
        localStorage.setItem('ageVerified', 'true');
        setIsVerified(true);

        // Stockage légal dans Shopify via Storefront API
        if (cartId) {
            await setAgeVerified(cartId);
        }

    };

    const handleUnderage = () => {
        window.location.href = "https://google.com";
    };

    if (isVerified) return null;

    return (
        <div className="w-full h-screen fixed  flex backdrop-blur-md">
        <div className="modal max-w-[600px] h-[200px] m-auto text-center p-4 justify-center items-center bg-white flex flex-col gap-2 border-2">
            <h2 className='font-bold'>Vérification d'âge</h2>
            <p className='mb-4'>Vous devez avoir 18 ans ou plus pour accéder à ce site.</p>
            <button onClick={handleConfirm} className='text-red hover:cursor-pointer hover:font-bold'>
                J'ai 18 ans ou plus
            </button>
            <button onClick={handleUnderage} className='text-gray-700 hover:cursor-pointer hover:font-bold'>
                Je n'ai pas 18 ans
            </button>
        </div>
        </div>
    );
}