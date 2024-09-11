import React, { ReactNode } from "react";

import { AbstractFactory } from "./AbstractFactory";
import { LightButton, LightInput } from "./styles";

export class LightThemeFactory implements AbstractFactory {
    createTextInput(): ReactNode {
        return <LightInput placeholder="Enter your user name" />
    }

    createButton(): ReactNode {
        return <LightButton>Login</LightButton>
    }
}