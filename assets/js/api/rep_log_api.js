/**
 * Returns a Promise object with the rep logs data
 *
 * @returns {Promise<Response>}
 */
export function getRepLogs() {
    return fetch('/reps', {
        credentials: 'same-origin'
    })
    .then(response => {
       return response.json().then((data) => data.items);
    });
}