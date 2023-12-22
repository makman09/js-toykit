import React, { FC } from 'react';
import { HelloWorldWrapper } from './HelloWorld.styled';

interface HelloWorldProps {}

const HelloWorld: FC<HelloWorldProps> = () => (
 <HelloWorldWrapper data-testid="HelloWorld">
    HelloWorld Component
 </HelloWorldWrapper>
);

export default HelloWorld;
