module.exports = mongoose => {
var schema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email:String,
    password:String,
    pin_number:Number,
    skills:Array,
    phone_number:Object,
    medium:String,
    courses:Array,
    },
    { timestamps: true }
);

schema.method("toJSON", function() {
    const {
        _id,first_name,last_name,email,password,pin_number,skills,phone_number,medium,courses,...object 
    } = this.toObject();
    object.id = _id;
    object.first_name = first_name;
    object.last_name = last_name;
    object.email = email;
    object.pin_number = pin_number;
    object.skills = skills;
    object.phone_number = phone_number;
    object.medium = medium;
    object.courses = courses;
    delete object.createdAt;
    return object;
});

const Student = mongoose.model("student", schema);
    return Student;
};