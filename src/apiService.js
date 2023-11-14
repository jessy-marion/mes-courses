//GET

const mockAPI = "https://restapi.fr/api/courses";
export const fetchData = async (APIState, setAPIState) => {
  setAPIState({ ...APIState, loading: true });
  try {
    const response = await fetch(mockAPI);

    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    const data = await response.json();
    setAPIState({
      loading: false,
      error: null,
      data: Array.isArray(data) ? data : [data],
    });
  } catch (error) {
    setAPIState({ loading: false, error: true, data: undefined });
    console.log("erreur", error);
  }
};

//PUT

export const sendData = async (newItem, APIState, setAPIState) => {
  try {
    const response = await fetch(mockAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });

    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    const addItem = await response.json();

    setAPIState((APIState) => ({
      ...APIState,
      data: [...APIState.data, addItem],
    }));
  } catch (error) {
    setAPIState({ loading: false, error: true, data: undefined });

    console.log("erreur", error);
  }
};

//DELETE

export const deleteData = async (item, APIState, setAPIState) => {
  try {
    const response = await fetch(`${mockAPI}/${item._id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }

    const filtered = APIState.data.filter((el) => el._id !== item._id);

    setAPIState({
      ...APIState,
      data: filtered,
    });
  } catch (error) {
    console.log("erreur", error);
  }
};

//PATCH
export const patchData = async (input, item, APIState, setAPIState) => {
  try {
    const response = await fetch(`${mockAPI}/${item._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item: input }),
    });
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    const updatedItem = await response.json();

    const selectedData = APIState.data.map((el) =>
      el._id === updatedItem._id ? updatedItem : el,
    );
    setAPIState({ ...APIState, data: selectedData });
  } catch (error) {
    console.log("erreur", error);
  }
};

export const patchDataDone = async (item, APIState, setAPIState) => {
  try {
    const response = await fetch(`${mockAPI}/${item._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: !item.done }),
    });
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    const updatedItem = await response.json();

    const selectedData = APIState.data.map((el) =>
      el._id === updatedItem._id ? updatedItem : el,
    );
    setAPIState({ ...APIState, data: selectedData });
  } catch (error) {
    console.log("erreur", error);
  }
};
