import { writeFile } from 'fs/promises';

const f1 = () => {
    console.log("F1");
};

const f2 = () => {
    console.log("F2");
};

const f3 = () => {
    console.log("F3");
};

const writeData = async () => {
    await writeFile("note.txt", "I am fs module");
    console.log("file written");
};

const main = () => {
    console.log("main");

    writeData();

    setTimeout(f2, 0);
    setImmediate(f3);
    process.nextTick(f1);

    console.log("end");

    new Promise((resolve, reject) => {
        console.log("I am Promise 1");
        resolve();
    });

    new Promise((resolve, reject) => {
        console.log("I am Promise 2");
        resolve();
    });
};

main();