module.exports = function check(str, bracketsConfig) {
    if (str === "") return true;
    if (str.length % 2 !== 0) return false;

    let chars = str.split("");
    let openIndex;
    let closeIndex;

    for (let i = 0, len = chars.length; i < len; i++) {
        bracketsConfig.forEach((elem) => {
            openIndex = chars.indexOf(elem[0]);
            closeIndex = chars.indexOf(elem[1]);
            if (elem[0] === elem[1]) {
                closeIndex = chars.lastIndexOf(elem[1]);
            }

            if (openIndex % 2 === 0) {
                if (chars.some((x, i) => i % 2 !== 0 && x === elem[1])) {
                    chars = chars.filter((el, i) => i !== openIndex);
                    chars = chars.filter((el, i) => i !== closeIndex - 1);
                }
            }

            if (openIndex % 2 !== 0) {
                if (chars.some((x, i) => i % 2 === 0 && x === elem[1])) {
                    chars = chars.filter((el, i) => i !== openIndex);
                    chars = chars.filter((el, i) => i !== closeIndex - 1);
                }
            }
        });
    }

    return chars.length === 0 ? true : false;
};
