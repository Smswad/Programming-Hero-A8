const getInstalledApp = () => {
    const storedAppSTR = localStorage.getItem("installedList");
    if (storedAppSTR) {
        const storedAppData = JSON.parse(storedAppSTR).map(Number);
        return storedAppData;
    }
    else {
        return [];
    }
}

const addInstalledApp = (id) => {
    const storedAppData = getInstalledApp();
    const numericId = Number(id);
    if (storedAppData.includes(numericId)) {
        alert("This App is already Installed!");
        return;
    }
    // else {
    //     storedAppData.push(id);
    //     console.log(storedAppData);
    //     const data = JSON.stringify(storedAppData);
    //     localStorage.setItem("installedList", data);
    //     alert("The App in Installing!");
    // }
    localStorage.setItem("installedList", JSON.stringify([...storedAppData, numericId]));
}
// apps = storedAppData
const removeInstalledApp = (id) => {
    const storedAppData = getInstalledApp();
    const numericId = Number(id);

    const updatedApps = storedAppData.filter(appId => appId !== numericId);

    localStorage.setItem("installedList", JSON.stringify(updatedApps));

    // alert("App Uninstalled!");
};


export { addInstalledApp, getInstalledApp, removeInstalledApp };