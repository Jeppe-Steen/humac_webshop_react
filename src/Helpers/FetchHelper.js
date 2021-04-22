export async function FetchHelper(url, query) {

    try {
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer EdzgurLKN3m38xXM5hyk6zYn6mD6yiEl-ryAIjwffY4",
                },
            body: JSON.stringify({query}),
        }

        let response = await fetch(url, options);
        let data = await response.json();

        return data;
    }
    catch(error) {
        console.log(error)
    }
}