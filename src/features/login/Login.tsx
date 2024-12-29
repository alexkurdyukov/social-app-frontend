import { useForm } from 'react-hook-form';
import { LOGIN_DEFAULT_VALUES } from './const';
import { ILoginForm } from './types';
import { Button, Input } from 'shared/components';
import { Link } from '@nextui-org/react';

interface ILoginProps {
    handleRegister: () => void;
}

export const Login = ({ handleRegister }: ILoginProps) => {
    const {
        control,
        formState: { isValid },
    } = useForm<ILoginForm>({
        mode: 'onChange',
        reValidateMode: 'onBlur',
        defaultValues: LOGIN_DEFAULT_VALUES,
    });
    return (
        <form className="flex flex-col gap-4">
            <Input
                control={control}
                name={'email'}
                label={'Email'}
                type="email"
                required="Обязательное поле"
            />
            <Input
                control={control}
                name={'password'}
                label={'Пароль'}
                type="password"
                required="Обязательное поле"
            />

            <p className="text-center text-small">
                <span>Нет аккаунта? </span>{' '}
                <Link size="sm" onPress={handleRegister}>
                    Зарегистрироваться
                </Link>
            </p>
            <div className="flex gap-2 justify-end">
                <Button
                    type="submit"
                    color="primary"
                    fullWidth
                    disabled={!isValid}
                >
                    Войти
                </Button>
            </div>
        </form>
    );
};
