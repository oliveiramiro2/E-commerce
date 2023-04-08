import React from "react";

import RegisterHomeProvider from "./registerUserHome";

const ECommProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => <RegisterHomeProvider>{children}</RegisterHomeProvider>;

export default ECommProvider;
