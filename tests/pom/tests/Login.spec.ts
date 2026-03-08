import { test, expect } from "../Fixtures/Fixtures";


test("TC-1: The user should login successfully", async ({ page, login }) => {

    await login.login('standard_user', 'secret_sauce');
    await login.verifyLogin();

});

test("TC-2: The user should logout successfully", async ({ page, login }) => {

    await login.login('standard_user', 'secret_sauce');
    await login.logout();
    await login.verifyLogout();
});

