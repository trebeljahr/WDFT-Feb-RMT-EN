function options(method, body) {
  const commonOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return { ...commonOptions, method, body: JSON.stringify(body) };
}

class APIWrapper {
  constructor() {
    this.baseUrl =
      process.env.API_BASE_URL || "http://localhost:5005/api/todos/";
  }

  async callApi(url, options) {
    if (options.method) console.log(options.method);
    console.log(url);
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }

  delete(id) {
    return this.callApi(this.baseUrl + "delete", options("DELETE", { id }));
  }

  getAll() {
    return this.callApi(this.baseUrl);
  }

  update(updateObj) {
    return this.callApi(this.baseUrl + "update", options("POST", updateObj));
  }

  create(newTodoObj) {
    return this.callApi(this.baseUrl + "create", options("POST", newTodoObj));
  }
}

export const TodosApi = new APIWrapper();
