import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';


export default class FilterableProdductTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText:'',
			inStockOnly: false
		};
		this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
		this.handleInStockInput = this.handleInStockInput.bind(this);
	}
	handleFilterTextInput(filterText) {
		this.setState({
			filterText: filterText
		});
	}

	handleInStockInput(inStockOnly) {
		this.setState({
			inStockOnly: inStockOnly
		});
	}

	render() {
		return(
				<div>


					<SearchBar   filterText={this.state.filterText}
					inStockOnly = {this.state.inStockOnly} 
					entradadelinput={this.handleFilterTextInput}
					estadodelcheck = {this.handleInStockInput}
					                             />

                    

					
					<ProductTable products={this.props.store}
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}/>
					
				</div>
			);
	}
}