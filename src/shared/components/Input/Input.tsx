import { Input as NextUIInput } from '@nextui-org/react';
import { Control, useController } from 'react-hook-form';

interface IInputProps {
     
    // @ts-ignore
    control: Control<any>;
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
    required?: string;
    content?: JSX.Element;
}

export const Input = ({
    control,
    name,
    label,
    placeholder,
    type,
    required,
    content,
}: IInputProps) => {
    const {
        field,
        fieldState: { invalid },
        formState: { errors },
    } = useController({
        name,
        control,
        rules: { required },
    });
    return (
        <NextUIInput
            value={field.value}
            name={field.name}
            onChange={field.onChange}
            onBlur={field.onBlur}
            id={name}
            label={label}
            type={type}
            placeholder={placeholder}
            isInvalid={invalid}
            errorMessage={`${errors[name]?.message}`}
            endContent={content}
        ></NextUIInput>
    );
};
