export function printMessage(msg: string | string[]) {
  if (typeof msg === "string") {
    console.log(`welcome ${msg}`);
  } else {
    console.log(`welcome ${msg.join()}`);
  }
}