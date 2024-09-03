

export default function reducer (count = 0, action) {

    if (action.type === 'RESET') {
        return {count: action.payload}
    } else if (action.type === 'PLUS_ONE') {
        return {count: action.payload}
    } else if (action.type === 'PLUS_TEN') {
         return {count: action.payload}
    } else if (action.type === 'MINUS_ONE') {
         return {count: action.payload}
    } else if (action.type === 'MINUS_TEN') {
         return {count: action.payload}
     }

    return count
}