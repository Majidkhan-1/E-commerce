const create =document.querySelector('#create');

const form = document.querySelector('.form');

const cross = document.querySelector('#top')

const formO = document.querySelector('form')

const products = document.querySelector('.products')



create.addEventListener('click',()=>{
    form.style.display = 'flex'
})

cross.addEventListener('click',()=>{
    form.style.display = 'none'
})

let productArr = []

let updateIndex = null;

let ui = ()=>{
    products.innerHTML = "";
    productArr.forEach((e,index)=>{
        products.innerHTML += `  <div class="product-card">
            <div class="img">
                <img src="${e.image}" alt="">
            </div>
            <div class="text">
                <h3>${e.productName}</h3>
                <p>${e.description}</p>
                <p>${e.price}</p>
            </div>

            <div class="btn">
                <button onclick="updateProduct('${e.productName}')" class="upd">update</button>
                <button onclick="del(${index})" class="del">delete</button>
            </div>
        </div>`
    })

    
}

formO.addEventListener('submit',(e)=>{
    e.preventDefault()
    

    let productName = e.target[0].value;
    let description = e.target[1].value;
    let price = e.target[2].value;
    let image = e.target[3].value;

    if(productName.trim() === "" || description.trim() === "" || price === "" || image === ""){
        alert('please fill all Fields');
        return;
    }
   
    let obj = {
        productName,
        description,
        price,
        image
    }

    if(updateIndex !== null){
        productArr[updateIndex] = obj;
        updateIndex = null;
    }else{
        
        productArr.push(obj);
    }
    
    ui();
    formO.reset()
     form.style.display = 'none'
})

const updateProduct = (product)=>{
    let pro = productArr.find((e)=> e.productName === product)
       
    
    updateIndex = productArr.findIndex((e)=> e.productName === product)

    
    form.style.display = 'flex';

    formO[0].value = pro.productName;
    formO[1].value = pro.description;
    formO[2].value = pro.price;
    formO[3].value = pro.image;
}

const del =(index)=>{
    productArr.splice(index,1);
    ui()
}