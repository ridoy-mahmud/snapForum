const loadApi = () => {
    fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
        .then(response => response.json())
        .then(data => loadData(data.posts));
}

const loadData = (data) => {
    const allPosts = document.getElementById('mainPostContainer');
    allPosts.innerHTML = ''; // Clear the container before adding new elements

    data.forEach(singleData => {
        // console.log(singleData);
        const addElement = document.createElement('div');
        addElement.classList = "lg:h-[270px] lg:w-[772px] rounded-2xl border border-transparent hover:border-gray-400 customCard mb-5";
        addElement.innerHTML = `
            <div onclick="showDetails('${singleData.id}')" class="flex justify-normal gap-4 h-full items-center my-auto w-full">
                <div class="">
                    <img class="w-12 h-11 ms-6 rounded-2xl relative bottom-16 mr-6"
                        src="${singleData.image}" alt="">
                </div>
                <div>
                    <p class="text-gray-700 text-sm"><span>#${singleData.category}</span></span> <span class="ms-3">Author : ${singleData.author.name}</span></p><br>
                    <h2 class="font-bold text-gray-800">${singleData.title}</h2></br>
                    
                    <p class="w-8/12">${singleData.description}</p>
                    <div class="flex justify-normal gap-7 mt-7">
                        <div class="flex justify-normal gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <p>567</p>
                        </div>
                        <div class="flex justify-normal gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <p>94</p>
                        </div>
                        <div class="flex justify-normal gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p>47 mins</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        allPosts.appendChild(addElement);
    });
}

document.getElementById("buttonCat").addEventListener("click", function () {
    const getInput = document.getElementById("searchCat");
    const getInputData = getInput.value;
    // console.log(getInputData);
    getInput.value = "";
    const url = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${getInputData}`
    fetch(url)
        .then(response => response.json())
        .then(data => loadCat(data.posts[0]));
});


const apiUrl = 'https://openapi.programming-hero.com/api/retro-forum/posts';
async function showDetails(id) {
    const selectedPostContainer = document.getElementById('selectedPost');
    try {
        const parsedID = parseInt(id);
        const response = await fetch(apiUrl);
        const data = await response.json();
        const post = data.posts;
        post.forEach(findPost => {
            const addElement2 = document.createElement('div');
            addElement2.classList = "mx-8";
            if (parsedID === findPost.id) {
                console.log(findPost);
                addElement2.innerHTML = `
                                        <div class="flex justify-between my-5">
                            <h2 class="text-xl font-bold text-black">${findPost.category}</h2>
                            <p class="flex justify-normal gap-3 "><span><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span> Mark as Read<span class="">(4)</span></p>
                        </div>
                        <div class="lg:w-[326px] lg:h-[82px] bg-white rounded-2xl mx-auto p-3">
                            <div class="flex justify-normal gap-4">
                                <p class="w-8/12">${findPost.description}</p>
                                <div class="flex justify-normal gap-3 my-auto">
                                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </p>
                                    <span>1234</span>
                                </div>
                            </div>
                        </div>
                `
            }
            selectedPostContainer.appendChild(addElement2)
        });



    } catch (error) {
        console.error('Error fetching the post:', error);
    }
}


// const showDetails = async (id) => {
//     const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
//     const data = await res.json();
//     const element = data.posts;
//     const posts = element.find(posts => posts.id === id);
//     console.log(posts);
// }

loadApi();
