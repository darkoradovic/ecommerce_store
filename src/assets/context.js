import React, { Component } from 'react'
import { storeProducts, detailProduct } from '../data';

const ProductContext = React.createContext();



class ProductProvider extends Component {

    state = {
        products: [],
        detail: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount() {
        this.setProducts();
    }

    //making a copy of the values(products)
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];

        })
        this.setState({ products: tempProducts })
    }


    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detail: product };
        });
    };

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        }, this.addTotal
        )

    }


    openModal = (id) => {
        const product = this.getItem(id);
        this.setState({ modalProduct: product, modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState({ cart: [...tempCart] }, () => {
            this.addTotal();
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState({ cart: [...tempCart] }, () => {
                this.addTotal();
            })
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState({ cart: [...tempCart], products: [...tempProducts] }, () => {
            this.addTotal();
        });

    }

    clearCart = () => {
        this.setState({ cart: [] }, () => {
            this.setProducts();
            this.addTotal();
        });
    }

    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map((item) => { subTotal += item.total });
        const tempTax = subTotal * 0.18;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = parseFloat(subTotal + tax).toFixed(2);

        this.setState({ cartSubTotal: subTotal, cartTax: tax, cartTotal: total });
    }


    /* tester = () => {
        console.log('store product', this.state.products[0].inCart);
        console.log('data product', storeProducts[0].inCart);

    const tempProducts = [...this.state.products];
    tempProducts[0].inCart = true;
    this.setState({products: tempProducts}, () =>{
        console.log('store product', this.state.products[0].inCart);
        console.log('data product', storeProducts[0].inCart);
    })
    
} */
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {/* <button onClick={this.tester}>tes me</button> */}
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };