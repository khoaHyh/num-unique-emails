import { getNumUniqueEmails } from "../emails";

describe("src/emails.ts", () => {
  describe("getNumUniqueEmails()", () => {
    it("successfully returns the number of unique email addresses when given valid inputs", () => {
      const input = ["one@gmail.com", "two@gmail.com"];
      const response = getNumUniqueEmails(input);
      expect(response).toBe(2);
    });

    it("successfully returns correct number of unique email addresses that actually receive emails when the inputs contain '.' and '+' chars", () => {
      const input = [
        "one@gmail.com",
        "one+two@gmail.com",
        "o.n.e@gmail.com",
        "one@g.mail.com",
      ];
      const response = getNumUniqueEmails(input);
      expect(response).toBe(2);
    });
  });
});
