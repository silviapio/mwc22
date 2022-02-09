export const isEmailInputOk = str => {
    /* checks the email against a simple regex (contains at least one character before the "@" and anything but a space before and after the "." in the domain part)
    */
    const simpleRegex = /(.+)@(.+){2,}\.(.+){2,}/;
    return simpleRegex.test(str);
}