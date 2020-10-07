export const formatToJson = (data) => {
    let obj = {};
    data.forEach(dato => {
        obj[dato._id] = dato;
    });
    return obj
};