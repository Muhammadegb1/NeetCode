// Unique Email Addresses

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
//   return (new Set(emails.map(email => {
//     const [local, domain] = email.split('@');
//     return local.split('+').shift().split('.').join('') + '@' + domain;
//   }))).size;
    const uniqueEmails = new Set();

    for (let email of emails) {
        // Split the email into local name and domain
        const [local, domain] = email.split('@');

        // Ignore everything after the first '+'
        const localName = local.split('+')[0];

        // Remove all '.' characters from the local name
        const cleanedLocal = localName.split('.').join('');

        // Reconstruct the normalized email and add it to the set
        uniqueEmails.add(cleanedLocal + '@' + domain);
    }

    // Return the number of unique normalized emails
    return uniqueEmails.size;
};