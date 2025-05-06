import { Plus } from "lucide-react";
import { Title } from "./title";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string; 
}

export const ProductCard: React.FC<Props> = ({ id, name, imageUrl, price, className }) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
                </div>
                <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
                <p className="text-sm text-gray-400">
                    Сырный цыпленок, Диабло, Чизбургер-пицца, Сырный цыпленок, Диабло, Чизбургер-пицца
                </p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-[20px]">
                        от <b>{price} P</b>
                    </span>
                    <Button variant="secondary">
                        <Plus size={20} className="mr-1" />
                        Добавить
                    </Button>
                </div>
            </Link>
        </div>
    );
}