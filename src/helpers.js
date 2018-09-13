export const capitalize = (text) => (
    text.charAt(0).toUpperCase() + text.slice(1)
)

export const isObjEmpty = (obj) => (
    Object.keys(obj).length === 0 && obj.constructor === Object
)