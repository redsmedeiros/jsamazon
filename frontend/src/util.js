export const parseRequestUrl = () => {

    const url = document.location.hash.toLocaleLowerCase()

    const request = url.split('/')

    return {
        resource: request[1],
        id: request[3],
        action: request[3]
    }
}