const User = require("../src/User");

// User tests here
describe("tests for User class", () => {
  beforeEach(() => {
    user1 = new User("John", "abc123", 20);
  });
  // test username
  it("should have a username property", () => {
    expect(user1.username).toBe("John");
  });
  // test password
  it("should have a password property", () => {
    expect(user1.password).toBe("abc123");
  });
  // test age
});
