import { connect } from 'react-redux';
import Sidebar from './Sidebar';

/*
const SidebarContainer = (props) => {

   return (
      <StoreContext.Consumer>
         {
            (store)=>{
               let state = store.getState().sidebar.friends

           return <Sidebar state={state}/>
            }
         }
      </StoreContext.Consumer>
   )
}*/

let mapStateToProps=(state)=>{
   return{
      friends:state.sidebar.friends
   }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer;