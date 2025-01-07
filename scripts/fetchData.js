// scripts/fetchData.js
export async function fetchAzkar(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data['أذكار الصباح والمساء'] || [];
    } catch (error) {
        console.error('حدث خطأ أثناء جلب البيانات', error);
        return [];
    }
}
