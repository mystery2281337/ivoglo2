import { Input } from '../ui/input'
import {CheckBoxFiltersGroup} from ".//checkbox-filters-group"; 
interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={`mt-5 border-y border-y-neutral-100 py-6 pb-7 ${className}`}>
            <p className="font-bold mb-3">Цена от и до:</p>
            <div className="flex gap-3 mb-5">
                <Input type="number" placeholder="0" min={0} max={5000} defaultValue={0} />
                <Input type="number" min={100} max={5000} placeholder="5000" />
            </div>
            <CheckBoxFiltersGroup
                className="mt-5"
                title="Ингредиенты"
                limit={6}
                defaultItems={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моццарелла',
                        value: '2',
                    },
                    {
                        text: 'Чеснок',
                        value: '3',
                    },
                ]}
                items={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моццарелла',
                        value: '2',
                    },
                    {
                        text: 'Чеснок',
                        value: '3',
                    },
                    
                ]}
            />
        </div>
    );
}