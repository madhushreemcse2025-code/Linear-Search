function linearSearch() {

    const arr = [10, 20, 30, 40, 50];
    const key = Number(document.getElementById("searchValue").value);

    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            document.getElementById("result").innerText =
                "Element found at position " + (i + 1);
            found = true;
            break;
        }
    }

    if (!found) {
        document.getElementById("result").innerText =
            "Element not found";
    }
}