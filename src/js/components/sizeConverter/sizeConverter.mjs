export function sizeConverter(bite) {
    let res = (bite /1024 / 1024 / 1024).toFixed(2)
    if (Math.trunc(res)){
        return `${res} GB`
    }
    res = (bite /1024 / 1024).toFixed(2)
    if (Math.trunc(res)){
        return `${res} MB`
    }
    res = (bite /1024).toFixed(2)
    if (Math.trunc(res)){
        return `${res} KB`
    }
    return `${bite.toFixed(2)} B`

    
}