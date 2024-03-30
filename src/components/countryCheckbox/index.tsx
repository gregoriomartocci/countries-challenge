import React from 'react';

interface CountryCheckboxProps {
    country: string;
    checked: boolean;
    onChange: () => void;
}

const CountryCheckbox: React.FC<CountryCheckboxProps> = ({
    country,
    checked,
    onChange,
}) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <label>{country}</label>
        </div>
    );
};

export default CountryCheckbox;
