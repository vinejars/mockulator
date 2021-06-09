import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField";

export default class Main extends Component {
    constructor(){
        super();
        this.state ={
            result: ''
        };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.mockIt = this.mockIt.bind(this);
    }

componentDidMount(){
    this.setState({
        result: ''
    })
}
//handle form submission
    handleSubmit(evt){
    evt.preventDefault();
    let value = document.getElementById('mocktext').value;
    let mockValue = this.mockIt(value)
    this.setState({
        result: mockValue
    })
    }

//mockulate text
    mockIt(val){
  let counter = 0;
return val.split('').map((elem, idx)=>{
  if(elem.match(/[a-z]/i) && counter % 2 === 0){
    counter++
    return elem.toLowerCase()
  } else if(elem.match(/[a-z]/i) && counter % 2 !== 0){
    counter++
    return elem.toUpperCase()
  } else if(elem === ' '){
    if(counter % 2 ===0){
    counter = 0;
    return elem
    } else {
      counter = 1;
      return elem
    }
  } else {
    counter++
    return elem
  }
}).join('')
}

    render() {
        let mocked = this.state.result
        return (
            <div>
            <img src='mockulator.png' width={200}/>
{/* input for text to be mocked */}

<form id='input-container' onSubmit={this.handleSubmit}>
<label className="mdc-text-field mdc-text-field--textarea">
<span className="mdc-notched-outline">
<span className="mdc-notched-outline__leading"></span>
<span className="mdc-notched-outline__notch">
</span>
<span className="mdc-notched-outline__trailing"></span>
</span>
<span className="mdc-text-field__resizer">
<textarea className="mdc-text-field__input" placeholder='pUt TeXt To MoCk HeRe' id='mocktext' aria-labelledby="my-label-id" rows="8" cols="40" ></textarea>
</span>
</label>
<div className="mdc-text-field-helper-line">
</div>                

{/* button to mockulate */}

<button id='mockulate'>
mOcKuLaTe!
</button>
                
                </form>

{/* space for the returned text               */}
                <div id='return-text'>
                    {mocked.length ? (
                        mocked
                    ) : (
                        null
                    )}
                </div>
            </div>
        )
    }
}
