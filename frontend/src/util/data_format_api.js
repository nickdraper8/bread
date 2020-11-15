export const formatToJson = (data) => {
    let obj = {};
    data.forEach(dato => {
        obj[dato._id] = dato;
    });
    return obj
};

export const milisecondsConverter = (ms) => {
    if (ms > 3600000) {
        return `${Math.floor(ms / 3600000)} hours`
    } else if (ms > 60000) {
        return `${Math.floor(ms / 60000)} minutes`
    } else {
        return `${Math.floor(ms / 1000)} seconds`
    }
}