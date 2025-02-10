export function setSessionRecord(name, value) {
    console.info("the setsession record function is executed.");
    this.name = name;
    this.value = value;
    sessionStorage.setItem(name, value);
}