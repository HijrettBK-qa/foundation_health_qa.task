import { test } from "../fixture/fixtures.ts";


test("TC-1: The user should login successfully", async ({ login }) => {

    await login.login('standard_user', 'secret_sauce');
    await login.verifyLogin();

});

test("TC-2: The user should logout successfully", async ({ login }) => {

    await login.login('standard_user', 'secret_sauce');
    await login.logout();
    await login.verifyLogout();
});

