const submitBtn = document.getElementById("submitBtn")
const searchWord = document.getElementById("searchWord")
const result = document.getElementById("mean_results")
const example = document.getElementById("mean_ex")
const output = document.querySelector(".dic_name")
const result_box = document.querySelector(".result_box")


result_box.classList.add("dic_hide")
getmeaning = async (event)=>{
    event.preventDefault()
    
    word = searchWord.value
    if (word == "") {
        output.innerHTML = "Input field can not be blank"
    }else{
        try {
            let url  = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            let response = await fetch(url)
            let data = await response.json()
            let arrdata = [data]
            console.log(arrdata)
            
            result.innerText = data[0].meanings[0].definitions[0].definition;
            example.innerText = data[0].meanings[0].definitions[0].example;

            result_box.classList.remove("dic_hide")
            output.classList.add("dic_hide")
            
        } catch {
            output.classList.remove("dic_hide")
            result_box.classList.add("dic_hide")
            output.innerHTML = "Search a VALID Word"
        }
    }
}




submitBtn.addEventListener('click',getmeaning)