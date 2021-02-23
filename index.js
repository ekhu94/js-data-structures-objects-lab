const driver = {};

const updateDriverWithKeyAndValue = (obj, k, v) => {
    return Object.assign({}, obj, {[k]: v});
}

const destructivelyUpdateDriverWithKeyAndValue = (obj, k, v) => {
    return Object.assign(obj, {[k]: v});
}

const deleteFromDriverByKey = (obj, k) => {
    const newObj = Object.assign({}, obj);
    delete newObj[k];
    return newObj;
}

const destructivelyDeleteFromDriverByKey = (obj, k) => {
    delete obj[k];
    return obj;
}