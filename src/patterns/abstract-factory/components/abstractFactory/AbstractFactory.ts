import React, { ReactNode } from 'react';

export interface AbstractFactory {
    createTextInput(): ReactNode;
    createButton(): ReactNode;
}