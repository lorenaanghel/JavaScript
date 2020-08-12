const fs = require("fs");

function main() {

    //Read
    fs.readFile("./ChangeBaseNumbers.csv", "utf8", function read(err, data) {
        if (err) {
            throw err;
        }

        //process
        let rows = data.split("\n");
        let array = [];
        for (let i = 0; i < rows.length; i++) {
            let elements = rows[i].split(",");
            let x = baseConverter(elements[0], elements[1], elements[2]);
            array.push(x);
        }

        //write
            fs.writeFile("Output.txt", array, (err) => {
                if (err) throw err;
            });
    });
}

//let output = parseInt(number, base).toString(2nd base);

function baseConverter(input, from_base, to_base) {
    let output = "";
    if (input !== undefined) {
        if (to_base >= 2 && to_base <= 36) {
            output = parseInt(input, from_base).toString(to_base);
        }
    }
    return output;
}

main();