import { Container } from './container';
import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from'next/image';

interface Props {
className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
return (
<header className={cn('border border-b', className)}>
    <Container className='flex items-center justify-between py-8'>
     <div>
        <img src='pizza.svg' alt =''></img>
     </div>
     <div className = 'text'>
        <h1><p> NEXT PIZZA</p>
        вкусней уже некуда</h1>
     </div>

    </Container>
</header>
);
}