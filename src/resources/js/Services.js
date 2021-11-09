class Services {
    constructor() {

    }
    callGet(endpoint) {
        $.get(endpoint, function (data, err) {
            debugger
            if (data != null) {
                return data;

            } else {
                return null;

            }

        });
    }
}