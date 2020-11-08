import React, {useEffect} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc/';
import {menuLoaded, menuRequested, addedToCart} from '../../actions/';
import Spinner from '../spinner/';


import './menu-list.scss';

function MenuList (props) {
  
    const {menuItems, loading, addedToCart} = props;
    
    useEffect(() => {
        props.menuRequested()

        const {RestoService} = props;
        RestoService.getMenuItems()
            .then(res => props.menuLoaded(res));
    },[]);

    if(loading) {
        return <Spinner></Spinner>
    }

        return (
            <ul className="menu__list">
                {
                menuItems.map(menuItem => {
                    return <MenuListItem 
                     key={menuItem.id}
                     menuItem={menuItem}
                     onAddToCart={()=> addedToCart(menuItem.id)}>
                     </MenuListItem>
                })
                }
                
            </ul>
        )
}
 const mapStateToProps = (state) => {
     return {
         menuItems: state.menu,
         loading: state.loading
     }
 }
 const mapDispatchToProps = {
       menuLoaded,
       menuRequested,
       addedToCart
};



 export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));


