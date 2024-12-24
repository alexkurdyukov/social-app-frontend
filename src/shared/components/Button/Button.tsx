import { Button as NextUIButton } from '@nextui-org/react';
import { TButtonColors, TButtonType } from './types';

interface IButtonProps {
    children: React.ReactNode;
    icon?: JSX.Element;
    className?: string;
    type?: TButtonType;
    fullWidth?: boolean;
    color?: TButtonColors;
}

export const Button: React.FC<IButtonProps> = ({
    children,
    icon,
    className,
    type,
    fullWidth,
    color,
}) => {
    return (
        <NextUIButton
            startContent={icon}
            size="lg"
            color={color ?? 'primary'}
            variant="light"
            type={type}
            fullWidth={fullWidth}
            className={className}
        >
            {children}
        </NextUIButton>
    );
};
