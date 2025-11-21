const loadUsers = require("../src/apiExtra");
const axios = require("axios");

jest.mock("axios");

describe("loadUsers API test", () => {
    test("Отримання списку користувачів (mock)", async () => {
        const mockResponse = {
            data: [
                { id: 1, name: "User One" },
                { id: 2, name: "User Two" }
            ]
        };

        axios.get.mockResolvedValue(mockResponse);

        const users = await loadUsers();

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(users.length).toBe(2);
        expect(users[1].name).toBe("User Two");
    });
});
