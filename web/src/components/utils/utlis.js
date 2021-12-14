export const checkIsNumberEven = (value, firstResult, secondResult) => {
    return value % 2 === 0 ? firstResult : secondResult;
}

export const testEmail = (input) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input.value);
}