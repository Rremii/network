export const required = (value) => {
    if (value) return undefined;
    return "Field is required"
}
export const maxLenght = (maxLenght) => (value) => {
    if (value && value.length > maxLenght) return ` max lenght is ${maxLenght} simbols`
    return undefined
}

