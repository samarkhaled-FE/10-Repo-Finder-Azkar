// scripts/toggleAzkar.js
import { fetchAzkar } from './fetchData.js';
import { createCounter } from './counter.js';
import { showHearts } from './heartAnimation.js';

export let isAzkarVisible = false;

export async function toggleAzkar() {
    const apiUrl = 'https://www.hisnmuslim.com/api/ar/27.json';
    const repoList = document.getElementById('repoList');

    if (isAzkarVisible) {
        repoList.innerHTML = '';
        isAzkarVisible = false;
        document.getElementById('fetchDataBtn').textContent = 'قِرَاءَةُ أَذْكَارِي';

        showHearts();
    } else {
        const azkar = await fetchAzkar(apiUrl);
        
        if (azkar && azkar.length > 0) {
            repoList.innerHTML = '';

            azkar.forEach(item => {
                const repoItem = document.createElement('div');
                repoItem.classList.add('repo-item');

                const repoTitle = document.createElement('h3');
                repoTitle.textContent = item.ARABIC_TEXT || 'لا يوجد نص';

                const repoDescription = document.createElement('p');
                repoDescription.textContent = `التكرار: ${item.REPEAT} مرات`;

                const counter = createCounter(item);

                repoItem.appendChild(repoTitle);
                repoItem.appendChild(repoDescription);
                repoItem.appendChild(counter); 
                repoList.appendChild(repoItem);
            });

            isAzkarVisible = true;
            document.getElementById('fetchDataBtn').textContent = 'تَمَّ قِرَاءَةُ أَذْكَارِي بِتَوْفِيقٍ مِنَ اللَّهِ';
        } else {
            alert('لا توجد بيانات لعرضها');
        }
    }
}
