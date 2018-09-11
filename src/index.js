import React from 'react';
import ReactDOM from 'react-dom';
import CompanyInfo from './components/company/foo';
import './index.css';


class Search extends React.Component{
    render(){
        return (
            <div>Search</div>
        );   
       }
}


class Company extends React.Component{

    render(){
     return (
         <div>For the Company Info
             <CompanyInfo />
         </div>
         
     );   
    }
}

class StockTracker extends React.Component{

    render(){
        return (
            <div>The Amazing StockTracker App In React-Redux ;-)
            <Search />
            <Company />
            </div>
        );
    }
}

ReactDOM.render(<StockTracker />, document.getElementById('root'));

