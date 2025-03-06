import React from 'react';
import { Checkbox } from '../ui/checkbox';

export interface FilterCheckBoxProps {
    text: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked:boolean) => void;
    checked?: boolean;

}

export const FilterCheckBox: React.FC<FilterCheckBoxProps> = ({
    text,
    value,
    endAdornment,
    onCheckedChange,
    checked,
}) => {
    return (

        <div className = "flex items-center space-x-2" >
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked = {checked}
                value={value}
                className='rounded - [8px] w-6 h-6'
                id = {'checkbox - ${string(value)}'}
            />
            <label
                htmlFor='checkbox ${string}'
                className="leading-none cursor-pointer flex-1"
            >
                 {text}
            </label>
            {endAdornment}
        </div>
    );
};