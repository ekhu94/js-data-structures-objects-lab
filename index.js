const driver = {}

const updateDriverWithKeyAndValue = (obj, k, v) => {
    return Object.assign({}, obj, {[k]: v})
}

const destructivelyUpdateDriverWithKeyAndValue = (obj, k, v) => {
    return Object.assign(obj, {[k]: v})
}

const deleteFromDriverByKey = (obj, k) => {
    const output = Object.assign({}, obj)
    delete output[k]
    return output
}

const destructivelyDeleteFromDriverByKey = (obj, k) => {
    delete obj[k]
    return obj
}