const contentful = require('contentful')
const spaceId = 'mlkcd9qxygui';
const enviroment = 'master';
const accessToken = 'sqblb_w8nOyxIe8cGkLsUnTVd5DwwJfUICGEBNOj5xw';

const sdkClient = contentful.createClient({
    space: spaceId,
    accessToken: accessToken
});

export const handleClick = async () => {

    sdkClient.getEntries()
        .then((element) => {
            console.log(element.items)
        })
        .catch(console.error)
}
export const handleClickTwo = async () => {

    sdkClient.getSpace(spaceId)
    .then((res) => res.getEnviroment(enviroment))
    .then((res) => console.log(res))
    .catch(console.error)
}

