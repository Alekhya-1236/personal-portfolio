
const test = require("node:test");
const assert = require("node:assert/strict");

const { isValidEmail, isValidContact } =
    require("../validation.js");

test("Valid email address", () => {
    assert.equal(isValidEmail("abc@gmail.com"), true);
});

test("Invalid email address", () => {
    assert.equal(isValidEmail("abcgmail.com"), false);
});

test("Email without domain extension", () => {
    assert.equal(isValidEmail("abc@gmail"), false);
});

test("Valid contact form", () => {
    assert.equal(
        isValidContact("Achu", "abc@gmail.com", "Hello"),
        true
    );
});

test("Empty name validation", () => {
    assert.equal(
        isValidContact("", "abc@gmail.com", "Hello"),
        false
    );
});

test("Empty message validation", () => {
    assert.equal(
        isValidContact("Achu", "abc@gmail.com", ""),
        false
    );
});
