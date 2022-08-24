const btn = document.querySelectorAll("[data-btn]");
const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const span = document.querySelectorAll("span")
const url = "data.json";

async function getData() {
    const response = await fetch(url);
    const data = await response.json();

    for(let i = 0; i < data.length; i++) {
        if(data[i].title == h2[i].textContent) {
            btn[0].addEventListener("click", () => {
                btn[0].classList.add("active");
                btn[1].classList.remove("active");
                btn[2].classList.remove("active");
                h3[i].textContent = `${data[i].timeframes.daily.current}hrs`
                span[i].textContent = `${data[i].timeframes.daily.previous}`
            })

            btn[1].addEventListener("click", () => {
                btn[1].classList.add("active");
                btn[2].classList.remove("active");
                btn[0].classList.remove("active");
                h3[i].textContent = `${data[i].timeframes.weekly.current}hrs`
                span[i].textContent = `${data[i].timeframes.weekly.previous}`
            })

            btn[2].addEventListener("click", () => {
                btn[2].classList.add("active");
                btn[1].classList.remove("active");
                btn[0].classList.remove("active");
                h3[i].textContent = `${data[i].timeframes.monthly.current}hrs`
                span[i].textContent = `${data[i].timeframes.monthly.previous}`
            })
        }
    }
}


getData();