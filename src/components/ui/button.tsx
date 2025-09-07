import * as React from 'react';
import { cn } from '../../utils/commonUtils';

const VARIANT_CLASSES = {
    default: 'bg-primary text-secondary hover:bg-prime',
    outline: 'border border-primary text-txtColor hover:bg-gray-100',
} as const;

const SIZE_CLASSES = {
    small: 'h-8 px-3 text-sm',
    large: 'h-12 px-6 text-lg',
} as const;

type TButton = React.ComponentProps<'button'> & {
    text: string;
    variant: keyof typeof VARIANT_CLASSES;
    size: keyof typeof SIZE_CLASSES;
    disabled?: boolean;

    onClick?: () => void;
};

export const Button = (props: TButton) => {
    const { variant = 'default', size = 'small', text, disabled, onClick, ...btnProps } = props;
    const commonClass = 'rounded-sm';

    const handleButtonClick = () => {
        if (disabled) return;

        onClick?.();
    };

    return (
        <button
            data-slot="button"
            disabled={disabled}
            onClick={handleButtonClick}
            className={cn(
                commonClass,
                VARIANT_CLASSES[variant],
                SIZE_CLASSES[size],
                'cursor-pointer',
                'border-rad',
                { 'opacity-80': disabled },
                { 'cursor-not-allowed': disabled },
            )}
            {...btnProps}
        >
            {text}
        </button>
    );
};
