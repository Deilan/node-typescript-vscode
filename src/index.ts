import { Greeter } from "./greeter";

const greeter = new Greeter<string>("Hello, world");

setInterval(() => {
    // tslint:disable-next-line:no-console
    console.log(greeter.greet());
}, 1000);
