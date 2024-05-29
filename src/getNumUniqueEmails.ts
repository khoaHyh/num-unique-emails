import { getNumUniqueEmails } from "./emails";

const args = process.argv.slice(2);
if (args.length !== 1) {
  throw Error(
    'Usage: yarn run get-num-unique-emails \'["one@gmail.com","two@gmail.com","three@gmail.com"]\'',
  );
}

let emails: string[];
try {
  emails = JSON.parse(args[0]);
} catch (err) {
  throw Error(
    "Invalid JSON format. Ensure a valid JSON array of strings is provided.",
  );
}

console.log("Number of unique emails:", getNumUniqueEmails(emails));
