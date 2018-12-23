const internalFoo = "foo";
function internalBar() { };
export { internalFoo as foo, internalBar as bar };
