import * as DCT from "DCT";
import { React } from "Global";

// export class StringField  extends React.Component {
//     constructor(props) {
//         super(props);
//         var value = props.value;
//         var valid = this.validateName(value);
//         this.state = {value: props.value, valid: valid};
//         this.onChange = this.onChange.bind(this);
//     }
//     validateName(name) {
//         var str = "" + value;
//        if ( value && str.length > 2) return true;
//        return false;
//     }
//    onChange(e) {
//     var val = e.target.value;
//     var isValid = this.validate(val);
//     this.setState({value: val, valid: valid});
//     }
//     handleSubmit(e) {
//         e.preventDefault();
//         var name = this.refs.nameField.value; //this.refs.nameField.value;
//         alert("Имя: " + name);
//     }
//     render(){
//         var color = this.state.valid===true?"green":"red";
//             return <p>
//                 <label>Имя:</label><br />
//                 <input type="text" value={this.state.value} onChange={this.onChange} style={{borderColor:color}} />
//             </p>;
//     }
// }


export class ValidationForm extends React.Component {
    constructor(props) {
        super(props);
        var age = props.age;
        var name = props.name;
        var validName = this.validateName(name);
        var ageIsValid = this.validateAge(age);
        this.state = { name: name, age: age, nameValid: validName, ageValid: ageIsValid  };

        this.onNameChange = this.onNameChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateName = this.validateName.bind(this);
    }
    validateAge(age) {
        if (age > 0) return true;
        return false;
    }
    validateName(name) {
                var str = "" +  name;
               if ( name && str.length > 2) return true;
               return false;
            }
    onAgeChange(e) {
        var val = e.target.value;
        var valid = this.validateAge(val);
        this.setState({ age: val, ageValid: valid });
    }
    onNameChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validateName(val);
        this.setState({name: val, nameValid: valid});
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.nameValid ===true && this.state.ageValid===true){
            alert("Имя: " + this.state.name + " Возраст: " + this.state.age);
        }
    }
    render() {
        return DCT.Execute(() => {
            // цвет границы для поля для ввода имени
            var nameColor = this.state.nameValid === true ? "green" : "red";
            // цвет границы для поля для ввода возраста
            var ageColor = this.state.ageValid === true ? "green" : "red";
            return (
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>Имя:</label><br />
                        <input type="text" value={this.state.name}
                            onChange={this.onNameChange} style={{ borderColor: nameColor }} />
                    </p>
                    <p>
                        <label>Возраст:</label><br />
                        <input type="number" value={this.state.age}
                            onChange={this.onAgeChange} style={{ borderColor: ageColor }} />
                    </p>
                    <input type="submit" value="Отправить" disabled={!(this.state.nameValid ===true && this.state.ageValid===true)}  />
                </form>
            );
        });
    }
}
