// ⚙️ هذا الملف يتم تحديثه تلقائياً عبر لوحة التحكم ولا داعي لفتحه يدوياً
const mosqueSetup = {
    cityCode: "abu-dhabi",
    cityName: "أبوظبي",
    countryName: "الإمارات العربية المتحدة",
    mosqueName: "مسجد بسمة البسمه",
    timeOffset: 0,
    fajr: 20,
    dhuhr: 15,
    asr: 15,
    maghrib: 10,
    isha: 15
};

(function() {
    const dataToSave = {
        city: mosqueSetup.cityCode,
        cityName: mosqueSetup.cityName,
        countryName: mosqueSetup.countryName,
        villageName: mosqueSetup.mosqueName,
        timeOffset: mosqueSetup.timeOffset,
        fajr: mosqueSetup.fajr,
        dhuhr: mosqueSetup.dhuhr,
        asr: mosqueSetup.asr,
        maghrib: mosqueSetup.maghrib,
        isha: mosqueSetup.isha
    };
    localStorage.setItem('mosque_settings', JSON.stringify(dataToSave));
})();