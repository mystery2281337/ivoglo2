import {cn} from "@/lib/utils";
interface Props {
    className?: string
}
const cats = ['Пиццы','Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты'];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({className}) => {
    return(
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2x1', className)}>
            
        </div>
    )
}