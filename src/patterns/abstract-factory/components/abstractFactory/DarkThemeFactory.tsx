import React, { ReactNode } from "react";

import { AbstractFactory } from "./AbstractFactory";
import { DarkButton, DarkInput } from "./styles";

export class DarkThemeFactory implements AbstractFactory {
    createTextInput(): ReactNode {
        return <DarkInput placeholder="Enter your user name" />
    }

    createButton(): ReactNode {
        return <DarkButton>Login</DarkButton>
    }
}