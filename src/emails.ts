/**
 * Example:
 * Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
 * Output: 2
 * Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
 * */
export function getNumUniqueEmails(emails: string[]): number {
  const unique = new Set<string>();

  for (const address of emails) {
    let [local, domain] = address.split("@");
    local = local.split("+")[0];
    local = local.split(".").join("");
    unique.add(local + "@" + domain);
  }

  return unique.size;
}
