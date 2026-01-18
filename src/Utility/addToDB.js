const getInstalledApp = () => {
    const storedAppSTR = localStorage.getItem("installedList");
    if (storedAppSTR) {
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    }
    else {
        return [];
    }
}

const addInstalledApp = (id) => {
    const storedAppData = getInstalledApp();
    if (storedAppData.includes(id)) {
        alert("This App is already Installed!");
    }
    else {
        storedAppData.push(id);
        console.log(storedAppData);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("installedList", data);
        alert("The App in Installing!");
    }
}

const removeInstalledApp = (id) => {
    const storedAppData = getInstalledApp();

    const updatedApps = storedAppData.filter(appId => appId !== id);

    localStorage.setItem("installedList", JSON.stringify(updatedApps));

    alert("App Uninstalled!");
};


export { addInstalledApp, getInstalledApp, removeInstalledApp };