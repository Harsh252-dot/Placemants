function flattenObject(nestedObject, parentKey = "", result = {}) {
    for (let key in nestedObject) {
        if (nestedObject.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof nestedObject[key] === "object" && nestedObject[key] !== null) {

                flattenObject(nestedObject[key], newKey, result);
            } else {
                result[newKey] = nestedObject[key];
            }
        }
    }
    return result;
}

const input = {
    user: {
        info: {
            name: "Alice",
            age: 25,
        },
        preferences: {
            theme: "dark",
            notifications: true,
        },
    },
    status: "active",
};

console.log(flattenObject(input));
