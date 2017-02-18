export function myExternalFunction(x, y, ...rest) {
    console.log("Sum = " + rest.length)
    for (i = 0; i < rest.length; i++) {
        console.log("rest value " + i + " is a " + rest[i].constructor.name);
    }
}