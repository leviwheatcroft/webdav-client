function handleResponseCode(response) {
    var status = parseInt(response.status, 10),
        err;
    if (status >= 400) {
        err = new Error("Invalid response: " + status + " " + response.statusText);
        err.status = status;
        throw err;
    }
    return response;
}

module.exports = {

    handleResponseCode: handleResponseCode

};