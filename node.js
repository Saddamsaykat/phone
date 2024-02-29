const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data

    displayPhones(phones, isShowAll);
}
const displayPhones = (phones, isShowAll) => {
    // console.log(phones)
    const phoneConTainer = document.getElementById("phone-container");
    phoneConTainer.textContent = '';
    // display show all btn
    const showContainer = document.getElementById("show-all-container")
    if (phones.length > 12 && !isShowAll) {
        showContainer.classList.remove('hidden')
    } else {
        showContainer.classList.add("hidden")
    }

    if (!isShowAll) {
        phones = phones.slice(0, 12);

    }




    phones.forEach(phone => {
        console.log(phone)
        const phoneCard = document.createElement("div");
        phoneCard.classList = `card card-compact p-4 bg-base-100 shadow-xl`
        phoneCard.innerHTML =
            `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
        
        `;
        phoneConTainer.appendChild(phoneCard);
    })
    toggleLoadingSpinner(false);
}

//handlaer search
const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true);
    const input = document.getElementById("text-input");
    const trow = input.value;
    loadPhone(trow, isShowAll);
}
const toggleLoadingSpinner = (isLoading) => {
    const lodaingSpinner = document.getElementById("loading");
    if (isLoading) {
        lodaingSpinner.classList.remove('hidden');

    } else {
        lodaingSpinner.classList.add('hidden')
    }

}

const handleShowAll = () => {
    const getShowBtn = document.getElementById("show-all-btn");
    handleSearch(true);
}

// loadPhone("samsung");