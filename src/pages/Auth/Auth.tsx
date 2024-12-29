import { useState } from 'react';
import { EAuthPages } from './types';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import { Login } from '../../features/login/Login';

export const Auth = () => {
    const [selectedPage, setSelectedPage] = useState<EAuthPages>(
        EAuthPages.LOGIN,
    );

    const handleOpenRegister = () => {
        setSelectedPage(EAuthPages.REGISTER);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col">
                <Card className="max-w-full w-[340px] h-[450px]">
                    <CardBody className="overflow-hidden">
                        <Tabs
                            fullWidth
                            size="md"
                            selectedKey={selectedPage}
                            onSelectionChange={key => {
                                const selectedKey = key as EAuthPages;
                                setSelectedPage(selectedKey);
                            }}
                        >
                            <Tab key="login" title="Войти">
                                <Login handleRegister={handleOpenRegister} />
                            </Tab>
                            <Tab key="register" title="Регистрация">
                                <div>Register</div>
                            </Tab>
                        </Tabs>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};
