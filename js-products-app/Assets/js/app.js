class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }


}

class UI {
    constructor(){

    }

    addProduct(product){
        const productList = document.querySelector('#product-list');
        const element = document.createElement('div');

        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name:</strong> ${product.name}
                    <strong>Product Price:</strong> ${product.price}
                    <strong>Product Year:</strong> ${product.year}
                    <a href="#" name="delete" class="btn btn-danger"> Delete </a>
                </div>
            </div>
            
        `;

        productList.appendChild(element);
    }

    resetForm(){
        document.querySelector('#product-form').reset();
    }

    deleteProduct(element){
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Successfully', 'info');
        }
    }
    

    showMessage(msj, cssClass){
        const div = document.createElement('div');

        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(msj));

        //SHOWING IN DOM
        const container = document.querySelector('.container');

        document.querySelector('#app');
        container.insertBefore(div, app);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        },3000);
    }
}

document.getElementById('product-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const price = document.querySelector('#price').value;
    const year = document.querySelector('#year').value;

    const product = new Product(name, price, year);
    const ui = new UI();

    if (name === '' || price === '' || year === '') {
        return ui.showMessage('Complete Fields Please', 'danger')
    }

    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage('Product Added Successfully', 'success');
    
});

document.getElementById('product-list').addEventListener('click', (e) => {
    e.preventDefault();

    const ui = new UI();

    ui.deleteProduct(e.target);
})