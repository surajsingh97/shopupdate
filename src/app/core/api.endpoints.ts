export class ApiEndpoint {
    public static data(): any {
        return {
            login: {
                url: "login",
                method: "POST",
            },
            register: {
                url: "register",
                method: "POST",
            },
            verify: {
                url: "verify",
                method: "POST",
            },
            uploadItem: {
                url: "upload",
                method: "POST",
            },
            getItem: {
                url: "getitem",
                method: "GET",
            },
            Update: {
                url: "update",
                method: "POST",
            },
            Delete: {
                url: "deleteitem",
                method: "POST",
            },
        };
    }
}
