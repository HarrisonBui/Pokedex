import React from 'react';

class ItemDetail extends React.Component {
  render(){
    // debugger;
    if(this.props.item){
      const item = this.props.item;
      return(
        <div>
          <h3>Name: {item.name}</h3>
          <h3>happiness: {item.happiness}</h3>
          <h3>Price: {item.price}</h3>
        </div>
      );

    }

    // const item = this.props.itesm.props;
    return(
      <li>
        <h1>Pokemon</h1>
      </li>
    );
  }
}

export default ItemDetail;
