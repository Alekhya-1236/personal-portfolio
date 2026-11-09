
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

function isValidContact(name, email, message) {
    return String(name).trim() !== "" &&
           isValidEmail(email) &&
           String(message).trim() !== "";
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { isValidEmail, isValidContact };
}
