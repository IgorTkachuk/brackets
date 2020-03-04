module.exports = function check(str, bracketsConfig) {
    const confObj = {};
    let currentBracket = "",
        buffer = "";

    for (let i = 0; i < bracketsConfig.length; i++) {
        confObj[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }

    if (!confObj[str[0]]) return false;

    for (let i = 0; i < str.length; i++) {
        if (
            confObj[str[i]] &&
            !(str[i] === confObj[str[i]] && currentBracket === str[i])
        ) {
            currentBracket = str[i];
            buffer += str[i];
        } else {
            if (str[i] === confObj[currentBracket]) {
                buffer = buffer.substring(0, buffer.length - 1);
                currentBracket = buffer[buffer.length - 1];
            } else {
                return false;
            }
        }
    }

    if (buffer.length > 0) return false;
    return true;
};
