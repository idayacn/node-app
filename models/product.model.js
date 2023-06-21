module.exports = mongoose => {

    const productSchema = mongoose.Schema({
        // _id: mongoose.Schema.Types.ObjectId,
        name: { type: String, required: true },
        price: { type: Number, required: true },
        productImage: { type: String, required: true }
    },{ timestamps: true }
    );


    productSchema.method("toJSON", function() {
        const {
            _id,name,price,productImage,...object 
        } = this.toObject();
        object.id = _id;
        object.name = name;
        object.price = price;
        object.productImage = productImage;
        delete object.createdAt;
        return object;
    });

    const Product = mongoose.model("product", productSchema);
    return Product;
};