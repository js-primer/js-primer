const ThrowFn = (callback) => {
    throw new Error("message");
    callback();
};
try {
    ThrowFn(() => {});
} catch (error) {
    console.log(error); // => Error: message
}
